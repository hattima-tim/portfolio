let modalOpened = false;

range.oninput = () => {
  const windowSize = window.screen.availWidth;

  document.body.style.setProperty("--pos", range.value + "%");

  const rangeValueConditionForSmallScreen =
    windowSize < 400
      ? Number(range.value) >= 20
      : windowSize < 600
      ? Number(range.value) >= 50
      : Number(range.value) >= 70;

  if (
    modalOpened
      ? windowSize < 900
        ? rangeValueConditionForSmallScreen
        : Number(range.value) >= 86
      : Number(range.value) >= 96
  ) {
    document.body.style.setProperty("--mos", range.value + "%");
  } else {
    document.body.style.setProperty("--mos", "0%");
  }
};

avatar.onclick = (event) => {
  event.preventDefault();

  if (modal.style.display === "none" || modal.style.display === "") {
    modal.style.display = "flex";
    modalOpened = true;
  } else {
    modal.style.display = "none";
    modalOpened = false;
  }
};
