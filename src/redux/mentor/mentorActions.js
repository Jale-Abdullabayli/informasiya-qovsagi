import axios from 'axios';
import {
    FETCH_MENTORS_REQUEST,
    FETCH_MENTORS_SUCCESS,
    FETCH_MENTORS_FAILURE
}
 from './mentorTypes';

export const fetchMentorsRequest=()=>{
    return {
        type:FETCH_MENTORS_REQUEST
    }
}

export const fetchMentorsSuccess=(mentors)=>{
    return {
        type:FETCH_MENTORS_SUCCESS,
        payload:mentors
    }
}

export const fetchMentorsFailure=(error)=>{
    return {
        type:FETCH_MENTORS_FAILURE,
        payload:error
    }
}

export const fetchMentors=()=>{
return (dispatch)=>{
dispatch(fetchMentorsRequest)
axios.get('https://jsonplaceholder.typicode.com/users')
.then(response=>{
    const mentors=response.data
    dispatch(fetchMentorsSuccess(mentors))
})
.catch(error=>{
    const errorMsg=error.message
    dispatch(fetchMentorsFailure(errorMsg))
})
}
}