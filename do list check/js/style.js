
var button = document.getElementById('button'),
    input  = document.getElementById('input'),
    do_list = document.getElementById('do_list'),
    first_elements = do_list.children[1],
    first_element = document.getElementsByClassName('add_list'),
    para      = document.createElement('p'),
    check  = document.createElement('input'),
    list_add = document.createElement('div');
    


// creat function add 
check.type='checkbox';
check.className='checkbox';
console.log(first_elements);
button.onclick = function(){
    console.log(first_element);
    var note = input.value;
    para.textContent = note;
    list_add.appendChild(check);
    list_add.appendChild(para);
    list_add.classList.add ('list');
    do_list.insertBefore(list_add,first_elements );
   

    
}