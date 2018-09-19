// Imports
import React from 'react'
import PropTypes  from 'prop-types'
import { Text, View, Image } from 'react-native'

// Assets
import dealer1Image from '../../../../../assets/images/stock/dealer/1.jpg'
import dealer2Image from '../../../../../assets/images/stock/dealer/2.jpg'
import dealer3Image from '../../../../../assets/images/stock/dealer/3.jpg'

// UI Imports
import Button from '../../../../ui/button/Button'
import styles from './styles'

// Component
const Collagedealer = props => (
  <View style={styles.container}>
    <View style={styles.imagesContainer}>
      <View style={styles.imagesSplitContainer}>
        <View>
          <Image
            source={dealer2Image}
            resizeMode={"contain"}
            style={styles.imageSplit}
          />
        </View>

        <View>
          <Image
            source={dealer3Image}
            resizeMode={"contain"}
            style={styles.imageSplit}
          />
        </View>
      </View>

      <View>
        <Image
          source={dealer1Image}
          resizeMode={"contain"}
          style={styles.imageLong}
        />
      </View>
    </View>

    <View style={styles.titleContainer}>
      <Text style={styles.title}>Специальные пакеты для дилеров</Text>
    </View>

    <View style={styles.content}>
      <Text style={styles.description}>
        Оформляя подписку на рассылку специальных информационных пакетов для дилеров от ТМ "Феникс" Вы получаете следующие возможности:
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
Collagedealer.propTypes = {
  getSubscription: PropTypes.func.isRequired
}

export default Collagedealer
