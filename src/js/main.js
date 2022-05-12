Array.from(document.getElementsByClassName('ticker')).forEach(ticker => {
  startTicker(ticker, 5)
})

function startTicker(ticker, speed) {
  const tickerLabelBlock = ticker.querySelector('.ticker__labels')
  const tickerLabel = ticker.querySelector('.ticker__label');
  tickerLabelW = tickerLabel.clientWidth + Number(window.getComputedStyle(tickerLabel).getPropertyValue('margin-right').slice(0, -2));

  for (let i = 0; i < window.innerWidth / tickerLabelW; i++) {
    const newLabel = tickerLabel.cloneNode(true);
    tickerLabelBlock.appendChild(newLabel);
  }

  let i = 0;
  setInterval(() => {
    if (i >= tickerLabelW) {
      i = 0;
    }
    tickerLabelBlock.style.left = `-${i}px`;
    i++;
  }, 50/speed)
}