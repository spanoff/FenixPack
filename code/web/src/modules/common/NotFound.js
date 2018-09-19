// Imports
import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

// UI Imports
import { Grid, GridCell } from '../../ui/grid'
import { H3 } from '../../ui/typography'
import { grey } from '../../ui/common/colors'

// App Imports
import { APP_URL } from '../../setup/config/env'
import home from '../../setup/routes/home'

// Component
const NotFound = () => (
  <div>
    {/* SEO */}
    <Helmet>
      <title>Потеряли? - ТМ Феникс</title>
    </Helmet>

    {/* Top title bar */}
    <Grid style={{ backgroundColor: grey }}>
      <GridCell style={{ padding: "2em", textAlign: "center" }}>
        <H3 font="secondary">Чувствуете потерю?</H3>
      </GridCell>
    </Grid>

    <Grid>
      <GridCell style={{ textAlign: "center" }}>
        <p
          style={{ textAlign: "center", marginTop: "2em", marginBottom: "2em" }}
        >
          <img
            src={`${APP_URL}/images/crate-broken.png`}
            alt="404"
            style={{ width: "10em" }}
          />
        </p>

        <H3 font="secondary">
          Страница, которую вы ищете, не существует или удалена. Ошибка 404.
        </H3>

        <p style={{ marginTop: "2em" }}>Что вы можете сделать?</p>

        <p style={{ marginTop: "0.5em" }}>
          Вы можете перейти на <Link to={home.home.path}>Главнуя страницу.</Link> или свяжитесь 
            с нами мы окажем любую помощь.
        </p>
      </GridCell>
    </Grid>
  </div>
);

export default NotFound
