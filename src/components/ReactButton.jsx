import React, { useState } from 'react'
import '../App.css'
const ReactButton = ({ label, setResult }) => {

  return (
    <button className="btn" onClick={() => setResult(prev=>prev+Number(label))}>{label}</button>
  )
}

export default ReactButton