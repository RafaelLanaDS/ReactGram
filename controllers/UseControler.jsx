const User = require("../models/User")

const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const jwtSecret = process.env.JWT_SECRET

// gerenciar user token
const generateToken = (id) => {
    return jwt.sign({id}, jwtSecret, {
        expiresIn: "7d", 
    })
}

//Register user and sign in
const register = async (req, res) => {
    
    const {name, email, password} = req.body

    // check if user exists
    const user = await User.findOne({email})

    if(user){
        res.status(422).json({errors: ["Por favor, utilize outro e-mail!"]})
        return
    }

    // genete password hash
    const salt = await bcrypt.genSalt()
    const passwordHash = await bcrypt.hash(password, salt)

    // create user 
    const newUser = await User.create({
        name,
        email,
        password: passwordHash,
    })

    // if user was created successfully, return the token
    if(!newUser){
        res.status(422).json({errors: ["Houve um erro, por favor tente mais tarde!"]})
        return
    }

    res.status(201).json({
        _id: newUser._id,
        token: generateToken(newUser._id),
    })
}
//Login user and sign in
const login = async (req, res) => {
    const { email, password } = req.body

    // check if user exists
    const user = await User.findOne({ email })

    if(!user){
        res.status(422).json({errors: ["Usuário não encontrado!"]})
        return
    }

    // check if password matches
    const passwordMatch = await bcrypt.compare(password, user.password)

    if(!passwordMatch){
        res.status(422).json({errors: ["Senha incorreta!"]})
        return
    }

    // generate token
    const token = generateToken(user._id)

    res.status(200).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token,
    })
}

// get cyrrent logged in user
const getCurrentUser = (req, res) => {
    const user = req.user

    res.status(200).json(user)

}

module.exports = {
    register,
    login,
    getCurrentUser,
}