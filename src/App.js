
import './App.css';

import { useState, useEffect }  from 'react';

import AgendaList from "./AgendaList";
import CurrentAgendaItem from "./CurrentAgendaItem";

import SurfboardAPI from './api';

function App() {

  const [agendaList, setAgendaList] = useState([]);
  const [currentItem, setCurrentItem] = useState([]);

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

  // useEffect(function getCurrentItemOnLoad() {
  //   async function currentItemOnLoad() {
  //     try {
  //       setCurrentItem(agendaList[0])
  //     } catch {
  //       console.log("Cannot set current item");
  //     }
  //   }
  //   if (agendaList.length > 0) {
  //     currentItemOnLoad()
  //   }
  // }, [agendaList]);

  function updateCurrentItem(id) {
    setCurrentItem(agendaList[id - 1])
  }

  if (agendaList.length < 1){
    return <h1>Loading Surfboard Meeting App</h1>
  };

  return (
    <div className="App">
      <div className="AppContainer">
        <div className="AppHeader">
          <h1>Surfboard Investor Meeting</h1>
        </div>
        <div className="AppAgendaList">
          <AgendaList list={agendaList} updateCurrentItem={updateCurrentItem}/>
        </div>
        <div className="AppCurrentItem">
          <CurrentAgendaItem  item={currentItem} />
        </div>

      </div>
    </div>
  );
}

export default App;
