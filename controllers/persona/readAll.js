const handleReactPersons = (Persona) => (req, res) => {
    Persona.find((err, data) =>{
        if(err) console.log(err)
        res.json(data)
    })
}

module.exports = {
    handleReactPersons
}