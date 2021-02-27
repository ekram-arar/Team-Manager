const Player = require('../controllers/player.controller');
module.exports = function(app){
    app.post('/api/player', Player.createPlayer);
    app.get('/api/players', Player.getAll);
    app.delete('/api/player/:id', Player.deletePlayer);
    app.put('/api/players/:id', Player.findPlayer);
}
