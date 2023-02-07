const Housing = require('../models/Housing')

exports.getOneHouse = (houseId) => Housing.findById(houseId)
exports.getAllHouses = () => Housing.find()
exports.getLastAdded = () => Housing.find({}).sort({createdAt: -1})
exports.update = (houseId, data) => Housing.findByIdAndUpdate(houseId, data, {runValidators: true})
exports.deleteHouse = (houseId) => Housing.findByIdAndDelete(houseId, {runValidators: true})
