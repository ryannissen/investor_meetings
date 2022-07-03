

function AgendaList({list, updateCurrentItem}) {

    function selectItem(evt) {
        const id = (evt.target.closest('ul').className).slice(6);
        updateCurrentItem(id);
    };

    return (
        <div>
            <button>Add Agenda Item</button>
            <h1>Agenda List</h1>
            <p>------------------</p>
        {
            list.map((item) => 
            <ul key={item.id} className={`itemID${item.id}`} onClick={selectItem}>
                <li>Title: {item.title}</li>
                <li>Time Est: {item.timeestimate} min(s)</li>
                <li>Description: {item.description}</li>
            </ul>
            )
        }
        </div>
    )

};

export default AgendaList;