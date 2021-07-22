const itens = document.querySelectorAll('.itens')

itens.forEach( (item) => {

    item.addEventListener('click', () => {
       if(item.style.textDecoration == ''){ 
         item.style.textDecoration = 'line-through'
         item.style.backgroundColor = '#ccc'
        } else {
         item.style.textDecoration = ''
         item.style.backgroundColor = '#fff'
        }
   })
})