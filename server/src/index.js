const dbSetup = require('./db/db-setup');
const app = require('./app');

dbSetup();

const port = process.env.PORT || 3000;

app.listen(port, async () => {
	console.log(`Server started - listening on port ${port}`);
});
