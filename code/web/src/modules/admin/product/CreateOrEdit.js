// Imports
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { renderIf, slug } from '../../../setup/helpers';
import { routeImage } from "../../../setup/routes";
// App Imports
import admin from '../../../setup/routes/admin';
import Button from '../../../ui/button';
import { white } from "../../../ui/common/colors";
// UI Imports
import { Grid, GridCell } from '../../../ui/grid';
import Icon from '../../../ui/icon';
import { Input, Select, Textarea } from '../../../ui/input';
import H4 from '../../../ui/typography/H4';
import { messageHide, messageShow, upload } from '../../common/api/actions';
import { createOrUpdate as productCreateOrUpdate, getById as getProductById, getTypes as getProductTypes } from '../../product/api/actions';
import { getSerias as getUserSerias } from '../../user/api/actions';
import AdminMenu from '../common/Menu';



// Component
class CreateOrEdit extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isLoading: false,
      product: {
        id: 0,
        name: '',
        slug: '',
        description: '',
        type: 0,
        seria: 0,
        image: ''
      },
      productTypes: [],
      userSerias: [],
    }
  }

  componentDidMount() {
    // Get product types
    this.props.getProductTypes()
      .then(response => {
        if (response.data.errors && response.data.errors.length > 0) {
          this.props.messageShow(response.data.errors[0].message)
        } else {
          let product = this.state.product
          product.seria = response.data.data.productTypes[0].id

          this.setState({
            productTypes: response.data.data.productTypes,
            product
          })
        }
      })
      .catch(error => {
        this.props.messageShow('Были некоторые ошибки, связанные с типами товаров. Пожалуйста, попробуйте еще раз..')
      })

    // Get user serias
    this.props.getUserSerias()
      .then(response => {
        if (response.data.errors && response.data.errors.length > 0) {
          this.props.messageShow(response.data.errors[0].message)
        } else {
          let product = this.state.product
          product.seria = response.data.data.userSerias[0].id

          this.setState({
            userSerias: response.data.data.userSerias,
            product
          })
        }
      })
      .catch(error => {
        this.props.messageShow('Были некоторые ошибки, связанные с типами товаров. Пожалуйста, попробуйте еще раз..')
      })

    // Get product details (edit case)
    this.getProduct(parseInt(this.props.match.params.id))
  }

  getProduct = (productId) => {
    if (productId > 0) {
      this.props.getProductById(productId)
        .then(response => {
          if (response.data.errors && response.data.errors.length > 0) {
            this.props.messageShow(response.data.errors[0].message)
          } else {
            this.setState({
              product: response.data.data.productById
            })
          }
        })
        .catch(error => {
          this.props.messageShow('Были некоторые ошибки, связанные с типами товаров. Пожалуйста, попробуйте еще раз..')
        })
    }
  }

  onChange = (event) => {
    let product = this.state.product
    product[event.target.name] = event.target.value

    if (event.target.name === 'name') {
      product.slug = slug(event.target.value)
    }

    this.setState({
      product
    })
  }

  onChangeSelect = (event) => {
    let product = this.state.product
    product[event.target.name] = parseInt(event.target.value)

    this.setState({
      product
    })
  }

  onSubmit = (event) => {
    event.preventDefault()

    this.setState({
      isLoading: true
    })

    this.props.messageShow("Сохранение товара, подождите ...");

    // Save product
    this.props.productCreateOrUpdate(this.state.product)
      .then(response => {
        this.setState({
          isLoading: false
        })

        if (response.data.errors && response.data.errors.length > 0) {
          this.props.messageShow(response.data.errors[0].message)
        } else {
          this.props.messageShow('Товар успешно сохранен.')

          this.props.history.push(admin.productList.path)
        }
      })
      .catch(error => {
        this.props.messageShow('Произошла ошибка. Пожалуйста, попробуйте еще раз.')

        this.setState({
          isLoading: false
        })
      })
      .then(() => {
        window.setTimeout(() => {
          this.props.messageHide()
        }, 5000)
      })
  }

  onUpload = (event) => {
    this.props.messageShow("Загружается файл, подождите ...");

    this.setState({
      isLoading: true
    })

    let data = new FormData()
    data.append('file', event.target.files[0])

    // Upload image
    this.props.upload(data)
      .then(response => {
        if (response.status === 200) {
          this.props.messageShow('Файл успешно загружен.')

          let product = this.state.product
          product.image = `/images/uploads/${ response.data.file }`

          this.setState({
            product
          })
        } else {
          this.props.messageShow("Пожалуйста, попробуйте еще раз.");
        }
      })
      .catch(error => {
        this.props.messageShow("Произошла ошибка. Пожалуйста, попробуйте еще раз.");

      })
      .then(() => {
        this.setState({
          isLoading: false
        })

        window.setTimeout(() => {
          this.props.messageHide()
        }, 5000)
      })
  }

  render() {
    return (
      <div>
        {/* SEO */}
        <Helmet>
          <title>Товары / Создание или изменение - Администратор - ТМ Феникс</title>
        </Helmet>

        {/* Top menu bar */}
        <AdminMenu/>

        {/* Page Content */}
        <div>
          {/* Top actions bar */}
          <Grid alignCenter={true} style={{ padding: '1em' }}>
            <GridCell style={{ textAlign: 'left' }}>
              <Link to={admin.productList.path}>
                <Button><Icon size={1.2}>arrow_back</Icon> Назад</Button>
              </Link>
            </GridCell>
          </Grid>

          {/* Product list */}
          <Grid alignCenter={true} style={{ padding: '1em' }}>
            <GridCell>
              <H4 font="secondary" style={{ marginBottom: '1em', textAlign: 'center' }}>
                {this.props.match.params.id === undefined ? 'Создаем' : 'Изменяем'} товар
              </H4>

              {/* Form */}
              <form onSubmit={this.onSubmit}>
                <div style={{ width: '25em', margin: '0 auto' }}>
                  {/* Name */}
                  <Input
                    type="text"
                    fullWidth={true}
                    placeholder="Название"
                    required="required"
                    name="name"
                    autoComplete="off"
                    value={this.state.product.name}
                    onChange={this.onChange}
                  />

                  {/* Description */}
                  <Textarea
                    fullWidth={true}
                    placeholder="Описание"
                    required="required"
                    name="description"
                    value={this.state.product.description}
                    onChange={this.onChange}
                    style={{ marginTop: '1em' }}
                  />

                  {/* Type */}
                  <Select
                    fullWidth={true}
                    required="required"
                    name="type"
                    value={this.state.product.type}
                    onChange={this.onChangeSelect}
                    style={{ marginTop: '1em' }}
                  >
                    {
                      this.state.productTypes.length > 0
                        ?
                        this.state.productTypes.map(type => (
                          <option value={type.id} key={type.id}>{type.name}</option>
                        ))
                        :
                        <option disabled="disabled" selected="selected">Выберите тип</option>
                    }
                  </Select>

                  {/* Seria */}
                  <Select
                    fullWidth={true}
                    required="required"
                    name="seria"
                    value={this.state.product.seria}
                    onChange={this.onChange}
                    style={{ marginTop: '1em' }}
                  >
                    {
                      this.state.userSerias.length > 0
                        ?
                        this.state.userSerias.map(seria => (
                          <option value={seria.id} key={seria.id}>{seria.name}</option>
                        ))
                        :
                        <option disabled="disabled" selected="selected">Выбеите серию</option>
                    }
                  </Select>

                  {/* Upload File */}
                  <div style={{ marginTop: '1em' }}>
                    <input
                      type="file"
                      onChange={this.onUpload}
                      required={this.state.product.id === 0}
                    />
                  </div>

                  {/* Uploaded image */}
                  {renderIf(this.state.product.image !== '', () => (
                    <img src={routeImage + this.state.product.image} alt="Изображение товара"
                         style={{ width: 200, marginTop: '1em' }}/>
                  ))}
                </div>

                {/* Form submit */}
                <div style={{ marginTop: '2em', textAlign: 'center' }}>
                  <Button type="submit" theme="secondary" disabled={this.state.isLoading}>
                    <Icon size={1.2} style={{ color: white }}>check</Icon> Сохранить
                  </Button>
                </div>
              </form>
            </GridCell>
          </Grid>
        </div>
      </div>
    )
  }
}

// Component Properties
CreateOrEdit.propTypes = {
  productCreateOrUpdate: PropTypes.func.isRequired,
  getProductById: PropTypes.func.isRequired,
  getProductTypes: PropTypes.func.isRequired,
  getUserSerias: PropTypes.func.isRequired,
  upload: PropTypes.func.isRequired,
  messageShow: PropTypes.func.isRequired,
  messageHide: PropTypes.func.isRequired
}

export default withRouter(connect(null, {
  productCreateOrUpdate,
  getProductById,
  getProductTypes,
  getUserSerias,
  upload,
  messageShow,
  messageHide
})(CreateOrEdit))
