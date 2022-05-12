Array.from(document.getElementsByClassName('ticker')).forEach(ticker => {
  startTicker(ticker, 5)
  window.onresize = () => {
    startTicker(ticker, 5, true);
  }
})

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