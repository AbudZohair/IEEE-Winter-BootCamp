const clock = document.querySelector('.clock');

const time = () => {
  const now = new Date();
  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();

  const html = `
  <span>${h > 12 ? h - 12 : h}</span> :
  <span>${m < 10 ? `0${m}` : m}</span> :
  <span>${s < 10 ? `0${s}` : s}</span>
  `;
  clock.innerHTML = html;
};

setInterval(time, 1000);
// Method 2

// const simpleClock = () => {
//   const now = new Date().toLocaleTimeString();
//   clock.innerHTML = now;
// };
// setInterval(simpleClock, 1000);
