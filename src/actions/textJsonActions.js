
export const ACTION_UPDATE_TEXT_JSON = 'UPDATE_TEXT_JSON';
export const ACTION_UPDATE_TEXT_JSON_VALID = 'UPDATE_TEXT_JSON_VALID';

export const updateText = (state) => (dispatch) => {
    dispatch({
        type: ACTION_UPDATE_TEXT_JSON,
        payload: state
    })
}

export const updateTextValid = (state) => (dispatch) => {
    dispatch({
        type: ACTION_UPDATE_TEXT_JSON_VALID,
        payload: state
    });
}