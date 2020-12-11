const db = require('./product-db.json');

const all = () => [ ...db ]; // Return a copy, not the db itself
const byId = id => db.find(p => p.id === id);

module.exports = {
    byId,
    all
};
