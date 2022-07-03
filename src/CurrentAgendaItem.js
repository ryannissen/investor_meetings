//import { useState, useEffect }  from 'react';

function CurrentAgendaItem(currentItem) {

    //const [item, setItem] = useState([]);

    const item = currentItem.item

    return (
        <div>
            <h1>Current Item</h1>
            <p><i>Click item in list to change to current</i></p>
            <p>Title: {item.title}</p>
            <p>Time Estimate: {item.timeestimate}</p>
            <p>Description: {item.description}</p>
        </div>
    )


}

export default CurrentAgendaItem;