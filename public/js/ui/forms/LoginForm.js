/**
 * Класс LoginForm управляет формой
 * входа в портал
 * */
class LoginForm extends AsyncForm {
    /**
     * Производит авторизацию с помощью User.login
     * После успешной авторизации, сбрасывает форму,
     * устанавливает состояние App.setState( 'user-logged' ) и
     * закрывает окно, в котором находится форма
     * */
    onSubmit(data) {
        User.login(data, (err, response) => {
            if (response && response.success) {
                this.element.reset();
                App.setState('user-logged');
                App.getModal('login').close();
            } else {
                alert(JSON.stringify(response.error));
                this.element.reset();
                this.element.querySelector('.form-group input').focus();
            }
        });
    }
}
