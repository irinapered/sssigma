let tg = window.Telegram.WebApp; //получаем объект webapp телеграма 

tg.expand(); //расширяем на все окно

tg.MainButton.show()
tg.MainButton.setText("Назад");

tg.BackButton.show()
tg.HapticFeedback.impactOccurred(rigid)
tg.setHeaderColor("#CD5152")
