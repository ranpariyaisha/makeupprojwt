import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


// import reportWebVitals from './reportWebVitals';
import Layout from "./Layout";
import MakeupForm from './Grocery/makeupform';
import MakeupList from './Grocery/makeuplist';
import ProfitLossPage from './Grocery/ProfitLossPage';
// import ProfitLossDate from './Grocery/ProfitLossDate';
import { BrowserRouter,  Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <BrowserRouter>
    <Routes>
     <Route path="/" element={<Layout/ >}>
     <Route path='/makeup' element={<MakeupList />} />
     <Route path="/makeup/add" element={<MakeupForm/>}/>
     <Route path="/makeup/profit-loss" element={<ProfitLossPage/>}/> 

     </Route>
    </Routes>
  </BrowserRouter>
</>
);


