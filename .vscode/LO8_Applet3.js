class DataLogger {
    constructor(buttonId, cardContainerId, clearButtonId, logCountId) {
        this.logButton = document.getElementById(buttonId);
        this.cardContainer = document.getElementById(cardContainerId);
        this.clearButton = document.getElementById(clearButtonId);
        this.logCountElement = document.getElementById(logCountId);
        this.loggedData = [];

        this.logButton.addEventListener('click', () => this.logData());
        this.clearButton.addEventListener('click', () => this.clearLogs());
    }
    // Logs the current timestamp and updates the display
    logData() {
        const timestamp = new Date().toLocaleString();
        this.loggedData.push(timestamp);
        this.updateCardContainer();
    }
    // Clears all logged data and updates the display
    clearLogs() {
        this.loggedData = [];
        this.updateCardContainer();
    }
    // Updates the card container with logged data
    updateCardContainer() {
        this.cardContainer.innerHTML = '';

        this.loggedData.forEach(data => {

            const card = document.createElement('div');
            card.className = 'card mb-2';
            card.innerHTML = `
                <div class="card-body">
                    <h5 class="card-title">Logged Data</h5>
                    <p class="card-text">${data}</p>
                </div>
            `;
            this.cardContainer.appendChild(card);
        });

        this.displayLogCount();
    }


}