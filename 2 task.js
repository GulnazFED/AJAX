/* Этап 1. Подготовка данных */

// JSON, который мы будем парсить
const jsonString = `
{
    "list": [
        {
         "name": "Petr",
         "age": "20",
         "prof": "mechanic"
        },
        {
         "name": "Vova",
         "age": "60",
         "prof": "pilot"
        }
       ]
    
}`;
// console.log('jsonString', jsonString);

/* Этап 2. Получение данных */
const data = JSON.parse(jsonString);
// console.log('data', data);
const list = data.list;
// console.log('book', book);

let result = [];

list.forEach(node => {

    const men = {
        Name: node.name,
        Age: Number(node.age),
        Prof: node.prof,
    };

    result.push(men);
});
/* Этап 3. Запись данных в результирующий объект */


console.log('result', result);