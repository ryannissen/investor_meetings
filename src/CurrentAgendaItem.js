//import { useState, useEffect }  from 'react';

function CurrentAgendaItem(currentItem) {

    //const [item, setItem] = useState([]);

    const item = currentItem.item;

    return (
        <div>
            <h1>Current Item</h1>
            <p>Title: {item.title}</p>
            <p>Title: {item.timeestimate}</p>
            <p>Title: {item.description}</p>
        </div>
    )


}

export default CurrentAgendaItem;