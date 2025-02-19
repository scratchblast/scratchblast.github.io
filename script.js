function extractProjectID(url) {
    const match = url.match(/projects\/(\d+)/);
    return match ? match[1] : null;
}

function loadProject() {
    const input = document.getElementById("scratch-url").value;
    const projectId = extractProjectID(input);

    if (!projectId) {
        alert("Invalid Scratch project URL!");
        return;
    }

    const playerContainer = document.getElementById("player-container");
    playerContainer.innerHTML = ""; // Clear previous project

    const stage = new P.player.Stage();
    stage.loadProjectId(projectId).then(() => {
        stage.start();
        playerContainer.appendChild(stage.root);
    }).catch(error => {
        alert("Error loading project: " + error.message);
    });
}
