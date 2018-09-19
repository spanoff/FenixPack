// Imports
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

// UI Imports
import { Grid, GridCell } from '../../ui/grid'
import { H1, H4 } from '../../ui/typography'
import Button from '../../ui/button'
import { white } from '../../ui/common/colors'
import { textLevel1 } from '../../ui/common/shadows'

// App Imports
import { APP_URL } from '../../setup/config/env'
import crateRoutes from '../../setup/routes/crate'
import userRoutes from '../../setup/routes/user'
import Onboarding from './Onboarding'

// Component
const Home = (props) => (
  <div>
    {/* Home */}
    <Grid alignCenter={true} style={{
      backgroundImage: `url('${ APP_URL }/images/cover.jpg')`,
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
      backgroundPosition: 'center top',
      height: 'calc(100vh - 5em)',
      textAlign: 'center',
      color: white
    }}>
      {/* SEO */}
      <Helmet>
        <title>Подписка на информационные пакеты</title>
      </Helmet>

      {/* Content */}
      <GridCell>
        <H1 font="secondary" style={{ textShadow: textLevel1 }}>Пакетная подписка</H1>

        <H4 style={{ textShadow: textLevel1, marginTop: '0.5em' }}>
          Выбирайте необходимые для Вашего бизнеса информационные пакеты
        </H4>

        {/* Call to action */}
        {
          props.user.isAuthenticated
            ? <Link to={crateRoutes.list.path}>
              <Button theme="secondary" style={{ marginTop: '1em' }}>Оформить подписку</Button>
              </Link>
            : <Link to={userRoutes.signup.path}>
                <Button theme="secondary" style={{ marginTop: '1em' }}>Начать</Button>
              </Link>
        }
      </GridCell>
    </Grid>

    {/* Onboarding */}
    <Onboarding/>
  </div>
)

// Component Properties
Home.propTypes = {
  user: PropTypes.object.isRequired
}

// Component State
function homeState(state) {
  return {
    user: state.user
  }
}

export default connect(homeState, {})(Home)
