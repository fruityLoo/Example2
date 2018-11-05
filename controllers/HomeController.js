exports.index = (req, res) => {
	res.pageInfo = {};
	res.pageInfo.title = 'Hello World';
	res.render('../views/pages/Home/index.html', res.pageInfo);
}