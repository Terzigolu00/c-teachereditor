import { useState } from 'react'
import { BookOpen, Code, Target, Lightbulb, HelpCircle } from 'lucide-react'

const CurriculumPage = () => {
  const [showExplanation, setShowExplanation] = useState(null)

  const curriculumTopics = [
    {
      id: 1,
      title: "C Dilinde Neler Yapabiliriz?",
      icon: <Code className="topic-icon" />,
      content: [
        "Bilgisayar oyunları geliştirebiliriz",
        "Telefon uygulamaları yazabiliriz", 
        "Robotları kontrol edebiliriz",
        "Web sitelerinin arka planında çalışan programlar yazabiliriz",
        "Bilgisayar virüslerini anlayabiliriz (güvenlik için!)",
        "Matematik problemlerini çözebiliriz"
      ],
      explanation: "C dili çok güçlü bir programlama dilidir. Neredeyse her şeyi yapabilirsiniz! Örneğin WhatsApp, Facebook gibi uygulamalar C diliyle yazılmıştır. Öğrenmeye değer çünkü diğer dilleri öğrenmeyi çok kolaylaştırır."
    },
    {
      id: 2,
      title: "Nerede Kullanılır?",
      icon: <Target className="topic-icon" />,
      content: [
        "Okul projelerinde",
        "İş görüşmelerinde (yazılımcı olmak için)",
        "Bilgisayar mühendisliği bölümünde",
        "Yapay zeka projelerinde",
        "Oyun geliştirmede",
        "Siber güvenlik alanında"
      ],
      explanation: "C dili her yerde kullanılır! Eğer bilgisayar alanında kariyer yapmak istiyorsanız, C öğrenmek zorunludur. Çoğu şirket yazılımcı ararken C bilgisini şart koşar."
    },
    {
      id: 3,
      title: "Neden Öğrenmeliyiz?",
      icon: <Lightbulb className="topic-icon" />,
      content: [
        "Diğer programlama dillerini kolayca öğrenirsiniz",
        "Bilgisayarın nasıl çalıştığını anlarsınız",
        "Mantıklı düşünme beceriniz gelişir",
        "Problem çözme yeteneğiniz artar",
        "Gelecekte iyi maaşlı işler bulabilirsiniz",
        "Kendi uygulamalarınızı yapabilirsiniz"
      ],
      explanation: "C öğrenmek sadece programlama değil, aynı zamanda beyninizi geliştirir. Adım adım düşünmeyi, problemleri çözmeyi öğrenirsiniz. Bu beceriler hayatınızın her alanında işinize yarar."
    }
  ]

  const learningPath = [
    {
      step: 1,
      title: "Temeller",
      description: "Değişkenler, veri tipleri, printf ile yazı yazma",
      duration: "1 hafta",
      difficulty: "⭐"
    },
    {
      step: 2,
      title: "Karar Verme",
      description: "if-else ile koşullu işlemler",
      duration: "1 hafta", 
      difficulty: "⭐⭐"
    },
    {
      step: 3,
      title: "Döngüler",
      description: "for ve while ile tekrarlı işlemler",
      duration: "2 hafta",
      difficulty: "⭐⭐"
    },
    {
      step: 4,
      title: "Fonksiyonlar",
      description: "Kendi fonksiyonlarımızı yazma",
      duration: "2 hafta",
      difficulty: "⭐⭐⭐"
    },
    {
      step: 5,
      title: "Diziler",
      description: "Birden fazla veriyi saklama",
      duration: "2 hafta",
      difficulty: "⭐⭐⭐"
    },
    {
      step: 6,
      title: "Projeler",
      description: "Gerçek projeler yapma",
      duration: "3 hafta",
      difficulty: "⭐⭐⭐⭐"
    }
  ]

  return (
    <div className="curriculum-page">
      <div className="container">
        <div className="page-header">
          <h1>📚 C Programlama Müfredatı</h1>
          <p>Başlangıçtan ileri seviyeye kadar adım adım öğrenin</p>
        </div>

        <section className="curriculum-intro">
          <h2>🎯 Neden C Öğrenmelisiniz?</h2>
          <div className="topics-grid">
            {curriculumTopics.map(topic => (
              <div key={topic.id} className="topic-card">
                <div className="topic-header">
                  {topic.icon}
                  <h3>{topic.title}</h3>
                  <button
                    className="explain-btn"
                    onClick={() => setShowExplanation(showExplanation === topic.id ? null : topic.id)}
                  >
                    <HelpCircle size={16} />
                    {showExplanation === topic.id ? 'Gizle' : 'Açıkla'}
                  </button>
                </div>
                
                {showExplanation === topic.id && (
                  <div className="explanation-box">
                    <p>{topic.explanation}</p>
                  </div>
                )}
                
                <ul className="topic-list">
                  {topic.content.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="learning-path">
          <h2>🛤️ Öğrenme Yolculuğu</h2>
          <p className="path-description">
            Bu yolu takip ederek C dilinde uzmanlaşabilirsiniz. Her adım bir öncekine dayanır, 
            bu yüzden sırayla ilerlemeniz önemlidir.
          </p>
          
          <div className="path-steps">
            {learningPath.map((step, index) => (
              <div key={step.step} className="path-step">
                <div className="step-number">{step.step}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  <div className="step-meta">
                    <span className="duration">⏱️ {step.duration}</span>
                    <span className="difficulty">Zorluk: {step.difficulty}</span>
                  </div>
                </div>
                {index < learningPath.length - 1 && <div className="step-arrow">→</div>}
              </div>
            ))}
          </div>
        </section>

        <section className="success-tips">
          <h2>💡 Başarı İpuçları</h2>
          <div className="tips-grid">
            <div className="tip-card">
              <h3>📝 Pratik Yapın</h3>
              <p>Her gün en az 30 dakika kod yazın. Sadece okumak yeterli değil!</p>
            </div>
            <div className="tip-card">
              <h3>🔄 Tekrar Edin</h3>
              <p>Öğrendiklerinizi unutmamak için düzenli tekrar yapın.</p>
            </div>
            <div className="tip-card">
              <h3>❓ Soru Sorun</h3>
              <p>Anlamadığınız yerlerde çekinmeden soru sorun.</p>
            </div>
            <div className="tip-card">
              <h3>🎮 Eğlenin</h3>
              <p>Programlama öğrenirken eğlenmeyi unutmayın!</p>
            </div>
          </div>
        </section>

        <section className="get-started">
          <div className="start-card">
            <h2>🚀 Hemen Başlayın!</h2>
            <p>Artık C dilinin ne kadar önemli olduğunu biliyorsunuz. Hadi ilk dersimize başlayalım!</p>
            <div className="start-actions">
              <a href="/lessons" className="btn btn-primary">
                <BookOpen size={20} />
                Derslere Başla
              </a>
              <a href="/" className="btn btn-secondary">
                Ana Sayfaya Dön
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default CurriculumPage

