const xPlayer = 'x';
const zeroPlayer = '0';

let currentPlayer = xPlayer;

function togglePlayer() {
  currentPlayer = currentPlayer == xPlayer ? zeroPlayer : xPlayer;
}
