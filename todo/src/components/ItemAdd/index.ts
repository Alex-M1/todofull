import { AppStateType, postNotes, setInputValue } from './../../redux'
import { connect } from 'react-redux'
import ItemAdd from './ItemAdd'
import { compose } from 'redux'
import { withTranslation } from 'react-i18next'

const mapStateToProps = (state: AppStateType) => ({
  inputValue: state.app.inputValue,
  isLoad: state.app.isLoading
})

export default compose(
  connect(mapStateToProps, {
    postNotes, setInputValue
  }),
  withTranslation()
)(ItemAdd) as React.ComponentType