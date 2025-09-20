import React, { use } from 'react';
import Bottle from './bottle/bottle';

const Bottles = ({bottlePromise}) => {
    const bottleCome = use(bottlePromise)
    console.log(bottleCome);
    
    return (
        <div>
            <h3>Bottles are {bottleCome.length}</h3>
            {
                bottleCome.map(bottle => <Bottle key={bottle.id} bottle={bottle}></Bottle>)
            }
        </div>
    );
};

export default Bottles;