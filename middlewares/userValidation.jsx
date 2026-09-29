const {body, validationResult} = require('express-validator')

const userCreateValidation = () => {
    return [
        body("name")
            .isString().withMessage("O nome é obrigatório")
            .isLength({min: 3})
            .withMessage("O nome precisa ter no mínimo 3 caracteres"),
        body("email")
            .isEmail()
            .withMessage("Insira um email válido"),
        body("password")
            .isLength({min: 6})
            .withMessage("A senha precisa ter no mínimo 6 caracteres"),
        body("confirmPassword")
            .custom((value, {req}) => {
                if(value !== req.body.password){
                    throw new Error("As senhas não coincidem");
                }
                return true;
            })
    ]

    const loginValidation = () => {
        return [
            body("email")
                .isString()
                .isEmail()
                .withMessage("Insira um email válido"),
            body("password")
                .isString()
                .isLength({min: 6})
                .withMessage("A senha precisa ter no mínimo 6 caracteres"),
        ]
    }
}

const userUpdateValidation = () => {
    return [
        body("name")
            .optional()
            .isLength({min: 3})
            .withMessage("O nome precisa ter no mínimo 3 caracteres"),
        body("password")
            .optional()
            .isLength({min: 6})
            .withMessage("A senha precisa ter no mínimo 6 caracteres")
    ]
}


module.exports = {
        userCreateValidation,
        loginValidation,
        userUpdateValidation
    }