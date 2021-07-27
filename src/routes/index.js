const express = require('express');
const router = express.Router();
const app = express();
// const uri = '/api'
const cors = require('cors')
const request = require("request");
var multer  = require('multer')
var storage = multer.diskStorage({
	destination: function(req, file, cb){
		cb(null, './uploads');
	},
	filename: function(req, file, cb){
		cb(null, file.originalname);
	}
})
var upload = multer({ storage: storage })

app.use(cors());
router.use(cors())

const UserController = require('../controllers/user.controller')
const DriveController = require('../controllers/drive.controller')
const ClientController = require('../controllers/client.controller')
const CompanyController = require('../controllers/company.controller')


router.get('/', (req, res) => {
	
	res.send(JSON.stringify({
	    status: 200,
	    response: "EndPoint inicial"
	}));

})


// DRIVE

router.post(`/login`, UserController.loginUser)

router.post(`/drive/data`, DriveController.newDrive)

router.post(`/client/data`, ClientController.newClient)

router.post(`/company/data`, CompanyController.newCompany)
router.post(`/company/update`, CompanyController.updateCompany)
router.post(`/company/delete`, CompanyController.deleteCompany)
router.get(`/company/get`, CompanyController.getCompany)

module.exports = router;