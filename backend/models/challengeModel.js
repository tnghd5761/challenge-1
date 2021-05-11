const { date } = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commitSchema = new Schema({
	_id: {
		type: String,
	},
	count: {
		type: String,
		default: "0"
	}
});

var Challenge = new Schema({
	name: {
		type: String,
		required: true
	},
	challenge_start: {
		type: Date,
		default: Date.now,
	},
	challenge_end: {
		type: Date
	},
	challenge_user_num: {
		type: Array
	},
	challenge_leader: {
		type: String,
		required: true
	},
	commitCount: [commitSchema]
}, {
	versionKey: false
});


Challenge.statics.create = function (name, challenge_start, challenge_end, challenge_user_num, challenge_leader, commitCount) {
	const challenge = new this({
		name,
		challenge_start,
		challenge_end,
		challenge_user_num,
		challenge_leader,
		commitCount
	})

	console.log("challenge 생성");

	// return the Promise
	return challenge.save()
}


Challenge.statics.findOneById = function (id) {
	return this.findOne({
		_id: id
	}).exec()
}

module.exports = mongoose.model('challenges', Challenge);
