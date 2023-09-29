const popButton = document.querySelector("#pop");
const popWindow = document.querySelector(".popup_modal");
popButton.addEventListener("click", function (event){
  event.stopPropagation();
  event.preventDefault();
  popWindow.classList.toggle("pop_opened");

});

document.body.addEventListener("click", function(){
  if(popWindow.classList.contains("pop_opened")){
    popWindow.classList.remove("pop_opened")

  }
});

popWindow.addEventListener("click", function (event){
  event.stopPropagation();
});

// Получаем элементы формы и сообщения об ошибке
const form = document.getElementById('myForm');
const errorElement = document.getElementById('error');

// Функция для переключения типа поля пароля
function togglePasswordVisibility() {
  const passwordInput = document.getElementById('password');
  const showPasswordButton = document.getElementById('showPassword');

  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    showPasswordButton.textContent = 'Скрыть пароль';
  } else {
    passwordInput.type = 'password';
    showPasswordButton.textContent = 'Показать пароль';
  }
}

// Обработчик события для кнопки показа пароля
document.getElementById('showPassword').addEventListener('pointerdown', togglePasswordVisibility);
document.getElementById('showPassword').addEventListener('pointerup', togglePasswordVisibility);

// Обработчик события для формы
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Предотвращаем перезагрузку страницы

  // Собираем данные формы
  const formData = new FormData(form);
  console.log('Данные формы:', Object.fromEntries(formData));

  // Скрываем модальное окно и показываем сообщение об успешной отправке
  document.getElementById('modal').style.display = 'none';
  showSuccessMessage('Данные успешно отправлены!');
});

// Обработчик события для полей формы при потере фокуса
form.addEventListener('blur', function(event) {
  const input = event.target;

  // Валидация поля
  if (!input.checkValidity()) {
    input.setCustomValidity('Пожалуйста, заполните поле корректно.');
    errorElement.textContent = input.validationMessage;
  } else {
    input.setCustomValidity('');
    errorElement.textContent = '';
  }
});

// Функция для показа сообщения об успешной отправке
function showSuccessMessage(message) {
  const successMessage = document.createElement('div');
  successMessage.textContent = message;
  successMessage.style.backgroundColor = '#d4edda';
  successMessage.style.color = '#155724';
  successMessage.style.padding = '10px';
  successMessage.style.marginTop = '10px';
  successMessage.style.textAlign = 'center';
  document.body.appendChild(successMessage);
}

