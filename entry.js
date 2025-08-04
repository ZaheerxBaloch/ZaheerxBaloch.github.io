window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  const main = document.querySelector(".main-wrapper");

  setTimeout(() => {
    loader.style.display = "none";
    main.style.display = "flex";
  }, 1800); // 1.8 sec loader time
});
