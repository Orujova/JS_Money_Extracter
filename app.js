const extractedMoney = document.getElementById("extractedMoney");
const search = document.getElementById("search");
const btn = document.getElementById("btn");
let pul = document.createElement("h4");

let data = [];
const showData = () => {
  extractedMoney.innerHTML = "";

  data.filter((a) => {
    if (pul / a.money >= 1) {
      let say = document.createElement("span");
      say = Math.floor(pul / a.money);
      pul = (pul - say * a.money).toFixed(2);
      if (say < 5) {
        for (let i = 0; i < say; i++) {
          const photo = document.createElement("img");
          photo.classList.add("photo");
          photo.src = a.image;
          extractedMoney.append(photo);
        }
        const othermoney = document.createElement("br");
        extractedMoney.append(othermoney);
      } else {
        for (let i = 0; i < 5; i++) {
          const photo = document.createElement("img");
          photo.classList.add("photo");
          photo.src = a.image;
          extractedMoney.append(photo);
        }
        let count = document.createElement("span");
        count.textContent = `x${say - 5}`;
        count.classList.add("number");
        extractedMoney.append(count);
        const othermoney = document.createElement("br");
        extractedMoney.append(othermoney);
      }
    }
  });
};
btn.addEventListener("click", () => {
  pul = search.value;
  showData();
});
fetch("money.json")
  .then((res) => res.json())
  .then((responseData) => {
    data = responseData;
    showData();
  });
