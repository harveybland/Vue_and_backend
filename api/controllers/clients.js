const core = require('../core');
const schemas = require('../schemas/schemas');

//Get all clients
core.app.get('/api/allClients', async function (req, resp) {
  try {
    const clientCase = await schemas.clientModel.aggregate([
      {
        $match:
        {
           isDeleted: false
        }
      },
      { $lookup: 
          {
              from: 'cases',
              localField: '_id',
              foreignField: 'clientid',
              as: 'case'
          }
          },
    ]);
    resp.status(200).json(clientCase);
  }
  catch {
    resp.status('404').json('error')
  }
});


//Get closed clients
core.app.get('/api/closedClients', async function (req, resp) {
  try {
    const clientCase = await schemas.clientModel.aggregate([
      {
        $match:
        {
           isDeleted: true
        }
      },
      { $lookup: 
          {
              from: 'cases',
              localField: '_id',
              foreignField: 'clientid',
              as: 'case'
          }
          },
    ]);
    resp.status(200).json(clientCase);
  }
  catch {
    resp.status('404').json('error')
  }
});

// Create Client
core.app.post('/api/client', async function (req, resp) {
  const result = schemas.clientModel.create(req.body)
  try {
    console.log(result);
    resp.status(200).json(result);
  }
  catch {
    resp.status('404').json('error');
  };
});


// Gets single client
core.app.get('/api/client/:uid', async function (req, resp) {
  try {
    const user = await schemas.clientModel.aggregate([
      {
        $match:
        {
          _id: core.mongoose.Types.ObjectId(req.params.uid)
        }
      }
    ]);
      resp.status(200).json(user[0]);
  }
  catch {
    resp.status('404').json('error')
  }
});

//Create a client
core.app.post('/api/createClient', async function (req, resp) {
  try {
    await schemas.clientModel.create(req.body)
    .then(result => {
      console.log(result);
      resp.status(200).json(result);
    })
  }
  catch {
    resp.status('404').json('error');
  };
});



//case for clientId
core.app.get('/api/clientCase/:uid', async function (req, resp) {
  try {
    const clientCase = await schemas.clientModel.aggregate([
      {
        $match:
        {
          _id: core.mongoose.Types.ObjectId(req.params.uid)
        }
      },
      { $lookup: 
          {
              from: 'cases',
              localField: '_id',
              foreignField: 'clientid',
              as: 'case'
          }
          },
    ]);
    resp.status(200).json(clientCase);
  }
  catch {
    resp.status('404').json('error')
  }
});


//Update a client
core.app.put('/api/updateClient/:uid', async (req, resp) => {
  try {
    const id = req.params.uid;
    let user = await schemas.clientModel.findOne({ _id: id })
    user.firstname = req.body.firstname,
    user.surname = req.body.surname,
    user.address = req.body.address,
    user.city = req.body.city,
    user.postcode = req.body.postcode,
    user.county = req.body.county,
    user.mobile = req.body.mobile,
    user.emailaddress = req.body.emailaddress,
    user.DOB = req.body.DOB,
    user.age = req.body.age,
    user.save();
    resp.status(200).json('ok')
  }
  catch {
    resp.status('404').json('error');
  }
});

// Delete client
core.app.delete('/api/client/:uid', async function (req, resp) {
  try {
    const id = req.params.uid;
    let user = await schemas.clientModel.findOne({ _id: id })
    user.isDeleted = true;
    user.save();
    resp.status(200).json('ok')
  }
  catch {
    resp.status('404').json('error');
  }
});
