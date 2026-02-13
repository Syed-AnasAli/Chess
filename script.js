let pieces = document.querySelectorAll(".pieces");
let circle = document.querySelectorAll(".circle");
let num;
let random;
let random2;
let square;
let selected;
let click = false;
let counterPiece;
let row;
let col;
let noOfMoves = 0;
let pieceColor = "White";
let counterPieceColor;

pieces.forEach((piece) => {
  piece.addEventListener("click", () => {
    let selected1 = piece.getAttribute("src");
    pieceColor = selected1.slice(9, 14);
    // Turns
    if (pieceColor == "Black" && noOfMoves % 2 == 1) {
    } else if (pieceColor == "White" && noOfMoves % 2 == 0) {
    } else return;
    selected = piece.getAttribute("src");
    circle.forEach((circle) => {
      circle.style.display = "none";
    });
    random = piece.getAttribute("src");
    square = piece.getAttribute("id");
    row = Number(piece.getAttribute("data-row"));
    col = Number(piece.getAttribute("data-col"));
    if (
      random == "./Pieces/Black Pawn.png" ||
      random == "./Pieces/White Pawn.png"
    ) {
      if (random === "./Pieces/White Pawn.png") {
        showCircle(row + 1, col);
        pawnCaptures(row + 1, col + 1);
        pawnCaptures(row + 1, col - 1);

        if (row === 2) {
          showCircle(row + 2, col);
        }
      } else {
        showCircle(row - 1, col);
        pawnCaptures(row - 1, col - 1);
        pawnCaptures(row - 1, col + 1);

        if (row === 7) {
          showCircle(row - 2, col);
        }
      }
    } else if (
      random == "./Pieces/Black Knight.png" ||
      random == "./Pieces/White Knight.png"
    ) {
      showCircle(row + 1, col + 2);
      showCircle(row + 2, col + 1);
      showCircle(row - 1, col - 2);
      showCircle(row - 2, col - 1);
      showCircle(row + 2, col - 1);
      showCircle(row + 1, col - 2);
      showCircle(row - 2, col + 1);
      showCircle(row - 1, col + 2);
    } else if (
      random == "./Pieces/Black Bishop.png" ||
      random == "./Pieces/White Bishop.png"
    ) {
      slide(row, col, 1, 1);
      slide(row, col, 1, -1);
      slide(row, col, -1, 1);
      slide(row, col, -1, -1);
    } else if (
      random == "./Pieces/Black Rook.png" ||
      random == "./Pieces/White Rook.png"
    ) {
      slide(row, col, 1, 0);
      slide(row, col, -1, 0);
      slide(row, col, 0, 1);
      slide(row, col, 0, -1);
    } else if (
      random == "./Pieces/Black Queen.png" ||
      random == "./Pieces/White Queen.png"
    ) {
      slide(row, col, 1, 1);
      slide(row, col, 1, -1);
      slide(row, col, -1, 1);
      slide(row, col, -1, -1);
      slide(row, col, 1, 0);
      slide(row, col, -1, 0);
      slide(row, col, 0, 1);
      slide(row, col, 0, -1);
    } else if (
      random == "./Pieces/Black King.png" ||
      random == "./Pieces/White King.png"
    ) {
      showCircle(row + 1, col + 1);
      showCircle(row + 1, col - 1);
      showCircle(row - 1, col - 1);
      showCircle(row - 1, col + 1);
      showCircle(row, col + 1);
      showCircle(row + 1, col);
      showCircle(row - 1, col);
      showCircle(row, col - 1);
    }
    click = true;
  });
});

function pawnCaptures(r, c) {
  if (r > 8 || r < 1 || c > 8 || c < 1) {
    return;
  }
  const circle = document.querySelector(
    `.circle[data-row="${r}"][data-col="${c}"]`,
  );
  try {
    counterPiece = document.querySelector(
      `.pieces[data-row="${r}"][data-col="${c}"]`,
    );
    counterPieceColor = counterPiece.getAttribute("src").slice(9, 14);
    if (pieceColor == counterPieceColor) {
      return 0;
    } else if (counterPiece.getAttribute("src") == "") {
    } else {
      circle.style.width = "70px";
      circle.style.border = "10px solid #535353";
      circle.style.backgroundColor = "transparent";
      circle.style.display = "block";
      return;
    }
  } catch {}
}

function showCircle(r, c) {
  if (r > 8 || r < 1 || c > 8 || c < 1) {
    return;
  }
  pieceColor = random.slice(9, 14);
  const circle = document.querySelector(
    `.circle[data-row="${r}"][data-col="${c}"]`,
  );
  random2 = random;
  try {
    counterPiece = document.querySelector(
      `.pieces[data-row="${r}"][data-col="${c}"]`,
    );
    counterPieceColor = counterPiece.getAttribute("src").slice(9, 14);
    if (pieceColor == counterPieceColor) {
      return 0;
    } else if (counterPiece.getAttribute("src") == "") {
    } else {
      //Prevents going to Counter Piece if the piece is Pawn
      if (
        random2 == "./Pieces/White Pawn.png" ||
        random2 == "./Pieces/Black Pawn.png"
      ) {
        return;
      }
      circle.style.width = "70px";
      circle.style.border = "10px solid #535353";
      circle.style.backgroundColor = "transparent";
      circle.style.display = "block";
      return;
    }
  } catch {}

  circle.style.display = "block";
  return 1;
}

function slide(r, c, dr, dc) {
  r += dr;
  c += dc;

  if (r > 8 || r < 1 || c > 8 || c < 1) return;

  let val = showCircle(r, c);
  if (val == 1) slide(r, c, dr, dc);
}

//Pieces Movement and capturing

circle.forEach((circleEl) => {
  circleEl.addEventListener("click", () => {
    noOfMoves += 1;
    r = circleEl.getAttribute("data-row");
    c = circleEl.getAttribute("data-col");
    const ogSquare = document
      .querySelector(`.pieces[data-row="${row}"][data-col="${col}"]`)
      .setAttribute("src", "");
    const targetSquare = document.querySelector(
      `.pieces[data-row="${r}"][data-col="${c}"]`,
    );
    targetSquare.setAttribute("src", selected);
    if (
      random == "./Pieces/Black Pawn.png" ||
      random == "./Pieces/White Pawn.png"
    ) {
      targetSquare.className = "";
      targetSquare.classList.add("pawn", "pieces");
    } else if (
      random == "./Pieces/Black King.png" ||
      random == "./Pieces/White King.png"
    ) {
      targetSquare.className = "";
      targetSquare.classList.add("king", "pieces");
    } else if (
      random == "./Pieces/Black Rook.png" ||
      random == "./Pieces/White Rook.png"
    ) {
      targetSquare.className = "";
      targetSquare.classList.add("rook", "pieces");
    } else {
      targetSquare.className = "";
      targetSquare.classList.add("pieces");
    }
  });
});

//Reseting Circle styles

circle.forEach((cir) => {
  cir.addEventListener("click", () => {
    circle.forEach((c) => {
      c.style.width = "27px";
      c.style.border = "";
      c.style.backgroundColor = "#535353";
      c.style.display = "none";
    });
  });
});
