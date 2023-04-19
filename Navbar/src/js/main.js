const btnMobile = document.querySelector(".ph-list");
const lista = document.querySelector("ul");

const menu = () => {
  lista.classList.toggle("active");
};

btnMobile.addEventListener("click", menu);
