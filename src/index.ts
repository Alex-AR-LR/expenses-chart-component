import "./css/main.css";
import data from "./json/data.json";

interface billDay {
  day: string;
  amount: number;
}

const barContainer = document.querySelector(".barras") as HTMLDListElement;
const fragment = document.createDocumentFragment();

document.addEventListener("DOMContentLoaded", () => {
  printBars();
  barColorChange();
});

const printBars = (): void => {
  data.forEach((bill: billDay) => {
    const div = document.createElement("div");
    div.classList.add("bar");
    div.innerHTML = `
    <div class="bar__graphic group/item" >
      <div class="bar__number">$${bill.amount}</div>
    </div>
    <p class="bar__title">${bill.day}</p>
    `;

    fragment.append(div);
  });

  barContainer.append(fragment);

  const graphics = document.querySelectorAll(
    ".bar__graphic"
  ) as NodeListOf<HTMLDivElement>;

  graphics.forEach((graphic, i: number) => {
    setTimeout(() => {
      graphic.style.height = `${data[i].amount * 1.4}%`;
    }, 300);
  });
};

const barColorChange = (): void => {
  let currentDay: number = new Date().getDay();

  const graphics = document.querySelectorAll(
    ".bar__graphic"
  ) as NodeListOf<HTMLDivElement>;

  if (!currentDay) currentDay = 1;

  graphics[currentDay - 1].classList.add("bg-main-cyan");
};
