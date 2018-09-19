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
import { getListByUser } from '../subscription/api/actions'
import Loading from '../common/Loading'
import EmptyMessage from '../common/EmptyMessage'
import SubscriptionItem from '../subscription/Item'

// Component
class Subscriptions extends PureComponent {

  // Runs on server only for SSR
  static fetchData({ store }) {
    return store.dispatch(getListByUser())
  }

  // Runs on client only
  componentDidMount() {
    this.props.getListByUser()
  }

  render() {
    return <div>
        {/* SEO */}
        <Helmet>
          <title>Мои подписки - ТМ Феникс</title>
        </Helmet>

        {/* Top title bar */}
        <Grid style={{ backgroundColor: grey }}>
          <GridCell style={{ padding: "2em", textAlign: "center" }}>
            <H3 font="secondary">Мои подписки</H3>

            <p style={{ marginTop: "1em", color: grey2 }}>
              Пакеты, на которые вы подписаны, перечислены здесь. Вы можете отписаться здесь в любое время.
            </p>
          </GridCell>
        </Grid>

        {/* Product list */}
        <Grid>
          <GridCell>
            {this.props.subscriptions.isLoading ? <Loading /> : this.props.subscriptions.list.length > 0 ? this.props.subscriptions.list.map(
                subscription => (
                  <div
                    key={subscription.id}
                    style={{ margin: "2em", float: "left" }}
                  >
                    <SubscriptionItem subscription={subscription} />
                  </div>
                )
          ) : <EmptyMessage message="Вы еще не подписаны ни на один информационный пакет." />}
          </GridCell>
        </Grid>
      </div>;
  }
}

// Component Properties
Subscriptions.propTypes = {
  subscriptions: PropTypes.object.isRequired,
  getListByUser: PropTypes.func.isRequired
}

// Component State
function subscriptionsState(state) {
  return {
    subscriptions: state.subscriptionsByUser
  }
}

export default connect(subscriptionsState, { getListByUser })(Subscriptions)
