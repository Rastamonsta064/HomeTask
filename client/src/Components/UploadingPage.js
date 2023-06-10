import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from './Form';
import Uploading from './Uploading';
import API_BASE_URL from '../config';
import '../App.css'


const UploadingPage = () => {

    const initialHouseState = { address: "", currentValue: 0, loanAmount: 0 };
    const [house, setHouse] = useState(initialHouseState);
    const [isUploading, setIsUploading] = useState(false);
    const [isUploaded, setIsUploaded] = useState(false);
    const [uploadedHouseId, setUploadedHouseId] = useState();


    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "address": house.address,
            "currentValue": house.currentValue,
            "loanAmount": house.loanAmount
        })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        setIsUploading(true);
        fetch(API_BASE_URL, requestOptions)
            .then(res => res.json())
            .then(data => {
                setUploadedHouseId(data.id);
            })
            .catch(err => console.log(err))
            .finally(() => setIsUploaded(true));
        setHouse(initialHouseState);
    }

    return (
        <div className='page'>
            <Form
                house={house}
                setHouse={setHouse}
                submitHandler={submitHandler}
            />
            {isUploading ?
                <div className='form'>
                    <Uploading
                        isUploaded={isUploaded}
                        uploadedHouseId={uploadedHouseId}
                    />
                    {(isUploaded && !uploadedHouseId) ? <></> :
                        <button className='submit'>
                            <Link
                                to={"/houses/" + uploadedHouseId} >Check Details</Link>
                        </button>}

                </div> :
                <div className='form'>
                    <p className='title'>
                        {"<-- Create new House Record"}
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
    );
};

export default UploadingPage;