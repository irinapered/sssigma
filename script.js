let tg = window.Telegram.WebApp; //получаем объект webapp телеграма 

tg.expand(); //расширяем на все окно

// tg.MainButton.show();
// tg.MainButton.setText("Закрыть навигацию");






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
    
    let delay = 75;
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





  
  
  
  
  
  
  
