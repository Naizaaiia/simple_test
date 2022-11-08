import axios from 'axios'
import { alerts } from '../redux/action'
 // setting axios
const client = axios.create({
    baseURL: process.env.NEXT_API
})

const header = {
    headers: {
        'Content-Type': 'application/json'
    }
}
//--------------//

export const getAlert = () => async dispatch => {
    try {
        const res = await client.get('/routeAPI', header)
        // console.log(res)
        dispatch({
            type: alerts.OPEN_ALERT,
            payload: res
        })

    } catch (err) {
        console.error(err)
    }
}