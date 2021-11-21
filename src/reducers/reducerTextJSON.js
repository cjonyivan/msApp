
import {ACTION_UPDATE_TEXT_JSON} from '../actions/textJsonActions';

const initialProps = {
    text: null
}

const reducerTextJSON = (state = initialProps, action) => {
    switch (action.type) {
        case ACTION_UPDATE_TEXT_JSON:
            return {
                ...state,
                text: action.payload
            }
        default:
            return initialProps
    }
}

export default reducerTextJSON;