const body = document.querySelector("body");

const IMG_NUMBER = 5;

function paintImage(imgNumber)
{
    const image = new Image();
    image.src = `images/${imgNumber}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image); // 부모노드의 첫번째 자식으로 넣기
    // body.appenedChild(image); // 부모노드의 마지막 끝에 넣기
}

function genRandom()
{
    const number = Math.floor(Math.random() * IMG_NUMBER); // Math.floor => 내림 함수
    return number;
}

function init()
{
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();