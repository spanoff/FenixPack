// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { View } from 'react-native'
import { isEmail, isLength } from 'validator'

// UI Imports
import Button from '../../../ui/button/Button'
import InputText from '../../../ui/input/Text'
import styles from './styles'

// App Imports
import config from '../../../setup/config'
import { register } from '../../user/api/actions'
import { messageShow, messageHide } from '../../common/api/actions'

// Component
class Signup extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: false,

      name: '',
      email: '',
      password: ''
    }
  }

  loading = isLoading => {
    this.setState({
      isLoading
    })
  }

  onSubmitRegister = async () => {
    const { register, messageShow, messageHide } = this.props

    const user = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    }

    // Validate
    let error = false

    if (!isLength(user.name, { min: 3 })) {
      messageShow("Имя должно быть не менее 3 символов. Пожалуйста, попробуйте еще раз..");

      error = true
    } else if (!isEmail(user.email)) {
      messageShow("Указанный Вами электронный ящик недействителен. Пожалуйста, попробуйте еще раз..");

      error = true
    } else if (!isLength(user.password, { min: 3 })) {
      messageShow("Пароль должен иметь длину не менее 3 символов. Пожалуйста, попробуйте еще раз..");

      error = true
    }

    if (error) {
      setTimeout(() => {
        messageHide()
      }, config.message.error.timers.default)

      return false
    } else {
      const { onSuccessRegister } = this.props

      this.loading(true)

      messageShow('Регистрируем Вас в системе, пожалуйста подождите...')

      try {
        const response = await register(user)
        if (response.data.errors.length > 0) {
          messageShow(response.data.errors[0].message)
        } else {
          messageShow('Регистрация успешна, Добро пожаловать!')
          onSuccessRegister()
        }
      } catch (error) {
        messageShow('Была ошибка, связанная с вашей регистрацией. Пожалуйста, попробуйте еще раз..')
      } finally {
        this.loading(false)
        setTimeout(() => {
          messageHide()
        }, config.message.error.timers.long)
      }
    }
  }

  render() {
    const { isLoading, name, email, password } = this.state

    return (
      <View>
        <InputText
          placeholder={'Логин'}
          returnKeyType={'next'}
          value={name}
          onChangeText={name => this.setState({ name })}
          autoFocus={true}
          blurOnSubmit={false}
          onSubmitEditing={() => {
            this.inputEmail.focus()
          }}
        />
        <InputText
          inputRef={input => {
            this.inputEmail = input
          }}
          placeholder={'Email'}
          keyboardType={'email-address'}
          autoCapitalize={'none'}
          returnKeyType={'next'}
          value={email}
          onChangeText={email => this.setState({ email })}
          blurOnSubmit={false}
          onSubmitEditing={() => {
            this.inputPassword.focus()
          }}
        />

        <InputText
          inputRef={input => {
            this.inputPassword = input
          }}
          placeholder={'Пароль'}
          secureTextEntry={true}
          returnKeyType={'go'}
          value={password}
          onChangeText={password => this.setState({ password })}
          onSubmitEditing={event => this.onSubmitRegister(event)}
        />

        <View style={styles.buttonContainer}>
          <View style={styles.buttonContainerLeft} />

          <View style={styles.buttonContainerRight}>
            <Button
              title={'Регистрация'}
              iconLeft={'check'}
              onPress={this.onSubmitRegister}
              theme={'primary'}
              disabled={isLoading}
            />
          </View>
        </View>
      </View>
    )
  }
}

// Component Properties
Signup.propTypes = {
  onSuccessRegister: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  messageShow: PropTypes.func.isRequired,
  messageHide: PropTypes.func.isRequired
}

export default connect(null, { register, messageShow, messageHide })(Signup)
