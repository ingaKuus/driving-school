// function startTicker(ticker, speed) {
//   const tickerLabel = ticker.querySelector('.ticker__label');
//   tickerLabelW = tickerLabel.clientWidth + Number(window.getComputedStyle(tickerLabel).getPropertyValue('margin-right').slice(0, -2));

//   for (let i = 0; i < window.innerWidth / tickerLabelW; i++) {
//     const newLabel = tickerLabel.cloneNode(true);
//     ticker.appendChild(newLabel);
//   }

//   Array.from(ticker.children).forEach(label => {
//     label.style.WebkitTransition = `transform ${10/speed}s`
//     label.style.MozTransition = `transform ${10/speed}s`
//     label.style.transform = `translate(${-label.clientWidth}px, 0)`;
//   });
// }

// startTicker(document.querySelector('.ticker'), 5);