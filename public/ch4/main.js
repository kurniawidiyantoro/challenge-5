let isGameFinished = false;

// pilihan computer

function pilihanComputer() {
  const comp = Math.random();
  if (comp < 0.34) {
    const bgBatu = document.querySelector(".computer .batu");
    bgBatu.style.backgroundColor = "#c4c4c4";
    return "batu";
  }
  if (comp >= 0.34 && comp < 0.67) {
    const bgGunting = document.querySelector(".computer .gunting");
    bgGunting.style.backgroundColor = "#c4c4c4";
    return "gunting";
  }
  if (comp >= 0.67) {
    const bgKertas = document.querySelector(".computer .kertas");
    bgKertas.style.backgroundColor = "#c4c4c4";
    return "kertas";
  }
}
// akhir pilihan computer

// peraturan
function hasilPermainan(player, comp) {
  if (player == comp) return "SERI";
  if (player == "batu") return comp == "gunting" ? "MENANG" : "KALAH";
  if (player == "gunting") return comp == "batu" ? "KALAH" : "MENANG";
  if (player == "kertas") return comp == "gunting" ? "KALAH" : "MENANG";
}
// akhir peraturan

// function afterClick
function afterClick(goPlay) {
  if (isGameFinished) {
    return;
  }
  let player = goPlay.className;
  const computer = pilihanComputer();
  const hasil = hasilPermainan(player, computer);
  const info = document.querySelector(".versus span");
  const playerAnimation = document.querySelectorAll(".player img");
  isGameFinished = true;

  info.innerHTML = hasil;
  info.style.fontSize = "200%";
  info.style.padding = "25%";
  info.style.color = "white";
  info.style.backgroundColor = "#4C9654";
  info.style.borderRadius = "15%";
  goPlay.style.backgroundColor = "#c4c4c4";

  playerAnimation.forEach(function (e) {
    e.style.animation = "none";
  });

  console.log(player);
  console.log(computer);
  console.log(hasil);
}

// pilihan player batu
const playerBatu = document.querySelector(".player .batu");
playerBatu.addEventListener("click", function () {
  afterClick(playerBatu);
});

// pilihan player kertas
const playerKertas = document.querySelector(".player .kertas");
playerKertas.addEventListener("click", function () {
  afterClick(playerKertas);
});

// pilihan player gunting
const playerGunting = document.querySelector(".player .gunting");
playerGunting.addEventListener("click", function () {
  afterClick(playerGunting);
});

// refresh
const refreshPage = document.querySelector(".versus .refresh");
refreshPage.addEventListener("click", function () {
  document.location.reload(true);
});
