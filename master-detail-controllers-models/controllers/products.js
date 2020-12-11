const model = require('../models/products');

const list = (req, res) => {
    res.render('products/list', {
        locals: {
            products: model.all()
        },
        partials: {
            header: '/partials/header',
            footer: '/partials/footer'
        }
    });
};

const detail = (req, res) => {
    const { id } = req.params;

    res.render('products/detail', {
        locals: {
            product: model.byId(id)
        },
        partials: {
            header: '/partials/header',
            footer: '/partials/footer'
        }        
    });
}

module.exports = {
    list,
    detail
}
