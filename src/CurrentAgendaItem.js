import { useState }  from 'react';

import UpdateItem from './UpdateItem';

function CurrentAgendaItem({item, updateAgendaItem, deleteItem}) {

    const [isUpdating, setIsUpdating] = useState(false);

    function updateItem(){
        setIsUpdating(true);
    };

    function itemUpdated() {
        setIsUpdating(false);
    }

    function updateCurrentItem(formValues){
        formValues.id = item.id;
        updateAgendaItem(formValues)
    }

    function deleteCurrentItem(id) {
        deleteItem(item.id)
    }

    return (
        <div>
            <h1>Current Item</h1>
            <p><i>Click item in list to change to current</i></p>
            <p>Title: {item.title}</p>
            <p>Time Estimate: {item.timeestimate}</p>
            <p>Description: {item.description}</p>
            {
                isUpdating ?
                <div>
                <p><b>Please update the item in the below form</b></p>
                <UpdateItem currentItem={item} itemUpdated={itemUpdated} updateAgendaItem={updateCurrentItem}/>
                </div>
                :
                <div>
                <button onClick={updateItem}>Edit Item</button>
                <br />
                <br />
                <button onClick={deleteCurrentItem}>Delete Item</button>
                </div>
            }
            
        </div>
    )


}

export default CurrentAgendaItem;