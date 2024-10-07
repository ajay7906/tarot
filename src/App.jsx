import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminPanel from './pages/admin/AdminPanel'
import ProtectedRoute from './components/protected/ProtectedRoute'
import { AuthProvider } from './context/useContext'
import Login from './pages/login/Login'
import { Router } from 'lucide-react'
import TarotClasses from './pages/class/Class'
import NavBar from './components/navbar/Navigation'
import AnimatedFooter from './components/footer/Footer'
import TarotTopics from './pages/topicpage/TarotTopicpage'
import BlogPage from './pages/blogpage/BlogPage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <AuthProvider>
      <BrowserRouter>

      <NavBar/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/admin' element={<AdminPanel />} />
            {/* <Route path="/blog" component={Blog} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/class" element={<TarotClasses/>} />
            <Route path="/topic" element={<TarotTopics/>} />
            <Route path='/blog' element={<BlogPage/>}/>
            {/* <ProtectedRoute path='/admin' component={<AdminPanel />} /> */}
            <Route path='/admin' element={<ProtectedRoute component={AdminPanel}/>} />
          </Routes>
       
     <AnimatedFooter/>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
