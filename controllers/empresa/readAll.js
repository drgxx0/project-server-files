const handleReadAllBusiness = (Empresa) => (req, res) => {
    Empresa.find((err, data) =>{
        if(err) console.log(err)
        res.json(data)
    })
}

module.exports = {
    handleReadAllBusiness
}