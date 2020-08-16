export default isXturn => dispatch => {
    dispatch({ type: 'TOGGLE_TURN', payload: isXturn })
}