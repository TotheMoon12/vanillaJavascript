const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput = toDoForm.querySelector("input");
toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

let toDos = [];
let count = 0;
function deleteToDos(event)
{
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);

    const cleanToDos = toDos.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);
    })
    toDos = cleanToDos;
    saveToDos();
}


function saveToDos()
{
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
    // localstorage는 모든 것을 string을 저장하려고한다. 그래서 object를 string으로 바꿔줘야 한다.
}

function paintToDo(text)
{
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    const span  = document.createElement("span");
    span.innerText = text;
    // const newId = toDos.length + 1;
    const newId = ++count;

    delBtn.addEventListener("click", deleteToDos);

    li.appendChild(delBtn);
    li.appendChild(span); // element의 자식으로 다른 태그를 집어 넣는 함수
    toDoList.appendChild(li);
    li.id = newId;

    const toDoObj = {
        text : text,
        id : newId
    };

    toDos.push(toDoObj);
    saveToDos();
}

function handleSumbit(event)
{
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos()
{
    const toDos = localStorage.getItem(TODOS_LS);
    if(toDos !== null)
    {
        const loadedToDos = localStorage.getItem(TODOS_LS);
        if(loadedToDos !== null)
        {
            const parsedToDos = JSON.parse(loadedToDos);
            parsedToDos.forEach(function(toDo) {
                paintToDo(toDo.text);
            });
        }
    }
}

function init()
{
    loadToDos();
    toDoForm.addEventListener("submit",handleSumbit);
}

init();