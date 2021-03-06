// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Text, View, Image, Alert } from 'react-native'

// Assets
import crateImage from '../../../../assets/images/crate.png'

// UI Imports
import { blockMargin } from '../../../ui/common/responsive'
import Button from '../../../ui/button/Button'
import styles from './styles'

// App Imports
import config from '../../../setup/config'
import { remove as removeSubscription } from '../../subscription/api/actions'
import { messageShow, messageHide } from '../../common/api/actions'

// Component
class Item extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      isLoading: false
    }
  }

  loading = (isLoading) => {
    this.setState({
      isLoading
    })
  }

  unsubscribeCheck = () => {
    Alert.alert(
      "Отписаться",
      "Вы уверены, что хотите остановить подписку на этот пакет?",
      [
        { text: "СОХРАНИТЬ ПОДПИСКУ", onPress: () => {} },
        { text: "ОТПИСАТЬСЯ", onPress: this.unsubscribe }
      ],
      { cancelable: true }
    );
  }

  unsubscribe = () => {
    const { subscription, onSuccessUnsubscribe, removeSubscription, messageShow, messageHide } = this.props

    this.loading(true)

    messageShow('Остановка подписки, пожалуйста подождите...')

    removeSubscription({ id: subscription.id })
      .then(response => {
        if (response.data.errors && response.data.errors.length > 0) {
          messageShow(response.data.errors[0].message)

          this.loading(false)
        } else {
          messageShow('Подписка успешно остановлена.')

          onSuccessUnsubscribe()
        }
      })
      .catch(() => {
        messageShow('Произошла ошибка удаления подписки. Пожалуйста, попробуйте еще раз..')

        this.loading(false)
      })
      .then(() => {
        setTimeout(() => {
          messageHide()
        }, config.message.error.timers.long)
      })
  }

  render() {
    const { subscription, lastItem } = this.props
    const { crate, createdAt } = subscription
    const { isLoading } = this.state

    return (
      <View style={[styles.container, { marginBottom: (lastItem ? 0 : blockMargin) }]}>
        <View style={styles.imageContainer}>
          <Image
            source={crateImage}
            resizeMode={'cover'}
            style={styles.image}
          />
        </View>

        <View style={styles.textContainer}>
          <Text numberOfLines={2} style={styles.title}>
            { crate.name }
          </Text>

          <Text numberOfLines={2} style={styles.description}>
            { crate.description }
          </Text>

          <Text numberOfLines={2} style={styles.description}>
            Подписано { new Date(createdAt).toDateString() }
          </Text>

          <Button
            title={'Отписаться'}
            iconLeft={'remove-circle-outline'}
            theme={'secondary'}
            disabled={isLoading}
            onPress={this.unsubscribeCheck}
          />
        </View>
      </View>
    )
  }
}

// Component Properties
Item.propTypes = {
  subscription: PropTypes.object.isRequired,
  onSuccessUnsubscribe: PropTypes.func.isRequired,
  removeSubscription: PropTypes.func.isRequired,
  messageShow: PropTypes.func.isRequired,
  messageHide: PropTypes.func.isRequired
}

export default connect(null, { removeSubscription, messageShow, messageHide })(Item)
