const mongoose = require("mongoose")

const dbUser = process.env.BD_USER
const dbPassword = process.env.DB_PASS

const conn = async () => {
    try {
        const dbConn = await mongoose.connect(
            `mongodb+srv://${dbUser}:${dbPassword}@cluster0.8taofxr.mongodb.net/?retryWrites=true&w=majority`
        )

        console.log("Conectou no Banco")

        return dbConn
    } catch (error) {
        console.log(error)
    }
}

conn()

module.exports = conn

//connection ykpBQRB1dMhL11O3 wRm3EqEM323iNqg3