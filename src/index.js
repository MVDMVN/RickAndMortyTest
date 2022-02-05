import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.scss'
import App from './App'
import CharacterInfo from './components/CharacterInfo/CharacterInfo'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        {/* <Route path="page/:pageNumber" element={<App />} /> */}
      </Route>
      <Route path="character/:characterId" element={<CharacterInfo />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)
