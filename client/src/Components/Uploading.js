import React from 'react';

const Uploading = ({ isUploaded, uploadedHouseId }) => {

    return (
        <div>
            {isUploaded && uploadedHouseId &&
                <p className='subtitle'>Congratulations! House Record Successfully created with id:{uploadedHouseId}.</p>}
            {!isUploaded && <p className='subtitle'>loading...</p>}
            {isUploaded && !uploadedHouseId && <p className='subtitle'>error</p>}
        </div>
    );
};

export default Uploading;