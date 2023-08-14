let tg = window.Telegram.WebApp; //получаем объект webapp телеграма 

tg.expand(); //расширяем на все окно

function setWebsiteBackgroundColor(colorScheme) {
    const body = document.body;

    if (colorScheme === 'dark') {
        body.style.backgroundColor = 'black';
    } else {
        body.style.backgroundColor = 'white';
    }
}

function setThemeClass() {
    const colorScheme = Telegram.WebApp.colorScheme;
    setWebsiteBackgroundColor(colorScheme);
}

Telegram.WebApp.onEvent('themeChanged', setThemeClass);
setThemeClass();
