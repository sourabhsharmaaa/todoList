let btnAdd = document.getElementById('btnAdd')
let btnReset = document.getElementById('btnReset')
let btnSort = document.getElementById('btnSort')
let btnCleanup = document.getElementById('btnCleanup')
let ul = document.querySelector('ul')
let ulList = document.querySelector('#ulList')
let inpTask = document.getElementById('inpTask')
let list = document.querySelector('.list-group-item')

//Adding new items
btnAdd.onclick = function(){
   let li = document.createElement('li')
   li.className = 'list-group-item'
   li.textContent = inpTask.value
   ul.append(li)
   inpTask.value = ''

   //adding  the event functionality to your new items
   li.addEventListener('click',task)
}

//Reset functionality
btnReset.onclick = function(){
    inpTask.value=''
}

//Sorting functionality
btnSort.onclick = function(){
    // let list = document.querySelector('.done')
    // ul.append(list)

    let list = document.querySelector('.done')
    let docFrag = document.createDocumentFragment()
    docFrag.appendChild(list)
    ul.appendChild(docFrag)
}


//Cleanup functionality
btnCleanup.onclick = function(){
// let list=document.getElementsByClassName('done')
// console.log(list.removeChild(list.paren))
//   if(e.target.classList.contains('done')){
//       ul.removeChild(e.target.parentElement)
//       ul.removeChild(ul)
//   }

let list = document.querySelector('.done')
let docFrag = document.createDocumentFragment()
    docFrag.appendChild(list)
    ul.removeChild(docFrag)

}

//Getting all list elements to perform click event
let li = document.getElementsByTagName('li') 
for(let i=0;i<li.length;i++){
    li[i].addEventListener('click',task)
}

//callback/event handler function
function task(event){
    event.target.classList.toggle('done')
}    

// list.addEventListener('click',function(e){
//     console.log(e.target.classList)
// })
