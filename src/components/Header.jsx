import { Link } from 'react-router-dom'
import { BookOpen, Code, GraduationCap } from 'lucide-react'

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <Code className="logo-icon" />
          <span>C Öğrenme</span>
        </Link>
        
        <nav className="nav">
          <Link to="/" className="nav-link">
            Ana Sayfa
          </Link>
          <Link to="/curriculum" className="nav-link">
            <GraduationCap size={18} />
            Müfredat
          </Link>
          <Link to="/lessons" className="nav-link">
            <BookOpen size={18} />
            Dersler
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
