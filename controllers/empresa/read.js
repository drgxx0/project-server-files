const handleReadBusiness = (Empresa) => (req, res) => {
    const param = req.params
    Empresa.findById(param.id, (err, data) => {
        if(err) console.log(err)
        res.json(data)
    })
}

module.exports = {
    handleReadBusiness
}