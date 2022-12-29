const { Model } = require('objection');

class Venue extends Model {
	static get tableName() {
		return 'venue';
	}
}

module.exports = Venue;
