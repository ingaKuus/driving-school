// Бегущая строка
Array.from(document.getElementsByClassName('ticker')).forEach(ticker => {
  startTicker(ticker, 5)
  window.onresize = () => {
    startTicker(ticker, 5, true);
  }
})


// Смена вкладки в блоке "Наши филиалы"
const filialBlockAddresses = document.querySelector('.filial-block__addresses');
filialBlockAddresses.querySelectorAll('.tab').forEach(tab => {
  tab.onclick = () => {
    changeTab(tab, filialBlockAddresses);
  }
});


// Центрирование картинок в блоке
window.onload = () => {
  Array.from(document.querySelectorAll('img._center')).forEach(img => {
    centerImg(img);
  })
}



//-------------Functions

function startTicker(ticker, speed, isOnResize) {
  const tickerLabelBlock = ticker.querySelector('.ticker__labels')
  const tickerLabel = ticker.querySelector('.ticker__label');
  tickerLabelW = tickerLabel.clientWidth + Number(window.getComputedStyle(tickerLabel).getPropertyValue('margin-right').slice(0, -2));

  const labelsMaxNum = window.innerWidth / tickerLabelW + 1;
  const labelsCurNum = tickerLabelBlock.children.length;
  if (labelsCurNum < labelsMaxNum) {
    for (let i = 0; i <= labelsMaxNum - labelsCurNum; i++) {
      const newLabel = tickerLabel.cloneNode(true);
      tickerLabelBlock.appendChild(newLabel);
    }
  }

  if (!isOnResize) {
    let i = 0;
    setInterval(() => {
      if (i >= tickerLabelW) {
        i = 0;
      }
      tickerLabelBlock.style.left = `-${i}px`;
      i++;
    }, 50/speed)
  }
}

function changeTab(tab, parentBlock) {
  if (tab.classList.contains('tab_active')) {
    return;
  }

  const blockId = tab.getAttribute('openBlock');
  const newBlock = document.getElementById(blockId);
  const prevBlock = parentBlock.querySelector('.active');
  const prevTab = parentBlock.querySelector('.tab_active');

  console.log(prevBlock, prevTab);
  newBlock.classList.add('active');
  prevBlock.classList.remove('active');

  tab.classList.add('tab_active')
  prevTab.classList.remove('tab_active');
}

function centerImg(img) {
  let w = img.clientWidth;
  let h = img.clientHeight;
  const parent = img.parentElement.parentElement;
  const parentW = parent.clientWidth
  const parentH = parent.clientHeight


  if (w/h > parentW/parentH) {
    img.style.width = "auto";
    img.style.height = "100%"
  } else {
    img.style.width = "100%";
    img.style.height = "auto"
  }
}

function moveSliderListener(slider, middleware) {
  const prevBtn = slider.querySelector('.slider__btn-prev')
  const nextBtn = slider.querySelector('.slider__btn-next')

  prevBtn.onclick = () => {
    btnListener([prevBtn, nextBtn], false)
  }
  nextBtn.onclick = () => {
    btnListener([prevBtn, nextBtn], true)
  }
  

  function btnListener(btns, isForward) {
    const items = slider.getElementsByClassName('slider__item')
    let activeItemNum;
    const activeItem = Array.from(items).find((item, i) => {
      if (item.classList.contains("active")) {
        activeItemNum = i;
        return item;
      }
    })
    let newItem;

    if (isForward) {
      if (activeItem.nextElementSibling) {
        newItem = activeItem.nextElementSibling;
        activeItemNum++
      } else {
        newItem = items[0]
        activeItemNum = 0;
      }
    } else {
      if (activeItem.previousElementSibling) {
        newItem = activeItem.previousElementSibling;
        activeItemNum--;
      } else {
        newItem = items[items.length-1];
        activeItemNum = items.length-1;
      }
    }

    btns.forEach(btn => {
      btn.setAttribute('activeItemNum', activeItemNum)
    })
    
    activeItem.classList.remove('active');
    newItem.classList.add('active');

    const activeContainer = slider.querySelector('.slider__item-active-container');
    if (activeContainer) {
      activeContainer.children[0].remove();
      activeContainer.appendChild(newItem.children[0].cloneNode(true));
    }

    if (middleware.length) {
      middleware.forEach(func => {
        func(btns[0]);
      })
    }
  }
}

Array.from(document.querySelectorAll('.slider')).forEach(slider => {
  const middleware = [];
  if (slider.classList.contains('instructors-block__slider')) {
    middleware.push(setActiveContent, centerItemImg)

    function centerItemImg() {
      const img = slider.querySelector('.instructors-block__slider img');
      centerImg(img);
    }
  
    function setActiveContent(btn) {
      const data = require('../../gulpfile.js/data/instructors.json');
      const container = slider.querySelector('.instructors-block__item-info')
      const title = container.querySelector('.instructors-block__item-title')
      const subtitleDriving = container.querySelector('.instructors-block__item-exp-driving')
      const subtitleInstructor = container.querySelector('.instructors-block__item-exp-instructor')
      const itemNum = btn.getAttribute('activeItemNum');

  
      title.innerHTML = data[itemNum].name;
      subtitleDriving.querySelector('span').innerHTML = data[itemNum].info.exp_driving
      subtitleInstructor.querySelector('span').innerHTML = data[itemNum].info.exp_instructor;

      const curItemNumBlock = slider.querySelector('.instructors-block__slider-item-num .cur');
      curItemNumBlock.innerHTML = Number(itemNum)+1;
    }
  }

  moveSliderListener(slider, middleware);
})