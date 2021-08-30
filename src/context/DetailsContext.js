import createDataContext from './createDataContext'
import axios from 'axios'

const detailsReducer = (state, action) => {

    switch(action.type)
    {
        case 'login': return { ...state, token: action.payload, error_message: null }

        case 'setErrorMessage': return { ...state, error_message: action.payload }

        case 'getPostsData': return { ...state, posts_data: action.payload }

        default: return state
    }

}

const getPostsData = dispatch => {

    return async () => {

        try
        {

            const response = await axios.get('https://jsonplaceholder.typicode.com/posts')

            dispatch({ type: 'getPostsData', payload: response.data })

        } catch(e)
        {
            console.log('Posts Data', e)
        }

    }

}

const setErrorMessage = dispatch => {

    return (error_message) => {

        dispatch({ type: 'setErrorMessage', payload: error_message })

    }

}

const login = dispatch => {

    return async (phone_number, callback) => {

        try
        {

            dispatch({ type: 'setErrorMessage', payload: 'Authenticating.....' })

            const response = await axios.get(`https://mocki.io/v1/fa4456b8-7e9f-4eba-9bce-6db19e651dbd?phone_number=${phone_number}`)
            
            dispatch({ type: 'setErrorMessage', payload: null })

            dispatch({ type: 'login', payload: response.data.token })

            callback ? callback() : null

        } catch(e)
        {
            dispatch({ type: 'setErrorMessage', payload: 'Some error occurred' })

            console.log('Login', e)
        }

    }

}

export const { Context, Provider } = createDataContext(
    detailsReducer,
    { login, setErrorMessage, getPostsData },
    { token: null, error_message: null, posts_data: [] }
)
