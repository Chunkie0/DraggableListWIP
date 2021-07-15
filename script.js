const toDo = (order) => {
    let orderLength = document.getElementById("orderLength").value;
    const newDiv = document.createElement('div');
    newDiv.classList.add("boxStyle");
    const newList = document.createElement(order);
    newList.classList.add("listStyle")
    let i = 0
    while (i < orderLength) {
        const li = document.createElement('li');
        li.append(document.createElement('textarea'))
        newList.append(li)
        i++;
    }
    const divHeaderForDrag = document.createElement('div')
    divHeaderForDrag.setAttribute("id", "header")
    newDiv.append(divHeaderForDrag)
    makeDIVDraggable(newDiv);
    newDiv.append(newList)
    
    const button = document.createElement('button');
    button.append('X');
    button.addEventListener('click', ()=>remove(newDiv))
    newDiv.append(button);
    return document.body.append(newDiv);
}


const makeABox = () => {
    let selection = document.getElementById("selection").value;
    if (selection == "ul") {
        toDo('ul')
    } else {
        toDo('ol')
    }
}

const makeDIVDraggable = (element) => {

    let pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
    if (document.getElementById(element.id + "header")) {
        document.getElementById(element.id + "header").onmousedown = dragMouseDown;
    } else {
        element.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        element.style.top = (element.offsetTop - pos2) + "px";
        element.style.left = (element.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

const remove = (div) => {
    div.remove()
}