
import './App.css';

import { useState, useEffect }  from 'react';

import AgendaList from "./AgendaList";
import CurrentAgendaItem from "./CurrentAgendaItem";

import SurfboardAPI from './api';

function App() {

  const [agendaList, setAgendaList] = useState([]);
  const [currentItem, setCurrentItem] = useState([]);

  useEffect(function updateAgendaListOnLoad() {
    async function updateList() {

      try {
        const listItems = await SurfboardAPI.getAgendaList();
        setAgendaList(currentList => ({
          ...currentList,
          listItems
      }))
        setCurrentItem(listItems[0])
      } catch {
        console.log("Failed API call to get list items");
      }
    }
    updateList();
  }, [])

  // useEffect(function getCurrentItemOnLoad() {
  //   async function updateCurrentItem() {
  //     try {
  //       setCurrentItem
  //     } catch {
  //       console.log("something");
  //     }
  //   }
  // })

  if (agendaList.length < 1){
    return <h1>Loading Surfboard Meeting App</h1>
  }

  return (
    <div className="App">
      <div className="AppContainer">
        <div className="AppHeader">
          <h1>Surfboard Investor Meeting</h1>
        </div>
        <div className="AppAgendaList">
          <AgendaList list={agendaList}/>
        </div>
        <div className="AppCurrentItem">
          <CurrentAgendaItem  item={currentItem}/>
        </div>

      </div>
    </div>
  );
}

export default App;
