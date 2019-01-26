const handleDeletePerson = (Persona) => (req, res) => {
    const param = req.params

    Persona.deleteOne({ _id: param.id }, (err, data) => {
        if(err) console.log(err)
        res.json(data)
    })
}

module.exports = {
    handleDeletePerson
}