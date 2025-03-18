function showDate() {
    const today = new Date();
    const dateResult = document.getElementById("dateResult");
    const formattedDate = `${today.getDate()}/${
        today.toLocaleString('default', { month: 'long' })
    }/${today.getFullYear()}`;
    dateResult.textContent = formattedDate;
}

function showTime() {
    const now = new Date();
    document.getElementById("timeResult").textContent = now.toString();
}
