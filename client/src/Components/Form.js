import React from 'react';
import '../App.css'

const Form = ({ setHouse, submitHandler, house }) => {

    return (
        <form className='form' onSubmit={submitHandler}>
            <h2 className='title'>Fill House Info</h2>
            <div className="subtitle">All fields are required!</div>
            <div className='input-container ic1'>
                <input
                    id="address"
                    required
                    autoComplete='off'
                    type="text"
                    className='input'
                    value={house.address}
                    onChange={(e) => setHouse({ ...house, address: e.target.value })}
                />
                <div className="cut"></div>
                <label htmlFor="firstname" className="placeholder">Address</label>
            </div>
            <div className='input-container ic2'>
                <input
                    id="currentValue"
                    required
                    min="0"
                    type="number"
                    className='input'
                    value={house.currentValue}
                    onChange={(e) => setHouse({ ...house, currentValue: e.target.value })}
                />
                <div className="cut"></div>
                <label htmlFor="currentValue" className="placeholder">Current Value</label>
            </div>
            <div className='input-container ic2' >
            <input
            id="loanAmount"
                required
                min="0"
                type="number"
                className='input'
                value={house.loanAmount}
                onChange={(e) => setHouse({ ...house, loanAmount: e.target.value })}
            />
            <div className="cut"></div>
                <label htmlFor="loanAmount" className="placeholder">Loan Amount</label>
            </div>
            <input
                type="submit"
                value="Submit"
                className='submit'
            />
        </form>
    );
};

export default Form;