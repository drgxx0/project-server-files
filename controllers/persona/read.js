const handleReadPerson = (Persona) => (req, res) => {
    const param = req.params
    Persona.findById(param.id, (err, data) => {
        if(err) console.log(err)
        res.json(data)
    })
}

module.exports = {
    handleReadPerson
}