import { combineReducers } from 'redux';
import ModalReducer from './modals_reducer';
import FiltersReducer from "./filters_reducer"

export default combineReducers({
  modal: ModalReducer,
  filters: FiltersReducer
});
