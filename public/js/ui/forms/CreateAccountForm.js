/**
 * Класс CreateAccountForm управляет формой
 * создания нового счёта
 * */
class CreateAccountForm extends AsyncForm {
    /**
     * Создаёт счёт с помощью Account.create и закрывает
     * окно в случае успеха, а также вызывает App.update()
     * и сбрасывает форму
     * */
    onSubmit(data) {
        Account.create(data, (err, response) => {
            if (response && response.success) {
                App.update();
                App.getModal('createAccount').close();
                this.element.reset();
            } else {
                alert(JSON.stringify(response.error));
                this.element.reset();
                this.element.querySelector('.form-group input').focus();
            }
        });
    }
}
