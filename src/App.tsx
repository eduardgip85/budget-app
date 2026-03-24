import { Routes, Route } from 'react-router-dom'
import HomePage from '../src/pages/HomePage'
import BudgetDetailPage from './pages/BudgetDetailPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/budget/:id" element={<BudgetDetailPage />} />
    </Routes>
  )
}

export default App