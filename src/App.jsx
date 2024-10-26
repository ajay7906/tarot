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
import InternationalTarotPage from './pages/internationalpage/Internationa'
import TarotPackagesPagesInr from './pages/internationalpage/Internationa'
import Career from './pages/topics/carrer/Career'
import IndianPage from './pages/indian/IndianPage'
import HealingPage from './pages/topics/healing/Healing'
import Love from './pages/topics/love/Love'
import Personal from './pages/topics/personal/Personal'
import Guidance from './pages/guidance/Guidance'
import TermsAndConditions from './pages/policy/TermsAndCondition'
import PrivacyPolicy from './pages/policy/PrivacyPolicy'
import RefundPolicy from './pages/policy/RefundPolicy'
import { Toaster } from 'react-hot-toast'
function App() {
  const [count, setCount] = useState(0)

  return (
    <AuthProvider>
      <BrowserRouter>
      <Toaster
        position="top-center"
        toastOptions={{
          // Default options for all toasts
          style: {
            borderRadius: '8px',
            background: '#333',
            color: '#fff',
          },
        }}
      />

      <NavBar/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/admin' element={<AdminPanel />} />
            {/* <Route path="/blog" component={Blog} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/class" element={<TarotClasses/>} />
            <Route path="/topic" element={<TarotTopics/>} />
            <Route path='/blog' element={<BlogPage/>}/>
            <Route path='/career' element={<Career/>}/>
            <Route path='pricing/international' element={<TarotPackagesPagesInr/>} />
            <Route path='pricing/india' element={<IndianPage/>} />
            <Route path='topic/career' element={<Career/>} />
            <Route path='topic/healing' element={<HealingPage/>} />
            <Route path='topic/relationship' element={<Love/>} />
            <Route path='topic/personal' element={<Personal/>} />
            <Route path='/guidance' element={<Guidance/>} />
            <Route path='/terms' element={<TermsAndConditions/>} />
            <Route path='/privacy' element={<PrivacyPolicy/>} />
          
            <Route path='/refund' element={<RefundPolicy/>} />
            {/* <ProtectedRoute path='/admin' component={<AdminPanel />} /> */}
            <Route path='/admin' element={<ProtectedRoute component={AdminPanel}/>} />
          </Routes>
       
     <AnimatedFooter/>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
