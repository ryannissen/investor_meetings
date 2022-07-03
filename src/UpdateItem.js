import { useState } from 'react';

function UpdateItem({currentItem, itemUpdated, updateAgendaItem}) {

    const [formValues, setFormvalues] = useState({
        title: currentItem.title,
        timeestimate: currentItem.timeestimate,
        description: currentItem.description
    })

    function submitForm(evt) {
        evt.preventDefault();
        itemUpdated();
        updateAgendaItem(formValues);
    };

    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormvalues(data => ({
            ...data,
            [name]: value
        }));
    }

    return (
        <form onSubmit={submitForm}>
            <label htmlFor="title">Title:</label>
            <input
                id="title"
                name="title"
                value={formValues.title}
                onChange={handleChange}
            />
            <br />
            <label htmlFor="timeestimate">Time Estimate:</label>
            <input
                id="timeestimate"
                name="timeestimate"
                value={formValues.timeestimate}
                onChange={handleChange}
            />
            <br />
            <label htmlFor="description">Description:</label>
            <input
                id="description"
                name="description"
                value={formValues.description}
                onChange={handleChange}
            />
            <br />
            <button>Save Changes</button>
        </form>
    )

}

export default UpdateItem;