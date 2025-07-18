window.addEventListener("load", () => {
  const width = window.innerWidth;
  if (width < 600) {
    console.log("You are on a mobile device.");
  } else if (width < 1024) {
    console.log("You are on a tablet.");
  } else {
    console.log("You are on a desktop.");
  }
});
