let tg = window.Telegram.WebApp; //получаем объект webapp телеграма 

tg.expand(); //расширяем на все окно

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
  
    // Дожидаемся завершения загрузки содержимого iframe
    iframe.onload = function () {
      // По окончании анимации переходим на новую страницу
      setTimeout(function () {
        window.location.href = pageURL;
      }, 1000); // Подождите нужное количество времени
  
      // Начинаем анимацию появления после загрузки
      requestAnimationFrame(function () {
        iframe.style.transform = 'translateX(0)';
      });
    };
  }
  
  
  
  
  
  
  
  
  
  
