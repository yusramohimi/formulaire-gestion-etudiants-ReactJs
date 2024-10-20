let array = [
    {id:1 , nom: 'a'},
    {id:2 , nom: 'b'},
    {id:3 , nom: 'c'},
    {id:4 , nom: 'd'},
]
let secondArray = [{id:2 , nom:'m'}]


let newArray = array.map(function(item){
    if (item.id === secondArray[0].id){
        item.nom = secondArray[0].nom
        
    }
    return item
    
})
console.log(newArray)