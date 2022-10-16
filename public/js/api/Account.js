/**
 * Класс Account наследуется от Entity.
 * Управляет счетами пользователя.
 * Имеет свойство URL со значением '/account'
 * */
class Account extends Entity {
    static url = '/account';
    /**
     * Получает информацию о счёте
     * */
    static get(id = '', callback) {
        createRequest({
            url: this.url + '/' + id,
            method: 'GET',
            callback,
        });
    }
}
