import React from 'react'

const Header = ({totalIncome}) => {
  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
      <h1>Income Tracker</h1>
      <div className="totalIncome"><h1 style={{backgroundColor: 'white',padding:'20px', border: '5px solid gray' }}>${totalIncome}</h1></div>


      
      </div>
  )
}

export default Header
