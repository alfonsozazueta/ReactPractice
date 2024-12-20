function List(){
    const fruits = [{id: 1,name: 'apple' , calories: 95}, 
                    {id: 2,name:'orange', calories: 80},                  
                    {id: 3,name: 'mango', calories: 100}]

    const lowCalFruits = fruits.filter( fruits=> fruits.calories <100);

    const listItems = fruits.map(fruit => <li key={fruit.id}>
                                                {fruit.name}: &nbsp;
                                                <b>{fruit.calories}</b></li>);  
    //Alpabetical
    //fruits.sort((a,b)=>a.calories - b.calories);

    return(<ol>{listItems}</ol>);
}

export default List