// Imports
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

// UI Imports
import { Grid, GridCell } from '../../ui/grid'
import { H2, H5 } from '../../ui/typography'
import Button from '../../ui/button'
import ImageTile from '../../ui/image/Tile'
import { level1 } from '../../ui/common/shadows'

// App Imports
import { APP_URL } from '../../setup/config/env'
import crateRoutes from '../../setup/routes/crate'
import userRoutes from '../../setup/routes/user'

// Component
const wholesale = (props) => (
  <Grid alignCenter={true} style={{ padding: '2em' }}>
    {/* SEO */}
    <Helmet>
      <title>Пакеты для оптовиков - ТМ Феникс</title>
    </Helmet>

    {/* Left Content - Image Collage */}
    <GridCell>
      <Grid gutter={true} alignCenter={true}>
        <GridCell justifyCenter={true}>
          <ImageTile width={283} height={623} shadow={level1} image={`${ APP_URL }/images/stock/wholesale/1.jpg`} />
        </GridCell>

        <GridCell>
          <Grid>
            <GridCell justifyCenter={true}>
              <ImageTile width={140} height={306} shadow={level1} image={`${ APP_URL }/images/stock/wholesale/2.jpg`} />
            </GridCell>
          </Grid>

          <Grid>
            <GridCell justifyCenter={true}>
              <ImageTile width={140} height={306} shadow={level1} image={`${ APP_URL }/images/stock/wholesale/3.jpg`} style={{ marginTop: '1.9em' }} />
            </GridCell>
          </Grid>
        </GridCell>
      </Grid>
    </GridCell>

    {/* Right Content */}
    <GridCell style={{ textAlign: 'center' }}>
      <H2 font="secondary">Подписка на пакеты для оптовых покупателей</H2>
      <H5 style={{ marginTop: '0.5em' }}>
        Оформляя подписку на рассылку информационных пакетов для оптовых покупателей от ТМ "Феникс" Вы получаете следующие возможности:<br />
        1.Узнавать о выпуске новых моделей дверей раньше других и соответственно Вы можете планировать и совершать предзаказы на новейшие модели дверей.<br />
        2.Вы будете всегда в курсе актуальных цен на существующие модели, а также на готовящиеся к производству.<br />
        3. Об акционных предложениях Вы тоже узнаете из пакетов рассылки в первую очередь.<br />
      </H5>
      {/* Call to action */}
      {
        props.user.isAuthenticated
          ? <Link to={crateRoutes.list.path}>
              <Button theme="secondary" style={{ marginTop: '1em' }}>Подписаться</Button>
            </Link>
          : <Link to={userRoutes.signup.path}>
              <Button theme="secondary" style={{ marginTop: '1em' }}>Начать</Button>
            </Link>
      }
    </GridCell>
  </Grid>
)

// Component Properties
wholesale.propTypes = {
  user: PropTypes.object.isRequired
}

// Component State
function wholesaleState(state) {
  return {
    user: state.user
  }
}

export default connect(wholesaleState, {})(wholesale)
