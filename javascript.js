class Book{
    constructor(title,author,pages)
    {
        this.title = title
        this.author = author
        this.pages = pages
        this.status = false
    }

    toggleStatus(){
        this.status = !this.status;
    }
    info(){
        return (this.title + ' By ' + this.author +", " + this.pages + ' pages, status :' + this.status);
    }

}

const myLibrary = [];


let addEvents = () => { 
    const delButtons = document.querySelectorAll('.deleteButton')
    delButtons.forEach(delButton =>{
    delButton.addEventListener('click', e=>{
    console.log('hi');
    myLibrary.splice(delButton.dataset.index,1);
    console.table(myLibrary);
    addBooksToContainer();
    e.stopPropagation();
    })
})
}

let addBook = (title,author,pages) =>{
    myLibrary.push(new Book(title,author,pages));
}
let container= document.querySelector('.container');

let addBooksToContainer = ()=>{
    container.innerHTML = '';
    myLibrary.forEach((book,index)=>{
        const newDiv = document.createElement('div');
        newDiv.classList.add('book-card');
        newDiv.innerHTML = '<h3>'+book.title+'</h3>'+'<p> <strong>Author : </strong>' + book.author+'</p>'+'<p> <strong>Pages : </strong> '+ book.pages+' Pages</p>'+'<div class="bottom-card"><button class="deleteButton" '+'data-index="'+index+'"'+'>&times;<span> Delete</span></button><div class="bottom-left-card"><p>Read </p><label class="switch"><input class="input" '+'data-index="'+index+'"'+'type="checkbox"><span class="slider round"></span></label></div></div>';
        container.appendChild(newDiv);
    })
    addEvents();
}

addBook('Surrounded By Idiots','Reece James & Harry Kane',217);
addBook('Moon Around My House' , 'Lionel Messi', 121);
addBook('Cristiano Ronaldo' ,'CR7', 13);

addBooksToContainer();



const openModalButton = document.querySelector('.addBook');
const closeModalButton = document.querySelector('.close-modal');
const overlay = document.getElementById('overlay')
const modal = document.querySelector('.modal')


let closeModal = () =>{
    modal.classList.remove('active')
    overlay.classList.remove('active')
}
openModalButton.addEventListener('click', e=>{
    modal.classList.add('active')
    overlay.classList.add('active')
})
closeModalButton.addEventListener('click', e=>{
    closeModal()
})

const addBookFromPopUp = document.querySelector('.add-book-modal')

addBookFromPopUp.addEventListener('click', e=>{
    e.preventDefault();
    addBook(document.getElementById('title').value,document.getElementById('author').value, document.getElementById('pages').value);
    addBooksToContainer();
    document.getElementById('title').value = ''
    document.getElementById('author').value =''
     document.getElementById('pages').value =''
    closeModal();
    
});

const closeButton = document.querySelector('.Close')

closeButton.addEventListener('click', e=>{
    e.preventDefault();
    closeModal();
    
});


const inputs = document.querySelectorAll('.input');


inputs.forEach( input=>{
    input.addEventListener('change',function(){
        if(this.checked || true) {
            myLibrary[this.dataset.index].toggleStatus();
        }
});
});

