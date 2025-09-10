import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import Client from './Component/Client';
import Feature from './Component/Feature';
import Community from './Component/Community';
import Products from './Component/Products';
import Recipes from './Component/Recipes';
import Registerform from './Component/Registerform';
import Serving from './Component/Serving';
import Navbar from './Component/Navbar';
import Showentities from './Component/Showentities';
import Sidebar from './Component/Sidebar';
import Pyramid from './Component/Pyramid';
import Signin from './Component/Signin';
import Dashboard from './Component/Dashboard';
import ProtectedRoute from './Component/ProtectedRoute '; // import

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Signin />} />
          <Route path="signin" element={<Signin />} />

          {/* Navbar as top-level layout */}
          <Route path="/" element={<Navbar />}>
            {/* Sidebar as nested layout */}
            <Route path="/" element={<Sidebar />} />  

            {/* Protected Pages */}
            <Route
              path="home"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="feature"
              element={
                <ProtectedRoute>
                  <Feature />
                </ProtectedRoute>
              }
            />
            <Route
              path="community"
              element={
                <ProtectedRoute>
                  <Community />
                </ProtectedRoute>
              }
            />
            <Route
              path="products"
              element={
                <ProtectedRoute>
                  <Products />
                </ProtectedRoute>
              }
            />
            <Route
              path="recipes"
              element={
                <ProtectedRoute>
                  <Recipes />
                </ProtectedRoute>
              }
            />
            <Route
              path="register-form"
              element={
                <ProtectedRoute>
                  <Registerform />
                </ProtectedRoute>
              }
            />
            <Route
              path="serving"
              element={
                <ProtectedRoute>
                  <Serving />
                </ProtectedRoute>
              }
            />
            <Route
              path="client"
              element={
                <ProtectedRoute>
                  <Client />
                </ProtectedRoute>
              }
            />
            <Route
              path="showentities"
              element={
                <ProtectedRoute>
                  <Showentities />
                </ProtectedRoute>
              }
            />
            <Route
              path="pyramid"
              element={
                <ProtectedRoute>
                  <Pyramid />
                </ProtectedRoute>
              }
            />
          </Route>

          <Route
            path="dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
