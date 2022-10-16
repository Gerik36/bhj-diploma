/**
 * Основная функция для совершения запросов
 * на сервер.
 * */

const createRequest = (options = {}) => {
    const { data, method, callback } = options;
    let url = options.url;

    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    const formData = new FormData();

    if (method != 'GET') {
        for (let key in data) {
            formData.append(key, data[key]);
        }
    } else {
        url += '?';
        for (let key in data) {
            url += `${key}=${data[key]}&`;
        }
    }

    try {
        xhr.open(method, url);
        if (method === 'GET') {
            xhr.send();
        } else {
            xhr.send(formData);
        }
    } catch (error) {
        callback(error);
    }

    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback(null, xhr.response);
        }
    });
};
