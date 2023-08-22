let tg = window.Telegram.WebApp; //получаем объект webapp телеграма 

tg.expand(); //расширяем на все окно
tg.MainButton.show()
tg.MainButton.setText("Закрыть навигацию");
tg.MainButton.Text("Закрыть навигацию");

function setWebsiteBackgroundColor(colorScheme, navigationBars) {
    const body = document.body;

    if (colorScheme === 'dark') {
        body.style.backgroundColor = 'black';
        navigationBars.forEach(navigationBar => {
            navigationBar.style.backgroundColor = '#1C1B1E';
        });
    } else {
        body.style.backgroundColor = '#F2F1F6';

    }
}

function setThemeClass() {
    const colorScheme = Telegram.WebApp.colorScheme;
    const navigationBars = document.querySelectorAll('.navigationBar');
    setWebsiteBackgroundColor(colorScheme, navigationBars);
}

Telegram.WebApp.onEvent('themeChanged', setThemeClass);
setThemeClass();




function openPage(pageURL) {
    var iframe = document.createElement('iframe');
    iframe.src = pageURL;
    iframe.className = 'animatedPage';
    document.body.appendChild(iframe);


  
    // Используем setTimeout, чтобы установить новое состояние анимации через небольшую задержку
    setTimeout(function () {
      iframe.style.transform = 'translateX(0)';
    }, 0);
  
    // По окончании анимации удаляем iframe и переходим на новую страницу
    setTimeout(function () {
      document.body.removeChild(iframe);
      window.location.href = pageURL;
    }, 500);
  }
  
  
  
  
  
  
  
  
