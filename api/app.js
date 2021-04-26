const core = require('./core');
require('./controllers/clients');
require('./controllers/case');

const port = process.env.PORT || 4001
// start server from core import
core.app.listen(port, () => { console.log('server started on port 4001') })