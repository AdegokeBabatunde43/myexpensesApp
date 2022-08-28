import React, {useState, useEffect} from 'react'
import Form from './components/Form'
import Header from './components/Header'
import IncomeList from './components/IncomeList'
import './App.css'


  const App = () => {
  const [income, setIncome]=useState([])
  const [totalIncome, setTotalIncome] = useState(0)

  useEffect(() => {
    let temp = 0
    for (let i=0; i<income.length; i++) {
      temp += parseInt(income[i].price)
    }
    setTotalIncome(temp)
  },[income])


  return (
    <div>
      <Header totalIncome={totalIncome} />
      <Form income={income}  setIncome={setIncome}/>
      <IncomeList income={income} setIncome={setIncome}/>
    </div>
  )
}

export default App