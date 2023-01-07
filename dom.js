console.dir(document);
console.log(document.domain);
console.log(document.title);
//items[3].style.backgroundcolor='green';
var headerTitle=document.getElementById('header-title');
var header=document.getElementById('main-header');
header.style.borderBottom='solid 3px #000';
var items=document.getElementsByClassName('list-group-item');
console.log(items);
//console.log(items[3]); 
items[3].style.backgroundColor = 'green';
for(var i=0;i<items.length;i++)
{
    items[i].style.fontWeight ='bold';
}
