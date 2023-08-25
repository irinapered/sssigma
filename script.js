let tg = window.Telegram.WebApp; //получаем объект webapp телеграма 

tg.expand(); //расширяем на все окно

tg.MainButton.show();
tg.MainButton.setText("Закрыть навигацию");

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




// function showPage(pageId) {
//     const pages = document.querySelectorAll('.page');
//     pages.forEach(page => {
//         page.style.display = 'none';
//     });
    
//     const targetPage = document.getElementById(pageId);
//     targetPage.style.display = 'block';
// }


function animateTransition() {
    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');
    const blocksToAnimate = document.querySelectorAll('#page1 .block');
    const helloBlocks = document.querySelectorAll('.hello-block');
    
    let delay = 100;
    let blockCount = blocksToAnimate.length;

    // Начало анимации блоков на первой странице
    blocksToAnimate.forEach((block, index) => {
        setTimeout(() => {
            block.classList.add('animate-left');
        }, delay * index);
    });

    // Событие окончания анимации блоков на первой странице
    blocksToAnimate[blockCount - 1].addEventListener('animationend', function() {
        // Показать вторую страницу и начать анимацию блоков на второй странице
        page1.style.display = 'none';
        page2.style.display = 'block';
        
        helloBlocks.forEach((block, index) => {
            setTimeout(() => {
                block.classList.add('animate-right', 'animate-in');
            }, delay * index);
        });
    });
}





  
  
  
  
  
  
  
