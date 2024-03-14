import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Homepage from './components/Homepage';
import { Outlet, Route, Routes } from 'react-router-dom';
import Estate from './components/case_studies/RealEstates/Estate';
import styled from '@emotion/styled';
import DeathTracker from './components/case_studies/DeathTracker';
import './style.scss'

function App() {
  const AppContainer = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  `

  return (
    <AppContainer>
      <Navbar/>
      <Outlet style={{flex: 1, minHeight: '100%'}}/>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/real-estate" element={<Estate />}/>
        <Route path="/estate" element={<Estate />}/>
        <Route path="/death-tracker" element={<DeathTracker />}/>
      </Routes>

      <Footer style={{marginTop: 'auto'}}/>

  </AppContainer>
  );
}

export default App;
