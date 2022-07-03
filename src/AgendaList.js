import { useState } from 'react';

import AddItem from './AddItem';

function AgendaList({ list, updateCurrentItem, addAgendaItem }) {

    const [isAddingNew, setIsAddingNew] = useState(false);

    function selectItem(evt) {
        const id = (evt.target.closest('ul').className).slice(6);
        updateCurrentItem(id);
    };

    function addingItem() {
        setIsAddingNew(true);
    }

    function addedItem() {
        setIsAddingNew(false);
    }

    function addNewItem(formValues) {
        addAgendaItem(formValues);
    }

    console.log(list);

    return (
        <div>
            {isAddingNew ?
                <AddItem addedItem={addedItem} addAgendaItem={addNewItem} />
                :
                <button onClick={addingItem}>Add Agenda Item</button>
            }
            <h1>Agenda List</h1>
            <p>----------------------</p>
            {
                list.map((item) =>
                    <ul key={item.id} className={`itemID${item.id}`} onClick={selectItem}>
                        <li>Title: {item.title}</li>
                        <li>Time Est: {item.timeestimate} min(s)</li>
                        <li>Description: {item.description}</li>
                        <li>----------------------</li>
                    </ul>
                )
                
            }
        </div>
    )

};

export default AgendaList;