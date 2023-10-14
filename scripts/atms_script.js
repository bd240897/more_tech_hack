const fs = require('fs');

/**
 * Добавляет id к файлу
 */

// 1- считаемые данные
let rawdata = fs.readFileSync('./data/atms.json');
let dataSource = JSON.parse(rawdata);
// console.log(dataSource)

// 2 - добавим id
const dataFixed = dataSource.atms.slice().map((item, index) => {
    item.id = index
    return item
});
console.log(dataFixed)

// 4 - вернем как было
const dataFixed2 = {atms: dataFixed}

// 3 - запишем данные
let dataString = JSON.stringify(dataFixed2);
// console.log(dataString)
fs.writeFileSync('atms_fixed.json', dataString);
