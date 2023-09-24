const validateUser = (req, res, next) => {
    const { senha } = req.query;
    if (!senha) {
        res.status(400).send('Senha não informada');
    }

    if (senha !== 'carros123') {
        res.status(401).send('Senha incorreta');
    }
    next();
};

module.exports = validateUser;