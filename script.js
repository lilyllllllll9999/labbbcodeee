const correctPassword1 = "beaker";
const correctPassword2 = "microscope";
const correctPassword3 = "petri dish";
const correctPassword4 = "flask";
const correctPassword5 = "machine";
const correctPassword6 = "alcohol lamp";
const correctPassword7 = "test tube";
const destinationURL = "https://app.gather.town/app/WEQwQKxdI9CGkMun/ant%20lab"; // 你的房間網址

function checkPassword() {
    const input = document.getElementById("passwordInput").value.toLowerCase().trim();
    const messageEl = document.getElementById("message");

    if (
        input === correctPassword1 ||
        input === correctPassword2 ||
        input === correctPassword3 ||
        input === correctPassword4 ||
        input === correctPassword5 ||
        input === correctPassword6 ||
        input === correctPassword7
    ) {
        messageEl.innerText = "密碼正確！門已開啟，正在前往...";
        window.location.href = destinationURL; // 在當前頁面導向
    } else {
        messageEl.innerText = "密碼錯誤，請再試一次。";
    }
}