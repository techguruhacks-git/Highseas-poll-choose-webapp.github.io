const votes = {};
let totalVotes = 0;

function vote(option) {
    votes[option] = (votes[option] || 0) + 1;
    totalVotes++;
    displayResults();
}

function displayResults() {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '<h3>Current Results:</h3>';
    Object.keys(votes).forEach(option => {
        const count = votes[option];
        const percentage = ((count / totalVotes) * 100).toFixed(1);
        resultsDiv.innerHTML += `<p>${option}: ${count} vote(s) (${percentage}%)</p>`;
        resultsDiv.innerHTML += `<div class="progress-bar"><div style="width: ${percentage}%">${percentage}%</div></div>`;
    });
}

function resetVotes() {
    Object.keys(votes).forEach(option => delete votes[option]);
    totalVotes = 0;
    displayResults();
}

function randomizeVotes() {
    const options = ['Show and Tell', 'High Seas Jam', 'Chess Night', 'Tetris Night'];
    for (let i = 0; i < 50; i++) {
        const randomOption = options[Math.floor(Math.random() * options.length)];
        vote(randomOption);
    }
}

window.onload = randomizeVotes;

