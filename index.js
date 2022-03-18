let addToDoButton = document.getElementById('liveToastBtn');
let todoList = document.getElementById('list');
let removeToDo = document.getElementById('remove');

addToDoButton.addEventListener('click', function() {
    let paragraph = document.createElement('li');
    todoList.appendChild(paragraph);
    paragraph.innerHTML = task.value;
    task.value = ""
    
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = 'line-through';
    })

    paragraph.addEventListener('dbclick', function(){
        todoList.removeChild(paragraph)
    })

    removeToDo.addEventListener('click', function(){
        paragraph.style.display = 'none';
    })
})


let myList = document.getElementsByTagName('LI');
var i;
for (i=0; i<myList.length; i++) {
    let span = document.createElement('SPAN');
    let script = document.createElement('SCRIPT');
    script.setAttribute('src', 'https://cdn.lordicon.com/lusqsztk.js');
    let lordicon = document.createElement('lord-icon');
    lordicon.setAttribute('src', 'https://cdn.lordicon.com/qsloqzpf.json');
    lordicon.setAttribute('trigger', 'hover');
    lordicon.setAttribute('colors', 'primary:#121331');
    lordicon.setAttribute('style', 'width:24px;height:24px');
    span.className="close0";
    span.appendChild(lordicon);
    myList[i].appendChild(span);
}

//üzerine tıklanınca yapıldı işaretleme
let list =document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked')
    }
}, false)