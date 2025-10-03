import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Clock, Target, Code, BookOpen } from 'lucide-react'
import { lessons } from '../data/lessons'
import CodeEditor from '../components/CodeEditor'

const LessonDetailPage = () => {
  const { id } = useParams()
  const lesson = lessons.find(lesson => lesson.id === parseInt(id))

  if (!lesson) {
    return (
      <div className="lesson-detail-page">
        <div className="container">
          <h1>Ders bulunamadı</h1>
          <Link to="/lessons" className="btn btn-primary">
            <ArrowLeft size={18} />
            Derslere Dön
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="lesson-detail-page">
      <div className="container">
        <div className="lesson-header">
          <Link to="/lessons" className="back-btn">
            <ArrowLeft size={18} />
            Derslere Dön
          </Link>
          
          <div className="lesson-meta">
            <h1>{lesson.title}</h1>
            <div className="meta-info">
              <span className={`difficulty difficulty-${lesson.difficulty.toLowerCase()}`}>
                <Target size={16} />
                {lesson.difficulty}
              </span>
              <span className="duration">
                <Clock size={16} />
                {lesson.duration}
              </span>
            </div>
          </div>
        </div>

        <div className="lesson-content">
          <section className="content-section">
            <h2>Giriş</h2>
            <p>{lesson.content.introduction}</p>
          </section>

          <section className="content-section">
            <h2>Teorik Bilgi</h2>
            <ul className="theory-list">
              {lesson.content.theory.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="content-section">
            <h2>Kod Örneği</h2>
            <div className="code-block">
              <div className="code-header">
                <Code size={18} />
                <span>Örnek Kod</span>
              </div>
              <pre className="code-content">
                <code>{lesson.content.code}</code>
              </pre>
            </div>
          </section>

          <section className="content-section">
            <h2>Açıklama</h2>
            <p className="explanation">{lesson.content.explanation}</p>
          </section>

          <section className="content-section">
            <h2>Bu Derste Öğrendiklerimiz</h2>
            <div className="topics-learned">
              {lesson.topics.map((topic, index) => (
                <div key={index} className="topic-item">
                  <BookOpen size={16} />
                  <span>{topic}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="content-section">
            <h2>🎮 Kod Editörü - Pratik Yapın!</h2>
            <p>Öğrendiklerinizi pekiştirmek için aşağıdaki editörde kod yazabilirsiniz:</p>
            <CodeEditor initialCode={lesson.content.code} />
          </section>
        </div>

        <div className="lesson-navigation">
          <Link to="/lessons" className="btn btn-secondary">
            Tüm Dersleri Görüntüle
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LessonDetailPage
