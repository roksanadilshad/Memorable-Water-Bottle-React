import React, { use, useState } from 'react';
import Bottle from './bottle/bottle';
import './Bottles.css'

const Bottles = ({bottlePromise}) => {
    const bottleCome = use(bottlePromise)
    //console.log(bottleCome);
    const [piku, setpiku] = useState([]);
    const handlerBottle = (bottle) =>{
       console.log(bottle);
       
        
    }
    return (
        <div>
            <h3>Bottles are {bottleCome.length}</h3>
            <div className='card-container'>

            {
                bottleCome.map(bottle => <Bottle  handlerBottle={ handlerBottle} key={bottle.id} bottle={bottle}></Bottle>)
            }
            </div>
        </div>
    );
};

export default Bottles;