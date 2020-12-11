const model = require('../models/employees');

const list = (req, res) => {
    res.render('employees/list', {
        locals: {
            employees: model.alphabeticalByLastName()
        },
        partials: {
            header: '/partials/header',
            footer: '/partials/footer'
        }
    });    
};

const detail = (req, res) => {
    const { id } = req.params;

    res.render('employees/detail', {
        locals: {
            employee: model.byId(id)
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
