// Створити сторінку, що показує нумерований список пісень

let container = document.createElement('div');
container.classList.add("container");

document.body.appendChild(container);

let title = document.createElement('h1');
title.innerText = "Song list";
title.classList.add('mt-2','mb-4','ms-4','text-uppercase','text-info',);
container.appendChild(title);

let playList = [
    {
     author: "LED ZEPPELIN",    
     song:"STAIRWAY TO HEAVEN"    
    },    
    {    
     author: "QUEEN",
     song:"BOHEMIAN RHAPSODY"
    },
    {
     author: "LYNYRD SKYNYRD",
     song:"FREE BIRD"
    },
    {
     author: "DEEP PURPLE",
     song:"SMOKE ON THE WATER"
    },
    {
     author: "JIMI HENDRIX",
     song:"ALL ALONG THE WATCHTOWER"
    },
    {
     author: "AC/DC",
     song:"BACK IN BLACK"
    },
    {
     author: "QUEEN",
     song:"WE WILL ROCK YOU"
    },
    {
     author: "METALLICA",
     song:"ENTER SANDMAN"
    }
    ];

let list = document.createElement('ol');
list.classList.add("list-group","mb-3");
container.appendChild(list);

playList.forEach( item => {
    let listItem = document.createElement("li");
    let wrap = document.createElement('div');
    wrap.classList.add("ms-3", "me-auto");
    listItem.appendChild(wrap);
    let author = document.createElement('div');
    author.classList.add("fw-bold");   
    author.innerText = item.author;
    wrap.appendChild(author);
    let song = document.createElement('div');
    song.classList.add("mb-3")
    song.innerHTML = `&quot;${item.song}&quot;`;
    wrap.appendChild(song);
    list.appendChild(listItem);
});

//Створити HTML-сторінку з кнопкою "Відкрити" і модальним вікном. На модальном вікні повинен бути текст і кнопка "Закрити". Спочатку модальне вікно не відображається. При кліку на кнопку "Відкрити" з'являється модальне вікно, на кнопку "Закрити" — зникає.

function setStyle(el, styles){ 
    for(let prop in styles){
        el.style[prop] = styles[prop];
    }
}

let button = document.createElement('button');
button.classList.add('btn', 'btn-outline-success', 'mt-5');
button.setAttribute("type","button");
button.innerText = "Modal window";
container.appendChild(button);
button.onclick = modal;


function modal(){
    let overlay = document.createElement('div');
    setStyle(overlay, {
        width:'100%',
        height:'100%',
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'rgba(0,0,0,.6)',
        zIndex: '9999',
        position: 'fixed',
        top:'0px',
        left:'0px'
    });

    let modal = document.createElement('div');
    modal.classList.add('window', 'close');
    let modal_header = document.createElement('div');
    modal_header.classList.add('d-flex', 'justify-content-between','p-3', 'align-items-center');
    modal.appendChild(modal_header);
    let modal_title = document.createElement('h3');
    modal_title.innerText = "Modal window";
    modal_header.appendChild(modal_title);

    let btnClose = document.createElement('button');
    btnClose.setAttribute('type','button');
    btnClose.onclick = () => {
        overlay.remove();
    }
    btnClose.innerHTML = '&times;';
    setStyle(btnClose, {
        width: '40px',
        height: '40px',
        border: 'none',
        cursor: 'pointer',
        background: 'none',
        color: 'red',
        fontSize: '32px',
        fontWeight: '700',
    });

    container.appendChild(modal); 

    setStyle(modal, {
        width: '400px',
        height: '300px',
        backgroundColor: '#fff',
        borderRadius: '5px', 
    });

    modal_header.append(btnClose);
    overlay.append(modal);
    document.body.append(overlay);   
}


