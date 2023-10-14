const fs = require('fs');

/**
 * Добавляет id к файлу
 */

// 1- считаемые данные
let rawdata = fs.readFileSync('./data/offices.json');
let dataSource = JSON.parse(rawdata);
// console.log(dataSource)

// 2 - добавим id
const dataFixed = dataSource.slice().map((item, index) => {
    item.id = index
    return item
});
console.log(dataFixed)

// 3 - запишем данные
let dataString = JSON.stringify(dataFixed);
// console.log(dataString)
fs.writeFileSync('offices_fixed.json', dataString);
