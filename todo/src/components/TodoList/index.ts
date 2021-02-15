import { AppStateType, getNotes, deleteNote, updateNote, setEditValue } from './../../redux'
import { connect } from 'react-redux'
import TodoList from './TodoList'

const mapStateToProps = (state: AppStateType) => ({
  editValue: state.app.editValue,
  notes: state.app.appData
})

export default connect(mapStateToProps, {
  getNotes, deleteNote, updateNote, setEditValue
})(TodoList)
