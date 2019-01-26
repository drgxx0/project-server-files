const handleLogin = (Login, bcrypt) => (req, res) => {
    const { email, contraseña } = req.body
    Login.findOne({ email }, (err, data) => {
        if(err) console.log(err)
        if(data) {
            const isValid = bcrypt.compareSync(contraseña, data.contraseña)
            if(isValid) {
                res.json(data)
            } else {
                res.json({status: true, message: 'Usuario o Contraseña invalido'})
            }
        } else {
            res.json({status: true, message: 'Usuario o Contraseña invalido'})
        }
    })
}

module.exports = {
    handleLogin
}