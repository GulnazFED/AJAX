// Внимательно посмотрите за очередностью выводимых в консоль данных

// Функция выполнения promise
function usePromise() {
    const randomNumber = Math.floor(Math.random() * 100);
    // Создаем promise
    const myPromise = new Promise((resolve, reject) => {

        setTimeout(() => {
            if (randomNumber % 2 == 0) {
                resolve({
                    data: randomNumber,
                });
            } else {
                reject({
                    data: randomNumber,
                });
            }
        }, 3000);

    });




    // Выполняем promise
    myPromise
        .then((result) => {
            console.log('Завершено успешно. Сгенерированное число-', result.data);
        })
        .catch((error) => {
            console.log('Завершено неуспешно. Сгенерированное число-', error.data);
        });


};


usePromise();