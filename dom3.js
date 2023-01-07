var item = document.querySelector('.list-group-item');
 
var secoundItem = document.querySelector('.list-group-item:nth-Child(2)');
secoundItem.style.backgroundColor = 'green';


var title = document.querySelectorAll('.title');
console.log(title);
title[0].textContent= 'Hello';
var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');
for(var i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor = '#f4f4f4';
    even[i].style.backgroundColor = '#ccc';
}
