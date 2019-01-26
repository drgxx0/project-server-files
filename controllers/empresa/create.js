const handleCreateBusiness = (Empresa) => (req, res) => {
    const { nombre, ruc, razon, celular, correo, direccion, departamento, provincia, distrito, comentario, category } = req.body
    Empresa.findOne({ ruc }, (err, data) => {
        if(err) console.log(err)
        if(!data) {
            Empresa.create({
                nombre,
                ruc,
                razon,
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
            res.json({message: 'Empresa ya registrada', error: 'error'})
        }
    })
}

module.exports = {
    handleCreateBusiness
}