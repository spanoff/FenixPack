// Imports
import React from 'react'
import { Text, View, Image, ScrollView } from 'react-native'

// Assets
import how1Image from '../../../../../assets/images/stock/how-it-works/1.jpg'
import how2Image from '../../../../../assets/images/stock/how-it-works/2.jpg'
import how3Image from '../../../../../assets/images/stock/how-it-works/3.jpg'

// UI Imports
import { white } from '../../../../ui/common/colors'
import Icon from '../../../../ui/icon/Icon'
import styles from './styles'

// Component
const HowItWorks = () => (
  <ScrollView horizontal={true}>
    <View style={styles.container}>
      <Image source={how1Image} resizeMode={"cover"} style={styles.image} />

      <View style={styles.content}>
        <Icon name={"looks-one"} size={45} color={white} style={styles.icon} />

        <Text style={styles.title}>ПОДПИСКА НА ИНФОРМАЦИОННЫЕ ПАКЕТЫ</Text>

        <Text style={styles.description}>
          Выбирайте и подписывайтесь на необходимые для Вашего бизнеса информационные пакеты от ТМ "Феникс".
        </Text>
      </View>
    </View>

    <View style={styles.container}>
      <Image source={how2Image} resizeMode={"cover"} style={styles.image} />

      <View style={styles.content}>
        <Icon name={"looks-two"} size={45} color={white} style={styles.icon} />

        <Text style={styles.title}>ПОЛУЧИТЕ ИНФОРМАЦИОННЫЕ ПАКЕТЫ</Text>

        <Text style={styles.description}>
          Получите информационные пакеты для оптовых покупателей или дилеров доставленные в Ваш офис.
        </Text>
      </View>
    </View>

    <View style={styles.container}>
      <Image source={how3Image} resizeMode={"cover"} style={styles.image} />

      <View style={styles.content}>
        <Icon name={"looks-3"} size={45} color={white} style={styles.icon} />

        <Text style={styles.title}>ВЫБОР И ОФОРМЛЕНИЕ ПРЕДЗАКАЗА</Text>

        <Text style={styles.description}>
          Выбирайте в полученных Вами информационных пакетах понравившиеся новейшие модели дверей и осуществляйте предзаказ на нашем официальном сайте http://www.f-door.com.ua
        </Text>
      </View>
    </View>
  </ScrollView>
);

export default HowItWorks
