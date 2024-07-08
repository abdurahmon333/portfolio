import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Admin from './Admin/Admin.jsx';
import AdminWork from './Admin/AdminPages/AdminWork.jsx';
import AdminAllWork from './Admin/AdminPages/AdminAllWork.jsx';
import Blog from './Pages/Blog.jsx';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
          <Route path='Blog' element={<Blog/>}/>
        <Route path="/Admin" element={<Admin />}>
          <Route path='' element={<AdminWork />} />
          <Route path='AllWork' element={<AdminAllWork />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
