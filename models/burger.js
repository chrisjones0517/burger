const orm = require('./../config/orm.js');

let burger = {
    selectAll: function (cb) {
        orm.selectAll('burgers', function (data) {
            cb(data);
        });
    },
    insertOne: function (burgerName) {
        orm.insertOne('burgers', 'burger_name', 'devoured', burgerName, '0');
    },
    updateOne: function (id) {
        orm.updateOne('burgers', 'devoured', '1', 'id', id);
    }
};

module.exports = burger;

