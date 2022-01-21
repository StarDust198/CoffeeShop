import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import App from './components/app/app'
import MainPage from './components/pages/MainPage'
import OurCoffee from './components/pages/OurCoffee'
import SingleCoffee from './components/pages/SingleCoffee'

import './index.css'

render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<MainPage />} />
          <Route path="coffee" element={<OurCoffee />} />
          <Route path="coffee/:coffeeId" element={<SingleCoffee />} />
          <Route path="goods" element={<OurCoffee noFilter />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)