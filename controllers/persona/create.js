const handleCreatePerson = (Persona) => (req, res) => {
    const { nombre, dni, celular, correo, direccion, departamento, provincia, distrito, comentario, category } = req.body
    Persona.findOne({ dni }, (err, data) => {
        if(err) console.log(err)
        if(!data) {
            Persona.create({
                nombre,
                dni,
                celular,
                correo,
                direccion,
                departamento,
                provincia,
                distrito,
                comentario,
                category
            }, (err, data) => {
                if(err) console.log(err)
                res.json(data)
            })
        } else {
            res.json({message: 'Usuario ya registrado', error: 'error'})
        }
    })
}

module.exports = {
    handleCreatePerson
}