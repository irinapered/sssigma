function navigate() {
    const block = document.querySelector('.block');
    const container = document.querySelector('.container');
  
    block.style.animation = 'fade-out 0.5s forwards';
    container.style.animation = 'shift-left 0.5s forwards';
  
    setTimeout(() => {
      window.location.href = 'новая_страница.html';
    }, 500);
  }
  
