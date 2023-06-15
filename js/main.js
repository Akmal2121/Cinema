const login = document.getElementById("login");
const login_1 = document.getElementById("login_1");
const scheme_svg = document.querySelector(".scheme-svg");
const amount_of_payment = document.getElementById("amount_of_payment");
const selected_places = document.getElementById("selected_places");
const payment_button = document.getElementById("payment_button");
const days = document.querySelectorAll(".day");
const selector_1 = document.getElementById("selector_1");
const selector_2 = document.getElementById("selector_2");

let count_days;
//days
const day_1 = document.getElementById("day_1");
const day_2 = document.getElementById("day_2");
const day_3 = document.getElementById("day_3");
const day_4 = document.getElementById("day_4");
let total_sum = 1;
function main() {
  if (localStorage.getItem("name")) {
    login_1.textContent = `Привет ${localStorage.getItem("name")}`;
  } else {
    login_1.textContent = `Login`;
  }
  login.addEventListener("click", () => {
    const name = prompt(`Введите ваше имя`);
    localStorage.setItem("name", name);
    login_1.textContent = `Привет ${name}`;
    //
  });
  //Если есть имя в Local Storage, то мы его вставляем
  //Функция для выбора мест
  function select_area() {
    scheme_svg.addEventListener("click", (event) => {
      // console.log(event);
      if (!event.target.classList.contains("booked")) {
        event.target.classList.toggle("active");
        let count_selected = scheme_svg.querySelectorAll(".active").length;
        total_sum = count_selected * 450;
        amount_of_payment.textContent = `${total_sum}₽ `;
        selected_places.textContent = `Количество выбранных мест ${count_selected}`;
      }
    });
  }
  select_area();
  // day_1.addEventListener("click", () => {
  //   day_1.classList.toggle("day_select");
  //   if (
  //     day_2.classList.contains("day_select") ||
  //     day_3.classList.contains("day_select") ||
  //     day_4.classList.contains("day_select")
  //   ) {
  //     day_2.classList.remove("day_select");
  //     day_3.classList.remove("day_select");
  //     day_4.classList.remove("day_select");
  //   }
  // });
  // day_2.addEventListener("click", () => {
  //   day_2.classList.toggle("day_select");
  //   if (
  //     day_1.classList.contains("day_select") ||
  //     day_3.classList.contains("day_select") ||
  //     day_4.classList.contains("day_select")
  //   ) {
  //     day_1.classList.remove("day_select");
  //     day_3.classList.remove("day_select");
  //     day_4.classList.remove("day_select");
  //   }
  // });
  // day_3.addEventListener("click", () => {
  //   day_3.classList.toggle("day_select");
  //   if (
  //     day_2.classList.contains("day_select") ||
  //     day_1.classList.contains("day_select") ||
  //     day_4.classList.contains("day_select")
  //   ) {
  //     day_2.classList.remove("day_select");
  //     day_1.classList.remove("day_select");
  //     day_4.classList.remove("day_select");
  //   }
  // });
  // day_4.addEventListener("click", () => {
  //   day_4.classList.toggle("day_select");
  //   if (
  //     day_2.classList.contains("day_select") ||
  //     day_3.classList.contains("day_select") ||
  //     day_1.classList.contains("day_select")
  //   ) {
  //     day_2.classList.remove("day_select");
  //     day_3.classList.remove("day_select");
  //     day_1.classList.remove("day_select");
  //   }
  // });

  payment_button.addEventListener("click", () => {
    const dates = document.querySelectorAll(".day");
    let is_active = false;
    for (let i = 0; i < dates.length; i++) {
      if (dates[i].classList.contains("day_select")) {
        is_active = true;
      }
    }

    let count_places = scheme_svg.querySelectorAll(".active").length;
    if (localStorage.getItem("name") && is_active && count_places > 0) {
      alert(`Кинотеатр${selector_1.value} 
    Время${selector_2.value} 
    Сумма оплаты${total_sum}₽ 
    Мест${total_sum / 450}
    `);
    } else {
      alert("Зарегистрируйтесь перед покупкой.Или вы не выбрали места!");
    }
  });
  const data = document.querySelectorAll(".day");
  for (let i = 0; i < data.length; i++) {
    data[i].addEventListener("click", () => {
      console.log(1);
      data[i].classList.toggle("day_select");
      if (data[i].classList.contains("day_select")) {
        for (let j = 0; j < data.length; j++) {
          data[j].classList.remove("day_select");
          if (j == i) {
            data[i].classList.toggle("day_select");
          }
        }
      }
    });
  }
}
main();
