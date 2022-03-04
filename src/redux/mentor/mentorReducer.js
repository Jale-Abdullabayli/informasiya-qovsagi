import {
    FETCH_MENTORS_REQUEST,
    FETCH_MENTORS_SUCCESS,
    FETCH_MENTORS_FAILURE
}
    from './mentorTypes';
const initialState = {
    loading: false,
    mentors: [],
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MENTORS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_MENTORS_SUCCESS:
            return {
                loading: false,
                mentors: action.payload,
                error: ''
            }
        case FETCH_MENTORS_FAILURE:
            return {
                loading: false,
                mentors: [],
                error: action.payload
            }
        default:
            return state
    }
}

export default reducer;