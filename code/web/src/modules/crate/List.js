// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'

// UI Imports
import { Grid, GridCell } from '../../ui/grid'
import { H3 } from '../../ui/typography'
import { grey, grey2 } from '../../ui/common/colors'

// App Imports
import { getList as getCratesList } from './api/actions'
import Loading from '../common/Loading'
import EmptyMessage from '../common/EmptyMessage'
import CrateItem from './Item'

// Component
class List extends PureComponent {

  // Runs on server only for SSR
  static fetchData({ store }) {
    return store.dispatch(getCratesList('ASC'))
  }

  // Runs on client only
  componentDidMount() {
    this.props.getCratesList('ASC')
  }

  render() {
    return <div>
        {/* SEO */}
        <Helmet>
          <title>
            Информационные пакеты для Вашего бизнеса! - ТМ Феникс
          </title>
        </Helmet>

        {/* Top title bar */}
        <Grid style={{ backgroundColor: grey }}>
          <GridCell style={{ padding: "2em", textAlign: "center" }}>
            <H3 font="secondary">
              Информационные пакеты для Вашего бизнеса!
            </H3>

            <p style={{ marginTop: "1em", color: grey2 }}>
              Вы можете выбрать пакет, который вам подходит. Вы также можете  подписаться на несколько пакетов.
            </p>
          </GridCell>
        </Grid>

        {/* Crate list */}
        <Grid>
          <GridCell>
            {this.props.crates.isLoading ? <Loading /> : this.props.crates.list.length > 0 ? this.props.crates.list.map(
                crate => (
                  <div
                    key={crate.id}
                    style={{ margin: "2em", float: "left" }}
                  >
                    <CrateItem crate={crate} />
                  </div>
                )
              ) : <EmptyMessage message="Нет пакетов для отображения" />}
          </GridCell>
        </Grid>
      </div>;
  }
}

// Component Properties
List.propTypes = {
  crates: PropTypes.object.isRequired,
  getCratesList: PropTypes.func.isRequired
}

// Component State
function listState(state) {
  return {
    crates: state.crates
  }
}

export default connect(listState, { getCratesList })(List)
