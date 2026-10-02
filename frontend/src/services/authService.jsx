import {api, requestConfig} from '../utils/config'

//Register an user 
const Register = async(data) => {
    
    const config = requestConfig("POST", data)

    const res = await fetch(api + "/users/register", config)
    const responseData = await res.json()

    if(responseData) {
        localStorage.setItem("user", JSON.stringify(responseData))
    }

    return responseData
}

const authService = {
    Register
}

export default authService