
const createTeamBtn = document.getElementById("createTeamBtn");
const teamModal = document.getElementById("teamModal");
const closeModal = document.getElementById("closeModal");

createTeamBtn.addEventListener("click", function(event) {
    event.preventDefault();
    teamModal.style.display = "flex";
});

closeModal.addEventListener("click", function() {
    teamModal.style.display = "none";
});

teamModal.addEventListener("click", function(event) {
    if (event.target === teamModal) {
        teamModal.style.display = "none";
    }
});

const hackathonMode = document.getElementById("hackathonMode");
const venueField = document.getElementById("venueField");

hackathonMode.addEventListener("change", function() {

    if (hackathonMode.value === "Offline") {
        venueField.style.display = "block";
    } 
    else {
        venueField.style.display = "none";
    }

});