import { useState } from 'react'
import './App.css'

import Header from './Header/Header'
import SubHeader from './SubHeader/SubHeader'
import Banner from './Banner/Banner'
import Featured from './Featured/Featured'

function App() {
  return (
    <>
      <SubHeader />
      <Header />
      <Banner />
      <Featured />
    </>
  )
}

export default App
