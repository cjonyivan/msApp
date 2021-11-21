import { combineReducers } from 'redux';
import reducerTextJSON  from './reducerTextJSON';


export default combineReducers({
    source: reducerTextJSON
});
