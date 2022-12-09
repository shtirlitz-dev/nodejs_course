function stringify(user) {
    const firstName = capitalize(user.name.first);
    const lastName = capitalize(user.name.last);
    return `${user.name.title} ${firstName} ${lastName}, ${user.email}`;
}

function capitalize(name) {
    if(typeof name !== 'string')
        return '';
    if(name.length == 0)
        return "";
    return name[0].toUpperCase() + name.slice(1);
}

module.exports = {stringify, capitalize}