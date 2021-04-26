const core = require('./core');
require('./controllers/case');
require('./controllers/clients');

const port = process.env.PORT || 4000
// start server from core import
core.app.listen(port, () => { console.log('server started on port 4000') })