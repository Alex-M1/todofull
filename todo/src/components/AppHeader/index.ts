import { AppStateType } from './../../redux/store'
import { withTranslation } from 'react-i18next'
import AppHeader from './AppHeader'
import { compose } from 'redux'
import { connect } from 'react-redux'

const mapStateToProps = (state: AppStateType) => ({
  appData: state.app.appData
})
export default compose(
  connect(mapStateToProps),
  withTranslation()
)(AppHeader) as React.ComponentType