import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import LoginPage from "./pages/Login-Page";
import RegisterPage from "./pages/Register-Page";
import AgreementPage from './pages/Agreement-Page';

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