// Imports
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

// UI Imports
import { Grid, GridCell } from '../../../ui/grid'
import { primary as primaryGradient } from '../../../ui/common/gradients'
import { level1 } from '../../../ui/common/shadows'

// App Imports
import home from '../../../setup/routes/home'
import user from '../../../setup/routes/user'
import crate from '../../../setup/routes/crate'
import admin from '../../../setup/routes/admin'
import Logo from './Logo'
import Menu from './Menu'
import MenuItem from './MenuItem'

// Component
const Header = (props) => {
  return (
    <header style={{
      backgroundImage: primaryGradient,
      boxShadow: level1,
      padding: '0 2em',
      height: '5em',
      position: 'fixed',
      left: 0,
      right: 0,
      top: 0
    }}>
      <Grid alignCenter={true} style={{ marginTop: '1.5em' }}>
        <GridCell>
          {/* Logo */}
          <Logo style={{ float: 'left' }}/>

          {/* Left menu */}
          <Menu style={{ float: 'left', marginTop: '0.5em', marginLeft: '2em' }}>
            <MenuItem to={home.wholesale.path}>Опт</MenuItem>

            <MenuItem to={home.dealer.path}>Дилерам</MenuItem>

            <MenuItem to={home.howItWorks.path}>Как это работает</MenuItem>

            <MenuItem to={home.whatsNew.path}>Новые модели</MenuItem>
          </Menu>
        </GridCell>

        {/* Right menu */}
        <GridCell style={{ textAlign: 'right' }}>
          {
            props.user.isAuthenticated
              ?
              <Menu>
                { props.user.details.role === 'ADMIN' && <MenuItem to={admin.dashboard.path} section="admin">Администратор</MenuItem> }

                <MenuItem to={crate.list.path}>Пакеты</MenuItem>

                <MenuItem to={user.subscriptions.path}>Подписки</MenuItem>

                <MenuItem to={user.profile.path}>Профиль</MenuItem>
              </Menu>
              :
              <Menu>
                <MenuItem to={user.login.path}>Войти</MenuItem>

                <MenuItem to={user.signup.path}>Регистрация</MenuItem>
              </Menu>
          }
        </GridCell>
      </Grid>
    </header>
  )
}

// Component Properties
Header.propTypes = {
  user: PropTypes.object.isRequired
}

// Component State
function headerState(state) {
  return {
    user: state.user
  }
}

export default withRouter(connect(headerState, {})(Header))
