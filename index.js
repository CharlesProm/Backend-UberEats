const express = require('express');
const app = express();
const path = require('path')

const cors = require('cors')
var multer = require('multer')
var storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, './uploads');
	},
	filename: function (req, file, cb) {
		cb(null, file.originalname);
	}
})
var upload = multer({ storage: storage })

app.use(cors());

// middlewares
app.use(express.urlencoded({ extended: false }))
app.use(express.json());

//setting
app.use(require('./src/routes/index'))


const PORT = 3000;
const server = app.listen(PORT, function () {
	console.log(`Escuchando en el puerto ${PORT}`);
	console.log(`http://localhost:${PORT}`);
});
