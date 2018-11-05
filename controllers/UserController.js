var mysql = require('mysql');

var confuror = mysql.createConnection({
	
});

exports.index = (req, res) => {
	res.pageInfo = {};
	res.pageInfo.title = 'Usuarios inscritos';
	res.pageInfo.data = [];
	
	try {
		confuror.query("select * from prueba", (err, rows, fields) => {
			if(err) {console.log(err);}
			rows.forEach(row => { 
				res.pageInfo.data.push({id: row.Id, nombre: row.nombre, apePat: row.apepaterno, apeMat: row.apematerno, telefono: row.telefono, correo: row.correo}); 
			});
			
			res.render('../views/pages/User/index.html', res.pageInfo);
		});
		
	}catch(err){ console.log(err); }
}

exports.register = (req, res) => {
	res.pageInfo = {};
	res.pageInfo.title = 'Registro';

	

	res.render('../views/pages/User/register.html', res.pageInfo);
}

exports.save = (req, res) => {
	console.log(req.body);
	
	try {
		var query = "INSERT INTO prueba (nombre, apepaterno, apematerno, telefono, correo, tipopase, extras) values('" + req.body.nombre + "','" + req.body.paterno + "','" + req.body.materno + "','" + req.body.telefono + "','" + req.body.correo + "','" + req.body.nivAcceso + "','" + req.body.extras + "')";
		console.log(query);
		
		confuror.query(query, (err, rows, fields) => {
			if (err){ throw err; } 
			
			res.redirect('http://localhost:3000/user');
		});
		
	}catch(err){ console.log(err); }
}

