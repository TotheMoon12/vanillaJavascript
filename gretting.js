const form = document.querySelector(".js-form"),
input = form.querySelector("input"),
greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
SHOWING_CN = "showing"; // showing className

function saveName(text)
{
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event)
{
    event.preventDefault(); // form에서 event가 발생하면 document까지 올라가 지정된 프로그램으로 올라가게 되어 페이지를 새로고침을 하는데 이 기본동작을 막기 위함.
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",handleSubmit);
}

function paintGreeting(text)
{
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `hello ${text}`;
}

function loadName()
{
    const currentUser = localStorage.getItem(USER_LS);

    if(currentUser === null)
    {
        askForName();
    }
    else
    {
        paintGreeting(currentUser);
    }
}

function init()
{
    loadName();
}

init();