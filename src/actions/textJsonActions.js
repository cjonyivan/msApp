
export const ACTION_UPDATE_TEXT_JSON = 'UPDATE_TEXT_JSON';

export const updateText = (state) => (dispatch) => {
    dispatch({
        type: ACTION_UPDATE_TEXT_JSON,
        payload: state
    })
}