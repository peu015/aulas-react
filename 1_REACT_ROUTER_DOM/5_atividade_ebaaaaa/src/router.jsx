import { Routes, Route } from "react-router-dom"

import Pg1 from "./pages/Pg1"
import Pg2 from "./pages/Pg2"

import React from 'react'

function router() {
  return (
    <Routes>
        <Route path="/" element={ <Pg1/> } />
        <Route path="/Pg2" element={ <Pg2/>} />
    </Routes>
  )
}

export default router