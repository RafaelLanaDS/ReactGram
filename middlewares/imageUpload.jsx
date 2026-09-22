const multer = require("multer");
const path = require("path");

// Destination to store the images 
const storage = multer.diskStorage ({
    destination: (req, file, cb) => {
        let folder = ""

        if(req.baseUrl.includes("users")){
            folder = "users"
        }else if(req.baseUrl.includes("products")){
            folder = "products"
        }

        cb(null, `uploads/${folder}`)
    },

    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
    
})

const imageUpload = multer ({
    storage: imageStorage,
    fileFilter: (req, file, cb) => {
        if(!file.originalname.match(/\.(png|jpg)$/)){
            // upload only png and jpg format
            return cb(new Error("Por favor, envie apenas png ou jpg!"))
        }
        cb(undefined, true)
    }
})

module.exports = imageUpload

// o imageUpload é um middleware que utiliza o multer para fazer o upload de imagens. Ele define onde as imagens serão armazenadas e como os nomes dos arquivos serão gerados. Além disso, ele filtra os arquivos para aceitar apenas imagens nos formatos PNG e JPG.