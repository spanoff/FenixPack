// Imports
import React, { PureComponent } from 'react'
import { Text, View, Image, ScrollView } from 'react-native'

// Assets

// UI Imports
import Button from '../../../ui/button/Button'
import ActionIcon from '../../../ui/icon/ActionIcon'
import styles from './styles'

// App Imports
import { routes } from '../../../setup/routes'
import NavigationTop from '../../common/NavigationTop'
import Body from '../../common/Body'
import NavigationBottom from '../../common/NavigationBottom'
import Intro from './Intro'
import HowItWorks from './HowItWorks'
import Collagewholesale from './Collage/Wholesale'
import Collagedealer from './Collage/Dealer'

// Component
export default class Home extends PureComponent {

  getSubscription = () => {
    this.props.navigation.navigate(routes.crates.name)
  }

  render() {
    return (
      <View style={styles.container}>
        <NavigationTop
          title="ТМ Феникс"
          rightIcon={
            <ActionIcon
              icon={'info-outline'}
              onPress={() => this.props.navigation.navigate(routes.info.name)}
            />
          }
        />

        <Body>
          <ScrollView>
            <View style={styles.bodyContainer}>
              {/* Intro */}
              <Intro getSubscription={this.getSubscription} />

              {/* How it works */}
              <HowItWorks />

              {/* Collage wholesale */}
              <Collagewholesale getSubscription={this.getSubscription} />

              {/* Collage dealer */}
              <Collagedealer getSubscription={this.getSubscription} />
            </View>
          </ScrollView>
        </Body>

        <NavigationBottom />
      </View>
    )
  }
}
