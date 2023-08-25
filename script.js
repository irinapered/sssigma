let tg = window.Telegram.WebApp; //получаем объект webapp телеграма 

tg.expand(); //расширяем на все окно
tg.MainButton.setText("Закрыть навигацию")

// tg.MainButton.show();
// tg.MainButton.setText("Закрыть навигацию");



// function setWebsiteBackgroundColor(colorScheme, navigationBars) {
//     const body = document.body;

//     if (colorScheme === 'dark') {
//         body.style.backgroundColor = 'black';
//         navigationBars.forEach(navigationBar => {
//             navigationBar.style.backgroundColor = '#1C1B1E';
//         });
//     } else {
//         body.style.backgroundColor = '#F2F1F6';

//     }
// }

// function setThemeClass() {
//     const colorScheme = Telegram.WebApp.colorScheme;
//     const navigationBars = document.querySelectorAll('.navigationBar');
//     setWebsiteBackgroundColor(colorScheme, navigationBars);
// }

// Telegram.WebApp.onEvent('themeChanged', setThemeClass);
// setThemeClass();




function showPage(pageId) {
  // Скрыть все страницы с помощью opacity и visibility
  var pages = document.getElementsByClassName("page");
  for (var i = 0; i < pages.length; i++) {
    pages[i].style.transform = "translateX(-50%)";
  }

  // Отобразить выбранную страницу
  var pageToShow = document.getElementById(pageId);
  if (pageToShow) {
    pageToShow.style.visibility = "visible";
    pageToShow.style.transform = "translateX(0)";
  }
}
  







  
  
  
  
  
  
  
