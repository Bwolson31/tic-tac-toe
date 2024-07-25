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

});
