
exports.index = (req, res) => {
    res.render('index', {
        title: 'Homepage',
        navbar: {
            'Home': '/',
            'Interaction': '/interaction',
            'Test': '/test',
        }
    });
}