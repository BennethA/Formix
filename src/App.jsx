import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AgreementPage from './pages/AgreementPage';

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