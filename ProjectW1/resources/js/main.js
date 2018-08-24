function init() {
 var elem = document.getElementById('app-4')
 elem.style.display = 'none'

 Tabletop.init({
   key: 'https://docs.google.com/spreadsheets/d/13EyQnXAngwysDCYHoEow8XwXMAaPHhkvcEMZZBxWEBs/pubhtml',
   //key: 'https://docs.google.com/spreadsheets/d/14GTxRdrZgGe2sLrxX-KErQnWuNR2St25qgJHZXLNrhk/pubhtml',
   callback: function (tabletopData, tabletop) {
     console.debug(tabletopData)
     elem.style.display = 'block'

     var app4 = new Vue({
       el: '#app-4',
       data: {
         list: tabletopData,
       }
     })
   },
   simpleSheet: true
 })
}

window.addEventListener('DOMContentLoaded', init)


