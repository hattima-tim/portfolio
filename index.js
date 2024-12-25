let modalOpened = false;

range.oninput = () => {
  console.log(range.value);
  console.log(modalOpened);
  document.body.style.setProperty("--pos", range.value + "%");

  if (modalOpened ? Number(range.value) >= 60 : Number(range.value) >= 96) {
    document.body.style.setProperty("--mos", range.value + "%");
  } else {
    document.body.style.setProperty("--mos", "0%");
  }
};

avatar.onclick = (event) => {
  event.preventDefault();
  const modal = document.getElementById("modal");

  if (modal.style.display === "none" || modal.style.display === "") {
    modal.style.display = "flex";
    modalOpened = true;
  } else {
    modal.style.display = "none";
    modalOpened = false;
  }
};

// document.addEventListener("click", function (event) {
//   const modal = document.getElementById("modal");
//   const button = document.getElementById("triggerButton");

//   // Check if the click is outside the modal and button
//   if (
//     modal.style.display === "block" &&
//     !modal.contains(event.target) &&
//     event.target !== button
//   ) {
//     modal.style.display = "none";
//   }
// });
