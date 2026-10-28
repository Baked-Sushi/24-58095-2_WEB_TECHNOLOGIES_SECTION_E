window.onload = function() {
    let studentName = localStorage.getItem("studentName");
    let events = JSON.parse(localStorage.getItem("events")) || [];
    let summaryDiv = document.getElementById("summary");

    let content = "";
    content += "<strong>Name:</strong> " + studentName + "<br><br>";
    content += "<strong>Events:</strong><br>";
    
    for (let i = 0; i < events.length; i++) {
        content += events[i] + "<br>";
    }
    
    let totalFee = events.length * 150;
    content += "<br><strong>Total Fee:</strong> " + totalFee + " Taka";

    summaryDiv.innerHTML = content;
};

function goBack() {
    window.location.href = "index.html";
}
