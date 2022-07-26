const initialState = {
    user: null,
    message: '',
    success: false
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USER':
            return {
                ...state,
                user: action.payload.response.user,
                message: action.payload.message,
            }
        case 'MESSAGE':
            return {
                ...state,
                message: action.payload,
            }
        case 'LOG_OUT':
            return {
                ...state,
                user: null,
                message: null
            }
        default:
            return state
    }
}

export default userReducer