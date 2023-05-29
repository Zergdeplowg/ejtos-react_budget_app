import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget } = useContext(AppContext);
    const setBudget = (value) =>{
        
    };
    return (
        <div className='alert alert-secondary'>
            <span>Budget: £<input
                        required='required'
                        type='number'
                        step='10'
                        max="20000"
                        id='cost'
                        value={budget}
                        style={{ marginLeft: '2rem' , size: 10}}
                        onChange={(event) => setBudget(event.target.value)}>
                        </input></span>
        </div>
    );
};
export default Budget;