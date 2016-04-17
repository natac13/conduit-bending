import { combineReducers } from 'redux-immutable';
import { reducer as formReducer } from 'redux-form';
import { fromJS } from 'immutable';

import routing from './routing';


const rootReducer = combineReducers(Object.assign(
  {},
  {
    routing,
    form: (state, action) => fromJS(formReducer(state, action)),
  },
));

export default rootReducer;
