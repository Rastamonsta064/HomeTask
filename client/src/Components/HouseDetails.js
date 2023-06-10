import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Form from './Form';
import Uploading from './Uploading';
import API_BASE_URL from '../config';
import '../App.css'


const HouseDetails = () => {

    const { id } = useParams();
    const initialHouseState = { id: 0, address: "", currentValue: 0, loanAmount: 0 };
    const [houseRecord, setHouseRecord] = useState(initialHouseState);
    const [isEditing, setIsEditing] = useState(false);
    const [isUpdating, setIsUpdating] = useState(false);
    const [isUpdated, setIsUpdated] = useState(false);


    const getRequestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    }
    const putRequestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "address": houseRecord.address,
            "currentValue": houseRecord.currentValue,
            "loanAmount": houseRecord.loanAmount
        })
    }

    useEffect(() => {
        fetch(API_BASE_URL + "?id=" + id, getRequestOptions)
            .then(res => res.json())
            .then(houseRecord => setHouseRecord(houseRecord))
            .catch(err => console.log(err));

    }, [])

    const submitHandler = (event) => {
        event.preventDefault();
        setIsUpdating(true);
        setIsEditing(!isEditing);
        fetch(API_BASE_URL + "?id=" + id, putRequestOptions)
            .then(res => res.json())
            .then(houseRecord => {
                setIsUpdated(true);
                setHouseRecord(houseRecord);
            })
            .catch(err => console.log(err));
    }

    return (
        <div className='page'>
            <div className='form'>
                {houseRecord.id &&
                    <div>
                        <p className='subtitle'>ID:{houseRecord.id}</p>
                        <p className='subtitle'>Address:{houseRecord.address}</p>
                        <p className='subtitle'>Current Value:{houseRecord.currentValue}</p>
                        <p className='subtitle'>Loan Amount:{houseRecord.loanAmount}</p>
                        <p className='subtitle'>Risk:{houseRecord.risk}</p>
                    </div>
                }

                {isUpdating &&
                    <Uploading
                        isUploaded={isUpdated}
                        uploadedHouseId={houseRecord.id}
                    />
                }
                <button
                    className='submit'
                >
                    <Link to="/" >Upload new house record</Link>
                </button>
                <button
                    className='submit'
                    onClick={() => setIsEditing(!isEditing)} >
                    {isEditing ? "Cancel Editing" : "Edit House Record"}
                </button>
            </div>
            <div>
                {isEditing ?
                    <Form
                        house={houseRecord}
                        setHouse={setHouseRecord}
                        submitHandler={submitHandler}
                    /> :
                    <div className='form'>
                        <p className='title'>
                            House Details
                        </p>
                        <p className='subtitle'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                }

            </div>
        </div>
    );
};

export default HouseDetails;