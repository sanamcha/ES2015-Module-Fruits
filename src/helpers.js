

//for random item.
const choice = (items) => {
    let i = Math.floor(Math.random() * items.length);
    return items[i];
}

//removes first matching item if exists otherwise returns undefined.
const remove = (items, item) => {
    for (let i=0; i<items.length; i++){
        if(items[i]===item){
            let value=items[i];
            items.splice(i, 1);
            return value;
        }
    }
}

export {choice, remove}