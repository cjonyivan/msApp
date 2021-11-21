
import { ACTION_UPDATE_TEXT_JSON, ACTION_UPDATE_TEXT_JSON_VALID } from '../actions/textJsonActions';

const initialProps = {
    text: null,
    text_valid: null
}

const reducerTextJSON = (state = initialProps, action) => {
    switch (action.type) {
        case ACTION_UPDATE_TEXT_JSON:
            return {
                ...state,
                text: action.payload
            }
            
        case ACTION_UPDATE_TEXT_JSON_VALID:
            return {
                ...state,
                text_valid: action.payload
            }
        default:
            return initialProps
    }
}

export default reducerTextJSON;