function testLog(n: string): boolean {
  const x = n.toUpperCase();
  if (x === "ROLL" || x === "UNDO" || x === "NEW") return true;
  const num = Number(n);
  return num >= 2 && num <= 13;
}

function keyCode(x: string): string | false {
  let n: string;
  switch (x) {
    case "1":
      n = "11";
      break;
    case "0":
      n = "10";
      break;
    case "-":
      n = "11";
      break;
    case "=":
      n = "12";
      break;
    case " ":
      n = "ROLL";
      break;
    case "z":
    case "Z":
      n = "UNDO";
      break;
    case "n":
    case "N":
      n = "NEW";
      break;
    default:
      n = x;
      break;
  }
  return testLog(n) ? n : false;
}

export function logKey(event: KeyboardEvent): string | false | null {
  if (!event) return null;
  if (event.key) return keyCode(event.key);
  return null;
}

export function nextPlayer(activePlayer: number, option: string): number {
  switch (option) {
    case "next":
      return activePlayer + 1;
    case "back":
      return activePlayer - 1;
    default:
      return activePlayer;
  }
}

export function resetPlayers(
  oldTotal: number,
  newTotal: number,
  playerArr: string[],
): string[] {
  const arr = [...playerArr];
  if (newTotal < oldTotal) {
    arr.splice(newTotal, oldTotal - newTotal);
  } else if (newTotal > oldTotal) {
    let x = arr.length;
    while (x < newTotal) {
      x++;
      arr.push("Player " + x);
    }
  } else {
    for (let i = 0; i < newTotal; i++) {
      arr[i] = "Player " + (i + 1);
    }
  }
  return arr;
}
