const db = require('./product-db.json');

const perPage = 25;

const all = () => [ ...db ]; // Return a copy, not the db itself
const byId = id => db.find(p => p.id === id);

const byPage = (pageNumber) => {
    // Return part of the array based on:
    // pageNumber and how many perPage

    // pages start at 1, but array indexes start at 0
    const start = (pageNumber - 1) * perPage;
    const end = start + perPage; // slice will go up to, but not include the end index
    return db.slice(start, end);
};

// Round up to the next whole number
const pageCount = Math.ceil(db.length / perPage);

module.exports = {
    byId,
    all,
    byPage,
    pageCount
};
