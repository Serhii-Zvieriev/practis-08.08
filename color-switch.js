const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

class ColorSwitch {
  constructor(selector, colors) {
    this.selector = selector;
    this.colors = colors;
    this.intervalId = null;
  }

  randomIntegerFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  getRefs() {
    const container = document.querySelector(this.selector);
    return {
      startBtn: container.querySelector('[data-action="start"]'),
      stopBtn: container.querySelector('[data-action="stop"]'),
      body: document.body,
    };
  }

  startFn() {
    // console.log(this);
    this.getRefs().startBtn.disabled = true;
    this.intervalId = setInterval(() => {
      this.getRefs().body.style.backgroundColor =
        this.colors[this.randomIntegerFromInterval(0, this.colors.length - 1)];
    }, 1000);
  }

  stopFn() {
    if (!this.getRefs().startBtn.disabled) {
      return;
    }
    clearInterval(this.intervalId);
    this.getRefs().startBtn.disabled = false;
  }

  addListeners() {
    this.getRefs().startBtn.addEventListener("click", this.startFn.bind(this));
    this.getRefs().stopBtn.addEventListener("click", this.stopFn.bind(this));
  }
}

const switchColor = new ColorSwitch(".container", colors);
switchColor.addListeners();
// const refs = {
//   startBtn: document.querySelector('[data-action="start"]'),
//   stopBtn: document.querySelector('[data-action="stop"]'),
//   body: document.body,
// };

// let intervalId;

// refs.startBtn.addEventListener("click", startFn);
// refs.stopBtn.addEventListener("click", stopFn);

// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// function startFn() {
//   //   console.log(e);
//   refs.startBtn.disabled = true;
//   intervalId = setInterval(() => {
//     refs.body.style.backgroundColor = getRandomColor();
//     //   colors[randomIntegerFromInterval(0, colors.length - 1)];
//   }, 1000);
// }

// function stopFn() {
//   if (!refs.startBtn.disabled) {
//     return;
//   }
//   console.log("1");
//   clearInterval(intervalId);
//   refs.startBtn.disabled = false;
// }

// function getRandomColor() {
//   return `rgb(${randomIntegerFromInterval(0, 255)}, ${randomIntegerFromInterval(
//     0,
//     255
//   )}, ${randomIntegerFromInterval(0, 255)})`;
// }

// .then(pokemon=>renderPocemonCard(pokemon)) ==== .then(renderPocemonCard)
