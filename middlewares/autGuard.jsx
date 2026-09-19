const user = require('../models/user');
const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;

const authGuard = async (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    // bearer token not found
    if (!token) return res.status(401).json({ message: 'Access denied' });

    try {
        const verified = jwt.verify(token, jwtSecret);
        req.user = await User.findById(verified.id).select('-password'); // Exclude password from user object
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
    }
}

// tudo isso faz com que a rota seja protegida, ou seja, só pode ser acessada por usuários autenticados. O token JWT é enviado no cabeçalho da requisição e verificado pelo middleware authGuard. Se o token for válido, o usuário é autenticado e a requisição continua para o próximo middleware ou controlador. Caso contrário, uma resposta de erro é retornada.

module.exports = authGuard;