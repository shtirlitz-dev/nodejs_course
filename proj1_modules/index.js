const data = require('./users.json');
const {stringify: stringifyUser, capitalize } = require('./users.js')

data.forEach(user => {
    const formattedUserStr = capitalize(user.location.city) + ' ' + stringifyUser(user);
    console.log(formattedUserStr);
})