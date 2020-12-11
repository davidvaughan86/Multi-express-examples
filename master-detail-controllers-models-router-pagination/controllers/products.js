const model = require('../models/products');

const list = (req, res) => {
    res.render('products/list', {
        locals: {
            products: model.all(),
            pagination: {}
        },
        partials: {
            header: '/partials/header',
            footer: '/partials/footer'
        }
    });
};

const pageLinks = (max, current) => {
    const links = [];
    let count = 1;
    while (count <= max) {
        if (count == current) {
            links.push(`<a class="current-page" href="/products/page/${count}">${count}</a>`)            
        } else {
            links.push(`<a href="/products/page/${count}">${count}</a>`)            
        }
        count++;
    }

    return links.join('');
}

const page = (req, res) => {
    const { page } = req.params;
    res.render('products/list', {
        locals: {
            products: model.byPage(page),
            pagination: {
                links: pageLinks(model.pageCount, page)
            }
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
    detail,
    page,
}
