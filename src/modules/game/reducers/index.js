const initialState = {
    isXturn: false,
    uid: null,
    data: {},
    logs: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'TOGGLE_TURN':
            return { ...state, isXturn: typeof payload !== 'undefined' ? payload : !state.isXturn }

        case 'SET_GAME_UID':
            return { ...state, uid: payload }

        case 'SET_GAME_DATA':
            return { ...state, data: payload }

        case 'SET_GAME_LOGS':
            return { ...state, logs: payload }

        case 'ADD_GAME_LOG':
            return { ...state, logs: [ ...state.logs, ...payload ] }

        default:
            return state
    }
}