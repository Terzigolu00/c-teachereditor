import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Clock, Target, BookOpen } from 'lucide-react'
import { lessons } from '../data/lessons'

const LessonsPage = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState('Tümü')

  const difficulties = ['Tümü', 'Başlangıç', 'Orta', 'İleri']

  const filteredLessons = selectedDifficulty === 'Tümü' 
    ? lessons 
    : lessons.filter(lesson => lesson.difficulty === selectedDifficulty)

  return (
    <div className="lessons-page">
      <div className="container">
        <div className="page-header">
          <h1>C Programlama Dersleri</h1>
          <p>C dilini adım adım öğrenmeye başlayın</p>
        </div>

        <div className="filter-section">
          <h3>Zorluk Seviyesi:</h3>
          <div className="filter-buttons">
            {difficulties.map(difficulty => (
              <button
                key={difficulty}
                className={`filter-btn ${selectedDifficulty === difficulty ? 'active' : ''}`}
                onClick={() => setSelectedDifficulty(difficulty)}
              >
                {difficulty}
              </button>
            ))}
          </div>
        </div>

        <div className="lessons-grid">
          {filteredLessons.map(lesson => (
            <div key={lesson.id} className="lesson-card">
              <div className="lesson-header">
                <h3>{lesson.title}</h3>
                <div className="lesson-meta">
                  <span className={`difficulty difficulty-${lesson.difficulty.toLowerCase()}`}>
                    {lesson.difficulty}
                  </span>
                  <span className="duration">
                    <Clock size={16} />
                    {lesson.duration}
                  </span>
                </div>
              </div>
              
              <p className="lesson-description">{lesson.description}</p>
              
              <div className="lesson-topics">
                <h4>Konular:</h4>
                <div className="topics-list">
                  {lesson.topics.map((topic, index) => (
                    <span key={index} className="topic-tag">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
              
              <Link to={`/lesson/${lesson.id}`} className="lesson-btn">
                <BookOpen size={18} />
                Dersi İncele
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LessonsPage
