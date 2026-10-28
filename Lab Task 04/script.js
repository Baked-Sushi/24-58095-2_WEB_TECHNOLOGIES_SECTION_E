let events = [];

function addEvent() {
    let eventInput = document.getElementById("event");
    let eventName = eventInput.value.trim();

    if (eventName === "") {
        alert("Please enter an event name.");
        return;
    }

    if (events.length >= 3) {
        alert("You can join a maximum of 3 events.");
        return;
    }

    events.push(eventName);
    eventInput.value = "";
    alert("Event Added");
}

function confirmRegistration() {
    let nameInput = document.getElementById("studentName");
    let studentName = nameInput.value.trim();

    if (studentName === "" || events.length === 0) {
        alert("Please enter your name and add at least one event.");
        return;
    }

    localStorage.setItem("studentName", studentName);
    localStorage.setItem("events", JSON.stringify(events));

    window.location.href = "confirm.html";
}
