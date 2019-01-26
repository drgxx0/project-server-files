const handleDeleteBusiness = (Empresa) => (req, res) => {
    const param = req.params
    Empresa.deleteOne({ _id: param.id }, (err, data) => {
        if(err) console.log(err)
        res.json(data)
    })
}

module.exports = {
    handleDeleteBusiness
}