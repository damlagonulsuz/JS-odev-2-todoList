// ekle butonuna tıklandığında yeni liste ögesi oluşturuldu
function newElement() {
    let li = document.createElement('li');
    let inputValue = document.querySelector('#task').value;
    let text = document.createTextNode(inputValue);

    li.appendChild(text);
    
   //input boş mu dolumu kontrol edilip alert verildi
    if (inputValue === "" || inputValue === " " || inputValue === "  " || inputValue === "    " || inputValue === "     ") {
        alert("Listeye boş ekleme yapamazsınız!")
    }
    else {
        document.querySelector("#list").appendChild(li);
        alert("Listeye eklendi.")
    }
    document.querySelector("#task").value="";
    
    let span = document.createElement('span');
    let script = document.createElement('script');
    script.setAttribute('src', 'https://cdn.lordicon.com/lusqsztk.js')
    let lordicon = document.createElement('lord-icon')
    lordicon.setAttribute('src', 'https://cdn.lordicon.com/qsloqzpf.json')
    lordicon.setAttribute('trigger', 'hover')
    lordicon.setAttribute('colors', 'primary:#121331')
    lordicon.setAttribute('style', 'width:24px;height:24px')
    
    span.className='closed';
    span.appendChild(lordicon);
    li.appendChild(span);

    for(var i=0; i<close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }

}

// tüm tasklar için silme butonu oluşturma
let trashList = document.getElementsByTagName('li');

for(var i=0; i<trashList.length; i++) {
    let span = document.createElement('span');
    let script = document.createElement('script');
    script.setAttribute('src', 'https://cdn.lordicon.com/lusqsztk.js');
    let lordicon = document.createElement('lord-icon');
    lordicon.setAttribute('src', 'https://cdn.lordicon.com/qsloqzpf.json');
    lordicon.setAttribute('trigger', 'hover');
    lordicon.setAttribute('colors', 'primary:#121331');
    lordicon.setAttribute('style', 'width:24px;height:24px');
    span.className="closed";
    span.appendChild(lordicon);
    trashList[i].appendChild(span);
}

// Kapat butonuna tıklandığında geçerli liste ögesi kaldırıldı
let close = document.getElementsByClassName('closed');

for(var i=0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

// Liste ögesine tıklandığında yapıldı işaretlendi
let list =document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if(ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked')
    }
}, false)


