const handleUpdatePerson = (Persona) => (req, res) => {
    const obj = req.body
    const param = req.params
    Persona.updateOne({ _id: param.id }, obj, (err, data) => {
        if(err) console.log(err)
        res.json({message: "Datos guardados"})
    })
}

module.exports = {
    handleUpdatePerson
}