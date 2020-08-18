export default () => dispatch => {
    dispatch({ type: 'TOGGLE_TURN', payload: true })
    dispatch({ type: "SET_GAME_UID", payload: null });
    dispatch({ type: "SET_GAME_DATA", payload: {} });
    dispatch({ type: "SET_GAME_LOGS", payload: [] });
}