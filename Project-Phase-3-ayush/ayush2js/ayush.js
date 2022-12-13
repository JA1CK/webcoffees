
const form = document.querySelector('#form');
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    review();
})


function  review(){

const inputtext = document.querySelector('#txt');
const mybutton = document.querySelector('.btn-list');
const list = document.querySelector('.container ul');
mybutton.addEventListener('click', (e)=>{
    if(inputtext.value!=""){
        const myLi = document.createElement('li');
        myLi.innerHTML = inputtext.value;
        list.appendChild(myLi);

        const myspan = document.createElement('span');
        myspan.innerHTML = 'x';
        myLi.appendChild(myspan);
    }

    const close = document.querySelectorAll('span');
    for(let i =0; i<close.length; i++){
        close[i].addEventListener('click', ()=>{
            close[i].parentElement.style.opacity = 0; 
            setTimeout(()=>{
                close[i].parentElement.style.display = "none";
                close[i].parentElement.remove();
            }, 500);
            
        })
    }
    inputtext.value = "";
});
}
