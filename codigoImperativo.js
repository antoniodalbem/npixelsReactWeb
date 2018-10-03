const people = [{name: 'Thiago', idade : 15}, 
                {name: 'Messi', idade : 25},
                {name: 'CR7', idade : 35},
                {name: 'Neymar', idade : 45}]
                
                
const alterPeople = people.map(p => {
    return {name: p.name + "!", idade: p.idade}
})


console.log (alterPeople)