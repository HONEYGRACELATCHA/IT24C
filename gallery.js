class AppletCard {
    constructor(title, description, link) {
        this.title = title;
        this.description = description;
        this.link = link;
    }

    createCard() {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'card applet-card';
        cardDiv.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${this.title}</h5>
                <p class="card-text">${this.description}</p>
                <a href="${this.link}" class="btn btn-primary applet-btn" style="">Go to Applet</a>
            </div>
        `;
        return cardDiv;
    }
}
class AppletRenderer {
    constructor(containerId, searchInputId) {
        this.container = document.getElementById(containerId);

        //
        this.searchInput = document.getElementById(searchInputId);
        this.appletData = [];
        this.filteredData = [];
        this.searchInput.addEventListener('input', () => this.filterApplets());
    }
}