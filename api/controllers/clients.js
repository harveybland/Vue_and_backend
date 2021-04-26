const core = require('../core');
const schemas = require('../schemas/schemas');

// Get all clients
core.app.get('/api/clients', async function (req, resp) {
    try {
      const clients = await schemas.clientModel.find({ isDeleted: false });
      resp.status(200).json(clients);
    }
    catch {
      resp.status('404').json('error')
    }
  });