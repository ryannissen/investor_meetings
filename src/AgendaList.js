

function AgendaList({list}) {

    return (
        <div>
            <button>Add Agenda Item</button>
            <h1>Agenda List</h1>
            <p>------------------</p>
        {
            list.listItems.map((item) => 
            <div  key={item.id}>
                <p>Title: {item.title}</p>
                <p>Time Est: {item.timeestimate} min(s)</p>
                <p>Description: {item.description}</p>
                <p>------------------</p>
            </div>
            )
        }
        </div>
    )

}

export default AgendaList;