const { Model } = require('objection');

class Reservation extends Model {
	static get tableName() {
		return 'reservation';
	}
}

module.exports = Reservation;
