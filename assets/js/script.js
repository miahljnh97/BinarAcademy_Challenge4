// object declaration
const resultBox = document.getElementById("result-box");
const resultText = document.getElementById("result-text");
const playerBatu = document.getElementById("player-batu");
const playerGunting = document.getElementById("player-gunting");
const playerKertas = document.getElementById("player-kertas");
const comBatu = document.getElementById("com-batu");
const comGunting = document.getElementById("com-gunting");
const comKertas = document.getElementById("com-kertas");

/*
mengolah value(batu, gunting kertas) dari si com yang nanti akan diadu dengan pilihan player 1
*/
function pilihanCom() {
  const pil = Math.floor(Math.random() * 3);
  if (pil === 0) {
    comBatu.style.backgroundColor = "#C4C4C4";
    return "batu";
  } else if (pil === 1) {
    comKertas.style.backgroundColor = "#C4C4C4";
    return "kertas";
  } else {
    comGunting.style.backgroundColor = "#C4C4C4";
    return "gunting";
  }
}

/*check the results*/

function rockPaperScissors(pilPlayer, pilCom) {
  if (pilPlayer === pilCom) {
    return "draw";
  }

  if (pilPlayer === "batu") {
    if (pilCom === "kertas") {
      return "com";
    } else {
      return "player";
    }
  } else if (pilPlayer === "kertas") {
    if (pilCom === "gunting") {
      return "com";
    } else {
      return "player";
    }
  } else {
    if (pilCom === "batu") {
      return "com";
    } else {
      return "player";
    }
  }
}
/*
show result
*/
function showResults(result) {
  resultBox.style.removeProperty("visibility");
  if (result === "draw") {
    resultText.innerText = "DRAW";
    console.log("Hasil Pertandingan = Draw");
  } else if (result === "com") {
    resultText.innerText = "COM\nWIN";
    console.log("Hasil Pertandingan = Com Win");
  } else {
    resultText.innerText = "PLAYER 1\nWIN";
    console.log("Hasil Pertandingan = Player 1 Win");
  }
}

/*
onclick function
*/

function reset() {
  resultBox.style.visibility = "hidden";
  playerBatu.style.removeProperty("background-color");
  playerKertas.style.removeProperty("background-color");
  playerGunting.style.removeProperty("background-color");
  comBatu.style.removeProperty("background-color");
  comKertas.style.removeProperty("background-color");
  comGunting.style.removeProperty("background-color");
}

function Batu() {
  reset();
  playerBatu.style.backgroundColor = "#C4C4C4";
  let player = "batu";
  console.log("Pilihan Player 1 = " + player);
  com = pilihanCom();
  console.log("Pilihan Computer = " + com);
  result = rockPaperScissors(player, com);
  showResults(result);
}

function Kertas() {
  reset();
  playerKertas.style.backgroundColor = "#C4C4C4";
  let player = "kertas";
  console.log("Pilihan Player 1 = " + player);
  com = pilihanCom();
  console.log("Pilihan Computer = " + com);
  result = rockPaperScissors(player, com);
  showResults(result);
}

function Gunting() {
  reset();
  playerGunting.style.backgroundColor = "#C4C4C4";
  let player = "gunting";
  console.log("Pilihan Player 1 = " + player);
  com = pilihanCom();
  console.log("Pilihan Computer = " + com);
  result = rockPaperScissors(player, com);
  showResults(result);
}
