const jwt = require('jsonwebtoken');

// Verificar token

let verificaToken = (req, res, next) => {
    let token = req.get('Authorization');
    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'Token no valido'
                }
            });
        }
        req.usuario = decoded.usuario;
        next();
    });
};

//verifica ADMIN_ROLE

let verificaAdmin_role = (req, res, next) => {
    let usuario = req.usuario;
    if (usuario.role !== 'ADMIN_ROLE') {
        return res.status(401).json({
            ok: false,
            err: {
                message: 'No eres admin'
            }
        });
    }
    next();
};

module.exports = {
    verificaToken,
    verificaAdmin_role
}