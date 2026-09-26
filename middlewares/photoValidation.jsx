const {body, validationResult} = require("express-validator")

const photoInsertValidation = () => {
    return [
        body("title")
            .not()
            .equals("undefined")
            .withMessage("Title is required")
            .isString()
            .withMessage("Title must be a string")
            .isLength({min: 3})
            .withMessage("Title must be at least 3 characters long"),
        body("image").custom((value, {req}) => {
            if(!req.file) {
                return new Error("Image is required")
            }
            return true
        })
    ]
}

const photoUpadateValidation = () => {
    return [
        body("title")
        .optional()
        .isString(0)
        .withMessage("o titulo e obrigatorio")
        .isLength({min: 3})
        .withMessage("Title must be at least 3 characters long"),
    ]
}

module.exports = {
    photoInsertValidation,
    photoUpadateValidation,
}