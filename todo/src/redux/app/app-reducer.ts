import { IState, SET_NOTES, SET_INPUT_VALUE, SET_LOADING, EDIT_VALUE, Actions } from '.'

const initialState: IState = {
  appData: [],
  inputValue: '',
  editValue: '',
  isLoading: false
}

export default function (state = initialState, action: Actions): IState {
  switch (action.type) {
    case SET_NOTES:
      return { ...state, appData: action.notes, inputValue: '' }

    case SET_INPUT_VALUE:
      return { ...state, inputValue: action.value }

    case SET_LOADING:
      return { ...state, isLoading: action.isLoad }

    case EDIT_VALUE:
      return { ...state, editValue: action.value }

    default: return state
  }
}