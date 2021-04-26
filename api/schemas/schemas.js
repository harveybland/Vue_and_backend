const { Schema } = require('mongoose');
const core = require('../core');

const clientSchema = new core.Schema({
    firstname: String,
    surname: String,
    address: String,
    city: String,
    postcode: String,
    county: String,
    mobile: String,
    emailaddress: String,
    DOB: String,
    age: String,
    isDeleted: { type: Boolean, default: false },
    case: [{ type: Schema.Types.ObjectId, ref: 'case' }]
});

const caseSchema = new core.Schema({
    caseid: { type: core.mongoose.Schema.ObjectId, required: true },
    caseType: String,
    details: String,
    start: {
		type: Date,
		default: Date.now,
        required: true
	},
	end: {
		type: Date,
		default: () => Date.now() + 7*24*60*60*1000,
        required: true
	}
});

const caseTypesSchema = new core.Schema({
    caseType: String,
    clients: [{ type: Schema.Types.ObjectId, ref: 'clients' }]
});


const clientModel = core.mongoose.model("client", clientSchema);
const caseModel = core.mongoose.model("case", caseSchema);
const caseTypesModel = core.mongoose.model("caseTypes", caseTypesSchema);

module.exports.clientModel = clientModel;
module.exports.caseModel = caseModel;
module.exports.caseTypesModel = caseTypesModel;
