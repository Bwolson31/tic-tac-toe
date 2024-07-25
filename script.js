document.addEventListener("DOMContentLoaded", () => {
    const cells = document.querySelectorAll('.cell');
    let currentPlayer = 'X';

    cells.forEach(cell => {
        cell.addEventListener('click', function() {
            // Only mark the cell if it's empty
            if (this.textContent === '') {
                this.textContent = currentPlayer;
                // Switch player
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        });
    });
    function checkWinner() {
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        return winningCombinations.some(combination => {
            const [a, b, c] = combination;
            return cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent;
        });
    }
});
