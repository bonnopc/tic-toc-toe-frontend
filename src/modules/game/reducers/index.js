const initialState = {
    isXturn: false,
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'TOGGLE_TURN':
            return { ...state, isXturn: payload !== 'undefined' ? payload : !state.isXturn }
    
        default:
            return state
    }
}