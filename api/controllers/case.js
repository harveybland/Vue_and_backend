const core = require('../core');
const schemas = require('../schemas/schemas');

// Gets case for clientid
core.app.get('/api/case/:clientid', async function (req, resp) {
    try {
        schemas.caseModel.find({ clientid: req.params.clientid }).then(result => {
            resp.status(200).json(result);
        })
        .catch(error => {
            resp.status('200').json('error');
        })
    }
    catch {
        resp.status('200').json('error')
    }
});

// add a case
core.app.post('/api/case/:clientid', async function (req, resp) {
    try {
        schemas.caseModel.create(req.body)
            .then(result => {
                resp.status(200).json(result);
            })
            .catch(error => {
                resp.status('200').json('error');
            })
    }
    catch {
        resp.status('200').json('error')
    }
});