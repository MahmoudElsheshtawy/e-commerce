/* eslint-disable react/jsx-no-undef */
import React, { useState } from 'react';
import CardList from '../components/CardList/CardList';
import Filter from '../components/filter/Filter';
import './App.css';
import Modle from '../components/modle/Modle';
import Button from '../components/layout/Button';
import Adduser from '../components/adduser/Adduser';

// import Form from '../components/layout/Form';

const App = () => {
  const [cardToggle, setCardToggle] = useState(true);
  const [modle,setmodle]=useState(false);
  const [filter, setFilter] = useState('');
  const [state, setState] = useState([
    {
      id: 1,
      name: 'kareem',
      age: 31,
      adrress: 'hadyk el aharm',
      phone: '01010987123',
      type: 'boy',
    },
    {
      id: 2,
      name: 'farah',
      age: 24,
      adrress: 'hadyk el aharm',
      phone: '01010987234',
      type: 'girl',
    },
    {
      id: 3,
      name: 'ahmed',
      age: 24,
      adrress: 'hadyk el aharm',
      phone: '01010987234',
      type: 'boy',
    },
    {
      id: 4,
      name: 'mariam',
      age: 20,
      adrress: 'fayesl',
      phone: '01010932123',
      type: 'girl',
    },
  ]);

const userhandler=(data)=>{
  console.log(data)
}




  const deleteHandler = (e, selectedID) => {
    // const deleteOberation = state.filter((el, idx) => idx !== clickedIdx);
    // setState(deleteOberation);
    setState((prevState) => {
      return prevState.filter((el) => el.id !== selectedID);
    });
  };

  // const toggleHandler = () => {
  // 	setCardToggle(!cardToggle);
  // };

  const filterNames = (name) => {
    setFilter(name);
  };

  const namesHandler = () => {
    if (filter.length !== 0) {
      return state.filter((el) => el.name.includes(filter));
    }
    return state;
  };
  const handlemodle=()=>{
    return setmodle(false)
  }

  return (
    <>
    <div className='mainContainer'>
          <h1>Boys Data</h1>
          {/* Cards */}
                <div style={{display:'flex', alignItems:'center'}}>
                          {/* btn-1 hide and show */}
                          <Button onClick={ () => setCardToggle(!cardToggle)}>
                              {cardToggle ? 'Hide Names' : 'Show Names'} 
                          </Button>
                          {/* 2btn-sign in */}
                          <Button  onClick={() => setmodle(!modle)} style={{cursor:'pointer'}} >Singn in</Button>


                </div>
          {/* Cards */}

          {/* filterNames */}
                <div className={cardToggle ? 'show' : 'hide'}>
                  <Filter filteration={filterNames} />
                  <CardList namesList={namesHandler()} deleteFunc={deleteHandler} />
                </div>
        
    </div>
    <Modle handlemodle={handlemodle} modle={modle}> <Adduser/></Modle>

    </>
  );
};

export default App;
