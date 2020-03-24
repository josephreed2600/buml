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
    fs.writeFileSync('data.json',JSON.stringify(data, null, 4));
}

const updateData = newData => {
    fs.writeFileSync('data.json',JSON.stringify(newData, null, 4));
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

const remove = (req, res) => {
    res.render('remove', {
        title: 'Remove',
        navbar: nav
    });
}

const removeDiagram = (req, res) => {
    let data = getData();
    for(let i = 0; i< data.length; i++) {
        if (data[i].id === req.body.id){
            delete data[i];
            break;
        }
    }
    let newData = [];
    data.forEach(item => {
        if (item !== null){
            newData.push(item);
        }
    });
    updateData(newData);
    res.redirect('/diagrams');
}

module.exports = {
    index,
    diagram,
    diagrams,
    remove,
    removeDiagram
}