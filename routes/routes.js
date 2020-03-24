const fs = require('fs');
const nav = require('./nav.json')

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
        navbar: nav
    });
}

const diagram = (req, res) => {
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
            link: `/diagram/${req.params.id}`
        });
    }

    res.render('diagram', {
        title: 'Diagram',
        id: req.params.id,
        navbar: nav
    })
}

const diagrams = (req, res) => {
    let data = getData();
    res.render('diagrams', {
        title: 'Diagrams',
        link: `/diagram/${Math.floor(Math.random() * 100) + 1}`,
        data: data,
        navbar: nav
    })
}


module.exports = {
    index,
    diagram,
    diagrams,
}