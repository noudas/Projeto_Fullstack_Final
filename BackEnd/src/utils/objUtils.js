function isEmpty(obj) {
    for(var i in obj) return false;
    return true;
}

module.exports = {
    isEmpty,
}