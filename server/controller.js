module.exports = {
    createHouse: (request, response) => {
        const db = request.app.get('db');
        console.log(request.body)
        const{name, address, city, state, zipcode} = request.body
        db.create_house([name, address, city, state, zipcode])
          .then(() => {
              response.status(200).send("New House Has Been Created!")
          })
    }
}