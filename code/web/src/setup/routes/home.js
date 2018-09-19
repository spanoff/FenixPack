// App Imports
import Home from '../../modules/pages/Home'
import wholesale from '../../modules/pages/wholesale'
import dealer from '../../modules/pages/dealer'
import HowItWorks from '../../modules/pages/HowItWorks'
import WhatsNew from '../../modules/pages/WhatsNew'

// Home routes
export default {
  home: {
    path: '/',
    component: Home,
    exact: true
  },

  wholesale: {
    path: '/wholesale',
    component: wholesale
  },

  dealer: {
    path: '/dealer',
    component: dealer
  },

  howItWorks: {
    path: '/how-it-works',
    component: HowItWorks
  },

  whatsNew: {
    path: '/whats-new',
    component: WhatsNew
  }
}
