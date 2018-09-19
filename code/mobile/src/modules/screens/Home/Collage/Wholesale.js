// Imports
import React from 'react'
import PropTypes  from 'prop-types'
import { Text, View, Image } from 'react-native'

// Assets
import wholesale1Image from '../../../../../assets/images/stock/wholesale/1.jpg'
import wholesale2Image from '../../../../../assets/images/stock/wholesale/2.jpg'
import wholesale3Image from '../../../../../assets/images/stock/wholesale/3.jpg'

// UI Imports
import Button from '../../../../ui/button/Button'
import styles from './styles'

// Component
const Collagewholesale = props => (
  <View style={styles.container}>
    <View style={styles.imagesContainer}>
      <View>
        <Image
          source={wholesale1Image}
          resizeMode={"contain"}
          style={styles.imageLong}
        />
      </View>

      <View style={styles.imagesSplitContainer}>
        <View>
          <Image
            source={wholesale2Image}
            resizeMode={"contain"}
            style={styles.imageSplit}
          />
        </View>

        <View>
          <Image
            source={wholesale3Image}
            resizeMode={"contain"}
            style={styles.imageSplit}
          />
        </View>
      </View>
    </View>

    <View style={styles.titleContainer}>
      <Text style={styles.title}>
        Подписка на пакеты для оптовых покупателей
      </Text>
    </View>

    <View style={styles.content}>
      <Text style={styles.description}>
         Оформляя подписку на рассылку информационных пакетов для оптовых покупателей от ТМ "Феникс" Вы получаете следующие возможности:
        1.Узнавать о выпуске новых моделей дверей раньше других и соответственно Вы можете планировать и совершать предзаказы на новейшие модели дверей.
        2.Вы будете всегда в курсе актуальных цен на существующие модели, а также на готовящиеся к производству.
        3. Об акционных предложениях Вы тоже узнаете из пакетов рассылки в первую очередь.
      </Text>

      <Button
        iconLeft={"add"}
        title={"Оформить подписку"}
        theme={"secondary"}
        onPress={props.getSubscription}
      />
    </View>
  </View>
);

// Component Properties
Collagewholesale.propTypes = {
  getSubscription: PropTypes.func.isRequired
}

export default Collagewholesale
