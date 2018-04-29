const connection = require('./connection.js');

let orm = {

    selectAll: (table, cb) => {
        let queryString = 'SELECT * FROM ??';
        connection.query(queryString, [table], (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: (table, column1, column2, value1, value2) => {
        let queryString = `INSERT INTO ?? (??, ??) VALUES (?, ?)`;
        connection.query(queryString, [table, column1, column2, value1, value2], (err) => {
            if (err) throw err;
        });
    },
    updateOne: (table, column1, value1, column2, value2) => {
        let queryString = `UPDATE ?? SET ?? = ? WHERE ?? = ?`;
        connection.query(queryString, [table, column1, value1, column2, value2], (err) => {
            if (err) throw err;
        });
    }
};

module.exports = orm;

