import { UPDATE_BOUNDS } from '../actions/filter_actions';

const defaultFilters = Object.freeze({
  bounds: {},
});

const FiltersReducer = (state = defaultFilters, action) => {
  Object.freeze(state);
  
  switch(action.type){
      case UPDATE_BOUNDS:
          const newFilter = {
            bounds: action.bounds
          };
        return Object.assign({}, state, newFilter);

        default:
            return state;
  }
  
 
};

export default FiltersReducer;
