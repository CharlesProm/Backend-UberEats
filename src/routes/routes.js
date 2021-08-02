const express = require('express');
const router = express.Router();
const app = express();
const path = require('path')
// const uri = '/api'
const cors = require('cors')
var multer = require('multer')

var storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, './src/images');
	},
	filename: function (req, file, cb) {
		cb(null, file.originalname);
	}
})
var upload = multer({ storage })

app.use(cors());
router.use(cors())
//// Multer config
app.use(multer({
	dest: path.join(__dirname, '../images')
}).single('image'))


const { registerDriver, registerClient, registerCompany} = require('../controllers/registerController');
const {login,addProduct,getAllProducts,getProduct,updateProduct,deleteProduct,getAllCompanies,getCompanyData} = require('../controllers/loginDashboard')
/////////// Routes

router.post('/upload', upload.array('image', 3), registerDriver)

router.post('/register/client', registerClient)
router.post('/register/driver',upload.array('image', 1), registerDriver)
router.post('/register/company',upload.array('image', 1), registerCompany)
router.post(`/login`, login)

router.post('/product/add',addProduct)
router.get('/products/:id',getAllProducts)
router.get('/product/:id',getProduct)

router.put('/product/update', updateProduct)

router.delete('/product/delete',deleteProduct)

router.get('/companies',getAllCompanies)
router.get('/company/:id',getCompanyData)

module.exports = router;