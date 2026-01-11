/* ===============================
   TOOLS ARTICLES
================================ */

const toolsArticles = [
    {
        id: 1,
        icon: '🤖',
        title: 'Best AI Tools to 10x Your Productivity in 2026',
        excerpt: 'A curated list of AI tools that save 20+ hours per week.',
        date: 'Jan 1, 2026',
        readTime: '10 min read',
        content: `
            <h2>Best AI Tools</h2>
            <p>ChatGPT, Jasper AI, MidJourney, Canva Pro, Notion AI, and more.</p>
        `
    },
    {
        id: 2,
        icon: '🛠️',
        title: 'Top Productivity Tools for Online Entrepreneurs',
        excerpt: 'Boost your workflow with essential productivity tools.',
        date: 'Jan 2, 2026',
        readTime: '8 min read',
        content: `
            <h2>Productivity Tools</h2>
            <ul>
                <li>Notion</li>
                <li>Trello</li>
                <li>ClickUp</li>
                <li>Slack</li>
            </ul>
        `
    }
];

/* ===============================
   RESOURCES ARTICLES
================================ */

const resourcesArticles = [
    {
        id: 1,
        icon: '📚',
        title: 'Top 10 Free Learning Resources for Online Entrepreneurs',
        excerpt: 'Learn digital skills for free with these platforms.',
        date: 'Jan 2, 2026',
        readTime: '7 min read',
        content: `
            <h2>Free Learning Resources</h2>
            <ul>
                <li>Coursera</li>
                <li>edX</li>
                <li>HubSpot Academy</li>
                <li>Google Digital Garage</li>
            </ul>
        `
    }
];

/* ===============================
   RENDER FUNCTION
================================ */

function renderArticles(articleArray, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = articleArray.map(article => `
        <div class="article-card">
            <div class="article-image">${article.icon}</div>
            <div class="article-content">
                <div class="article-meta">
                    <span>📅 ${article.date}</span>
                    <span>⏱ ${article.readTime}</span>
                </div>
                <h3>${article.title}</h3>
                <p>${article.excerpt}</p>
            </div>
        </div>
    `).join('');
}

/* ===============================
   PAGE LOAD
================================ */

document.addEventListener('DOMContentLoaded', () => {
    renderArticles(toolsArticles, 'toolsContainer');
    renderArticles(resourcesArticles, 'resourcesContainer');
});



