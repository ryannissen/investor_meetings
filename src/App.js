
import './App.css';

import { useState, useEffect } from 'react';

import AgendaList from "./AgendaList";
import CurrentAgendaItem from "./CurrentAgendaItem";

import SurfboardAPI from './api';

function App() {

  const [agendaList, setAgendaList] = useState([]);
  const [currentItem, setCurrentItem] = useState([]);

  //loads Agenda List on first load from json.data (shoudl be DB)
  useEffect(function updateAgendaListOnLoad() {
    async function agendaListOnLoad() {
      try {
        const listItems = await SurfboardAPI.getAgendaList();
        setAgendaList(listItems);
        setCurrentItem(listItems[0])
      } catch {
        console.log("Failed API call to get list items");
      }
    }
    agendaListOnLoad();
  }, []);

  //sets current item when selected, function passed to AgendaList comp
  function updateCurrentItem(id) {
    setCurrentItem(agendaList[id - 1])
  }

  //Adds an agenda item
  function addAgendaItem(formDetails) {
    formDetails.id = agendaList.length + 1;
    setAgendaList(currentList => ([
      ...currentList,
      formDetails,
    ]))
  }

  //Deletes an item
  function deleteItem(id) {
    setAgendaList(currentList => (
      currentList.filter(item => item.id !== id)
    ))
    setCurrentItem(agendaList[0])
  }

  //Updates agenda item
  function updateAgendaItem(formDetails) {
    setAgendaList(currentList => (
      currentList.map(item => item.id === formDetails.id ? {
        id: formDetails.id,
        title: formDetails.title,
        description: formDetails.description,
        timeestimate: formDetails.timeestimate
      } : item)
    ))

    setCurrentItem(item => ({
      id: formDetails.id,
      title: formDetails.title,
      description: formDetails.description,
      timeestimate: formDetails.timeestimate
    }))
  }

  if (agendaList.length < 1) {
    return <h1>Loading Surfboard Meeting App</h1>
  };

  return (
    <div className="App">
      <div className="AppContainer">
        <div className="AppHeader">
          <h1>Surfboard Investor Meeting</h1>
        </div>
        <div className="AppAgendaList">
          <AgendaList list={agendaList} updateCurrentItem={updateCurrentItem} addAgendaItem={addAgendaItem} />
        </div>
        <div className="AppCurrentItem">
          <CurrentAgendaItem item={currentItem} updateAgendaItem={updateAgendaItem} deleteItem={deleteItem} />
        </div>

      </div>
    </div>
  );
}

export default App;
