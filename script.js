function updateTime() {
    const utcTimeElement = document.getElementById("utcTime");

    function refreshTime() {
        const now = new Date();
        utcTimeElement.textContent = now.toUTCString();
    }

    // Update immediately
    refreshTime();

    // Update every second
    setInterval(refreshTime, 1000);
}


updateTime();
