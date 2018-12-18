document.getElementById("tlacitko1").onclick = function() {
  alertovat("tak");
};
document.getElementById("tlacitko2").onclick = function() {
  alertovat("jinak");
};
function alertovat(vyber) {
  switch (vyber) {
    case "tak":
      alert("kliknul jsi tak");
      break;
    case "jinak":
      alert("kliknul jsi jinak");
      break;
  }
}
