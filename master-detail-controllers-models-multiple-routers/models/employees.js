const db = require('./employees-db.json');

// Note: data is a big object, not an array.
// We need to tack on each employee's id
const arr = Object.values(db);
const ids = Object.keys(db);
// Need the index, so using a regular for-loop
for (let i=0; i<arr.length; i++) {
    arr[i].id = ids[i];
}

let sorted = [ ...arr ];
sorted.sort((e1, e2) => {
    const l1 = e1.lastName;
    const l2 = e2.lastName;
    const f1 = e1.firstName;
    const f2 = e2.firstName;
    
    if (l1 < l2) {
        // employee e1's last name  is alphabetically "before" employee e2's
        return -1;
    } else if (l1 > l2) {
        // employee e1's last name  is alphabetically "after" employee e2's
        return 1;
    } else {
        // Last name is same, do additional firstName sort
        if (f1 < f2) {
            return -1;
        } else if (f1 > f2) {
            return 1;
        } else {
            // Same first and last name
            return 0;            
        }
    }
})


const all = () => [ ...arr ]; // return copy of array
const byId = id => db[id];
const alphabeticalByLastName = () => [ ...sorted ];
module.exports = {
    byId,
    all,
    alphabeticalByLastName
};
