const handleUpdateBusiness = (Empresa) => (req, res) => {
    const obj = req.body
    const param = req.params
    Empresa.updateOne({ _id: param.id }, obj, (err, data) => {
        if(err) console.log(err)
        res.json("Datos Guardados")
    })
}

module.exports = {
    handleUpdateBusiness
}