const Housing = require('../models/Housing.js')
exports.isHouseOwner = (user, house) => {
    let isOwner = false
    if(user){
        if(user._id == house.owner._id){
            isOwner = true
        }
    }
   return isOwner
}



exports.isRentedAlready = async (userId, houseId) => {
    let isRentedAlready = false
    const house = await Housing.findById(houseId)
    //TO DO
    const rented = house.rentedHome.find(x=> x == userId )

    if(rented){
        isRentedAlready = true
    }
    return isRentedAlready
}