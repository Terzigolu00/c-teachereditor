import { Link } from 'react-router-dom'
import { BookOpen, Code, Target, Users, GraduationCap } from 'lucide-react'

const HomePage = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h1>C Programlama Dili Öğrenme Platformu</h1>
          <p className="hero-description">
            C programlama dilini adım adım öğrenin. Detaylı açıklamalar, 
            kod örnekleri ve pratik alıştırmalarla C dilinde uzmanlaşın.
          </p>
          <div className="hero-actions">
            <Link to="/lessons" className="btn btn-primary">
              <BookOpen size={20} />
              Derslere Başla
            </Link>
            <Link to="/curriculum" className="btn btn-secondary">
              <GraduationCap size={20} />
              Müfredatı İncele
            </Link>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Neden C Öğrenmelisiniz?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <Code className="feature-icon" />
              <h3>Temel Programlama</h3>
              <p>C dili, programlamanın temelini öğrenmek için mükemmel bir başlangıç noktasıdır.</p>
            </div>
            <div className="feature-card">
              <Target className="feature-icon" />
              <h3>Performans</h3>
              <p>C ile yazılmış programlar hızlı ve verimli çalışır, sistem programlaması için idealdir.</p>
            </div>
            <div className="feature-card">
              <Users className="feature-icon" />
              <h3>Geniş Kullanım</h3>
              <p>İşletim sistemleri, gömülü sistemler ve oyun geliştirmede yaygın olarak kullanılır.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>5+</h3>
              <p>Detaylı Ders</p>
            </div>
            <div className="stat-item">
              <h3>50+</h3>
              <p>Kod Örneği</p>
            </div>
            <div className="stat-item">
              <h3>100%</h3>
              <p>Ücretsiz</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
