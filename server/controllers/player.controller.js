const { Player } = require('../models/player.model');

module.exports.createPlayer = (request, response) => {
    Player.create(request.body)
        .then(person => response.json(person))
        .catch(err => response.json(err));
}
module.exports.getAll = (request, response) => {
    Player.find({})
        .then(persons => response.json(persons))
        .catch(err => response.json(err))
}
module.exports.deletePlayer = (request, response) => {
    Player.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}
module.exports.findPlayer = (request, response) => {
    Player.findOne({_id: request.params.id}, request.body, {new:true})
        .then(updatedPerson => response.json(updatedPerson))
        .catch(err => response.json(err))
}