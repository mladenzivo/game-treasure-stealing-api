//Store
var {Sequelize, sequelize} = require('../../config/sequelize.js');
var User = require('../Models/User');
var GamePlaying = require('../Models/GamePlaying');

var Transaction = sequelize.define('Transaction', {
	id: {
		type: Sequelize.BIGINT,
		allowNull: false,
		autoIncrement: true,
		primaryKey: true
	},
	type          	: Sequelize.STRING,
	amount      	: Sequelize.FLOAT,
	event           : Sequelize.STRING,
	user_id 		: Sequelize.BIGINT,
	game_id 		: Sequelize.BIGINT,
	description   	: Sequelize.TEXT,
  	uid   			: Sequelize.STRING
},{
	tableName    	: 'game_transactions',
	createdAt    	: 'created_at',
	updatedAt    	: 'updated_at',
	timestamps   	: true,
	underscored  	: true
});

Transaction.prototype.updatePrizeForUser = async function(){
	const user = await User.findByPk(parseInt(this.user_id));
	const game_id = await user.getCurrentGameId();
	if(game_id){
		GamePlaying.update({finished: 1}, {where: {id: game_id}});
		this.update({game_id: game_id});
		this.save();
	}
}

module.exports = Transaction;