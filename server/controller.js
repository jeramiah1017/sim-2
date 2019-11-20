module.exports = {
    createHouse: (req, res) => {
        const db = req.app.get('db');
        console.log(req.body)
        const{name, address, city, state, zipcode, img, mortgage, rent} = req.body
        db.create_house({name, address, city, state, zipcode, img, mortgage, rent})
          .then((houses) => {
              res.status(200).send("hello")
          })
    },
    getHouses: (req, res) => {
        const db = req.app.get('db')
        db.get_houses()
        .then(houses => {
            res.status(200).send(houses)
        })
    },
    deleteHouse: (req, res) => {
        const db = req.app.get('db')
        const{id} = req.params
        db.delete_house([id])
         .then(result => {
             res.status(200).send(result)
         })
    }
}