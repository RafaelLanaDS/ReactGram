import {api, requestConfig} from '../utils/config'

//Register an user 
const Register = async(data) => {
    
    const config = requestConfig("POST", data)

    const res = await fetch(api + "/users/register", config)
    const responseData = await res.json()

    try {
        const res = await fetch(api + "/users/register", config)
            .then((res) => res.json())
            .catch((err) => err)
        if (res) {
            localStorage.setItem("user", JSON.stringify(res))
        }
        return res
        
    } catch (error) {
        console.error(error)
    }

    return responseData
}

// logout an user 
const logout = () => {
    localStorage.removeItem("user")
}

// sign in an user 
const login = async (data)=> {
    const config = requestConfig("POST", data)
    try {
        const res = await fetch(api + "/users/login", config)
            .then((res) => res.json())
            .catch((err) => err)
        if (res._id) {
            localStorage.setItem("user", JSON.stringify(res))
        }

        return res

    } catch (error) {
        console.error(error)
    }
}
const authService = {
    Register,
    login,
    logout
}

export default authService