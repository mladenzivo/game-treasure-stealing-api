/**
 * Game simulator class for test
 */
const { GamePlay, Hero, UserMeta } = require('./models');
const User = require('./models/User');
const { Op } = require("sequelize");
var moment = require('moment');
var uniqid = require('locutus/php/misc/uniqid');

class GameSimulatorTest{
	constructor() {
		// constructor
	}

	ranSTR(length) {
	    var result           = '';
	    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	    var charactersLength = characters.length;
	    for ( var i = 0; i < length; i++ ) {
	      result += characters.charAt(Math.floor(Math.random() * charactersLength));
	   	}
	   	return result;
	}

	async createUsers(total){
		let self = this;

		if(typeof total === 'undefined'){
			total = 20;
		}

		for(var u=0; u<total;u++){
			const email = 'u' + Math.floor(Math.random() * (100000 - 10000 + 1) + 10000) + '@cqgame.com';
			await User.create({
				fullname          	: `Test 0${u}`,
				wallet_address      : self.ranSTR(44),
				email           	: email,
				email_verified_at 	: null,
				password   			: '$2b$06$fTbMrcSj9tAZZWG3KSJh.OL1a4e1UgmRCwtxS1y4uBiGylnchpJI6',
				active      	    : 1,
				sol_balance       	: 0,
				total_loot        	: 0,
				total_loot_won      : 0,
				loose_loost        	: 0,
			  	avatar_url   		: '',
			  	uid   			    : uniqid(6)
			});
		}
	}

	async createGameForAllUser(){
		console.log('Start')
		const users = await User.findAll();
		if(users){
			users.forEach( async user => {
				const user_id = parseInt(user.id);
				const game_info = await user.getCalGameInfo();

				const TODAY_START = moment().tz('UTC').startOf('day');
				const NOW = moment().tz('UTC');

				const game = await GamePlay.findOne({where: {
					user_id: user_id,
			      	created_at: { 
			        	[Op.gt]: TODAY_START,
			        	[Op.lt]: NOW
			      	},
			      	finished: 0
			    }});

				let json_data = game_info;
			    if(!game){
					await GamePlay.create({
						user_id: user_id,
						data: json_data,
						won: 0,
						bonus: 0,
						note: '',
						finished: 0
					});
				}

				const non_nft_entries = Math.floor(Math.random() * 100 + 1);
				UserMeta._update(user_id, 'non_nft_entries', non_nft_entries);
			});

			await Hero.update({active:1},{where: {active: 0}});
		}
	}
}

module.exports = GameSimulatorTest;