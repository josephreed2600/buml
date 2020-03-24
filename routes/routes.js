const fs = require('fs');

const getData = () => {
    if (!fs.existsSync('data.json')) {
        fs.writeFileSync('data.json','[]');
    }
    return JSON.parse(fs.readFileSync('data.json'));
};

const addData = newData => {
    let data = getData();
    data.push(newData);
    fs.writeFileSync('data.json',JSON.stringify(data));
}


const index = (req, res) => {
    res.render('index', {
        title: 'Homepage',
        navbar: {
            'Home': '/',
            // 'Interaction': `/interaction/${Math.floor(Math.random() * 100) + 1}`,
            'Interactions': '/interactions',
            'Test': '/test'
        }
    });
}

const interaction = (req, res) => {
    let linkExists = false;
    for(let d of getData()) {
        if (d.id === req.params.id) {
            linkExists = true;
            break;
        }
    }
    if(!linkExists){
        addData({
            id: req.params.id,
            link: `/interaction/${req.params.id}`
        });
    }

    res.render('interaction', {
        title: 'Interaction',
        id: req.params.id,
        navbar: {
            'Home': '/',
            // 'Interaction': `/interaction/${Math.floor(Math.random() * 100) + 1}`,
            'Interactions': '/interactions',
            'Test': '/test'
        }
    })
}

const interactions = (req, res) => {
    let data = getData();
    res.render('interactions', {
        title: 'Interaction',
        link: `/interaction/${Math.floor(Math.random() * 100) + 1}`,
        data: data,
        navbar: {
            'Home': '/',
            'Interactions': '/interactions',
            'Test': '/test'
        }
    })
}


module.exports = {
    index,
    interaction,
    interactions
}