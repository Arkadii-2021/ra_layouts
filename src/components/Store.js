import React from 'react';
import IconSwitch from './IconSwitch';
import CardsView from './CardsView';
import { useState } from 'react';


function Store(props) {
  const [selected, setSelected] = useState('module');
  
  const changes = {
        list: 'cards__window__lists',
        module: 'cards__window__modules'
    }
	
  return (
    <>
	    <IconSwitch icon={selected} changeIcon={(selected) => {setSelected(selected)}}/>
	    <CardsView toggleClass={changes[selected]}/>
    </>
  )
}


export default Store