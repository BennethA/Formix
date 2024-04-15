import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import AgreementPage from './AgreementPage';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path='/'
            element={<LoginPage/>}
          />
          <Route
            path='/registerPage'
            element={<RegisterPage/>}
          />
          <Route
            path='/loginPage'
            element={<LoginPage/>}
          />
          <Route
            path='/agreementPage'
            element={<AgreementPage/>}
          />
        </Routes>
      </Router>
    </>
  )
}

export default App