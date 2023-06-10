import React from 'react'
import { Route, Routes } from 'react-router-dom';
import UploadingPage from './Components/UploadingPage';
import HouseDetails from './Components/HouseDetails'

function App() {


  return (
    <>
      <h1 className='main-title'>Welcome to House Task!</h1>
      <Routes>
        <Route path="/" element={<UploadingPage />} />
        <Route path="/houses/:id" element={<HouseDetails />} />
      </Routes>
    </>
  )
}
export default App