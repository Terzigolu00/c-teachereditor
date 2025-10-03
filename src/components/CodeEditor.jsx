import { useState, useRef, useEffect } from 'react'
import { Play, RotateCcw, Copy, Check, Zap } from 'lucide-react'

const CodeEditor = ({ initialCode = '', onRunCode }) => {
  const [code, setCode] = useState(initialCode)
  const [output, setOutput] = useState('')
  const [isRunning, setIsRunning] = useState(false)
  const [copied, setCopied] = useState(false)
  const [suggestions, setSuggestions] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [cursorPosition, setCursorPosition] = useState(0)
  const textareaRef = useRef(null)

  // C dil anahtar kelimeleri ve fonksiyonları
  const cKeywords = {
    'for': 'for (size_t i = 0; i < count; i++)\n{\n    /* code */\n}',
    'fori': 'for (int i = 0; i < n; i++)\n{\n    /* code */\n}',
    'forr': 'for (int i = n - 1; i >= 0; i--)\n{\n    /* code */\n}',
    'if': 'if (condition)\n{\n    /* code */\n}',
    'else': 'else\n{\n    /* code */\n}',
    'elseif': 'else if (condition)\n{\n    /* code */\n}',
    'while': 'while (condition)\n{\n    /* code */\n}',
    'do': 'do\n{\n    /* code */\n} while (condition);',
    'switch': 'switch (expression)\n{\ncase value:\n    /* code */\n    break;\ndefault:\n    /* code */\n}',
    'case': 'case value:\n    /* code */\n    break;',
    'break': 'break;',
    'continue': 'continue;',
    'int': 'int ',
    'float': 'float ',
    'char': 'char ',
    'double': 'double ',
    'size_t': 'size_t ',
    'void': 'void ',
    'return': 'return ',
    'printf': 'printf("format", args);',
    'scanf': 'scanf("format", &variable);',
    'malloc': 'malloc(size);',
    'free': 'free(ptr);',
    'sizeof': 'sizeof(type)',
    'main': 'int main(int argc, char *argv[])\n{\n    /* code */\n    return 0;\n}',
    'include': '#include <stdio.h>',
    'stdio': '#include <stdio.h>',
    'stdlib': '#include <stdlib.h>',
    'string': '#include <string.h>',
    'math': '#include <math.h>'
  }

  // Akıllı kod tamamlama
  const handleKeyDown = (e) => {
    const { value, selectionStart, selectionEnd } = e.target
    const lines = value.split('\n')
    const currentLine = lines[value.substring(0, selectionStart).split('\n').length - 1]
    const currentWord = currentLine.split(/\s+/).pop()
    
    setCursorPosition(selectionStart)
    
    // Enter tuşu - otomatik girinti
    if (e.key === 'Enter') {
      e.preventDefault()
      const beforeCursor = value.substring(0, selectionStart)
      const afterCursor = value.substring(selectionStart)
      const indent = beforeCursor.match(/\n(\s*)/)?.[1] || ''
      
      let newIndent = indent
      if (beforeCursor.trim().endsWith('{')) {
        newIndent += '    '
      }
      
      const newCode = beforeCursor + '\n' + newIndent + afterCursor
      setCode(newCode)
      setTimeout(() => {
        const newPos = selectionStart + 1 + newIndent.length
        textareaRef.current.setSelectionRange(newPos, newPos)
      }, 0)
      return
    }
    
    // Tab tuşu - akıllı tamamlama
    if (e.key === 'Tab') {
      e.preventDefault()
      
      // Eğer öneriler varsa, ilkini seç
      if (showSuggestions && suggestions.length > 0) {
        const suggestion = suggestions[0]
        const template = cKeywords[suggestion]
        
        if (template) {
          // Tam template'i ekle
          const beforeWord = value.substring(0, selectionStart - currentWord.length)
          const afterCursor = value.substring(selectionStart)
          const newCode = beforeWord + template + afterCursor
          setCode(newCode)
          setShowSuggestions(false)
          
          // Cursor'u template içindeki uygun yere yerleştir
          setTimeout(() => {
            let cursorPos = selectionStart - currentWord.length + template.length
            
            // Template içinde placeholder varsa cursor'u oraya yerleştir
            if (template.includes('condition')) {
              cursorPos = beforeWord.length + template.indexOf('condition')
            } else if (template.includes('count')) {
              cursorPos = beforeWord.length + template.indexOf('count')
            } else if (template.includes('n')) {
              cursorPos = beforeWord.length + template.indexOf('n')
            } else if (template.includes('/* code */')) {
              cursorPos = beforeWord.length + template.indexOf('/* code */') + 4
            } else if (template.includes('format')) {
              cursorPos = beforeWord.length + template.indexOf('format')
            } else if (template.includes('args')) {
              cursorPos = beforeWord.length + template.indexOf('args')
            }
            
            textareaRef.current.setSelectionRange(cursorPos, cursorPos)
          }, 0)
        }
        return
      }
      
      // Normal girinti
      const newCode = value.slice(0, selectionStart) + '    ' + value.slice(selectionEnd)
      setCode(newCode)
      setTimeout(() => {
        textareaRef.current.setSelectionRange(selectionStart + 4, selectionStart + 4)
      }, 0)
      return
    }
    
    // Parantez tamamlama
    if (e.key === '(') {
      e.preventDefault()
      const newCode = value.slice(0, selectionStart) + '()' + value.slice(selectionEnd)
      setCode(newCode)
      setTimeout(() => {
        textareaRef.current.setSelectionRange(selectionStart + 1, selectionStart + 1)
      }, 0)
    }
    
    // Süslü parantez tamamlama
    if (e.key === '{') {
      e.preventDefault()
      const newCode = value.slice(0, selectionStart) + '{\n    \n}' + value.slice(selectionEnd)
      setCode(newCode)
      setTimeout(() => {
        textareaRef.current.setSelectionRange(selectionStart + 5, selectionStart + 5)
      }, 0)
    }
    
    // Tırnak tamamlama
    if (e.key === '"') {
      e.preventDefault()
      const newCode = value.slice(0, selectionStart) + '""' + value.slice(selectionEnd)
      setCode(newCode)
      setTimeout(() => {
        textareaRef.current.setSelectionRange(selectionStart + 1, selectionStart + 1)
      }, 0)
    }
  }

  // Kod değişikliği - önerileri güncelle
  const handleCodeChange = (e) => {
    const value = e.target.value
    setCode(value)
    
    const lines = value.split('\n')
    const cursorLine = value.substring(0, e.target.selectionStart).split('\n').length - 1
    const currentLine = lines[cursorLine] || ''
    const currentWord = currentLine.split(/\s+/).pop()
    
    if (currentWord.length >= 2) {
      const matchingKeywords = Object.keys(cKeywords).filter(keyword => 
        keyword.toLowerCase().startsWith(currentWord.toLowerCase())
      )
      setSuggestions(matchingKeywords)
      setShowSuggestions(matchingKeywords.length > 0)
    } else {
      setShowSuggestions(false)
    }
  }

  // Gelişmiş syntax highlighting
  const getHighlightedCode = (code) => {
    let highlighted = code
      // Önce yorumları işle
      .replace(/(\/\/.*$)/gm, '<span class="comment">$1</span>')
      .replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="comment">$1</span>')
      // Sonra stringleri işle
      .replace(/"([^"]*)"/g, '<span class="string">"$1"</span>')
      .replace(/'([^']*)'/g, '<span class="string">\'$1\'</span>')
      // Sonra preprocessor direktiflerini işle
      .replace(/(#include\s+<[^>]+>)/g, '<span class="preprocessor">$1</span>')
      // Sonra anahtar kelimeleri işle
      .replace(/\b(int|float|char|double|void|return|if|else|for|while|do|switch|case|break|continue|static|const|extern|register|volatile|typedef|struct|union|enum)\b/g, '<span class="keyword">$1</span>')
      // Sonra fonksiyonları işle
      .replace(/\b(printf|scanf|main|malloc|free|sizeof|strlen|strcpy|strcmp)\b/g, '<span class="function">$1</span>')
      // Son olarak sayıları işle
      .replace(/\b(\d+\.?\d*)\b/g, '<span class="number">$1</span>')
    
    // Satır sonlarını <br> ile değiştir
    return highlighted.replace(/\n/g, '<br>')
  }

  const handleRunCode = async () => {
    setIsRunning(true)
    setOutput('Kod çalıştırılıyor...')
    
    // Simüle edilmiş kod çalıştırma
    setTimeout(() => {
      try {
        // Basit printf simülasyonu
        const printfMatches = code.match(/printf\s*\(\s*"([^"]*)"\s*\)/g)
        let result = ''
        
        if (printfMatches) {
          printfMatches.forEach(match => {
            const text = match.match(/"([^"]*)"/)[1]
            result += text.replace(/\\n/g, '\n')
          })
        }
        
        // Basit hesaplama simülasyonu
        const mathMatches = code.match(/(\d+)\s*([+\-*/])\s*(\d+)/g)
        if (mathMatches) {
          mathMatches.forEach(match => {
            const parts = match.match(/(\d+)\s*([+\-*/])\s*(\d+)/)
            const num1 = parseInt(parts[1])
            const operator = parts[2]
            const num2 = parseInt(parts[3])
            let calc = 0
            
            switch (operator) {
              case '+': calc = num1 + num2; break
              case '-': calc = num1 - num2; break
              case '*': calc = num1 * num2; break
              case '/': calc = num2 !== 0 ? Math.floor(num1 / num2) : 'Hata: Sıfıra bölme!'; break
            }
            result += `\nHesaplama: ${match} = ${calc}`
          })
        }
        
        setOutput(result || 'Kod başarıyla çalıştırıldı!')
      } catch (error) {
        setOutput('Hata: ' + error.message)
      }
      setIsRunning(false)
    }, 1000)
  }

  const handleReset = () => {
    setCode(initialCode)
    setOutput('')
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error('Kopyalama hatası:', error)
    }
  }

  return (
    <div className="code-editor">
      <div className="editor-header">
        <h3>💻 C Kod Editörü</h3>
        <p>Gerçek bir C editörü gibi yazın! <Zap size={16} /> for, if, while yazınca otomatik tamamlanır!</p>
        <div className="editor-actions">
          <button 
            onClick={handleRunCode} 
            disabled={isRunning}
            className="btn btn-primary"
          >
            <Play size={16} />
            {isRunning ? 'Çalıştırılıyor...' : 'Kodu Çalıştır'}
          </button>
          <button onClick={handleReset} className="btn btn-secondary">
            <RotateCcw size={16} />
            Sıfırla
          </button>
          <button onClick={handleCopy} className="btn btn-secondary">
            {copied ? <Check size={16} /> : <Copy size={16} />}
            {copied ? 'Kopyalandı!' : 'Kopyala'}
          </button>
        </div>
      </div>

      <div className="editor-container">
        <div className="code-input">
          <div className="code-header">
            <span>💻 C Kodunuzu Buraya Yazın</span>
            <div className="help-tips">
              <small>
                ⚡ for, if, while yazınca Tab tuşuna basın - otomatik tamamlanır!
              </small>
            </div>
          </div>
          <div className="editor-wrapper">
            <div className="line-numbers">
              {code.split('\n').map((_, index) => (
                <div key={index} className="line-number">{index + 1}</div>
              ))}
            </div>
            <div className="code-wrapper">
              <div 
                className="code-highlight"
                dangerouslySetInnerHTML={{ __html: getHighlightedCode(code) }}
              />
              <textarea
                ref={textareaRef}
                value={code}
                onChange={handleCodeChange}
                onKeyDown={handleKeyDown}
                className="code-textarea"
                placeholder="C kodunuzu buraya yazin..."
                spellCheck={false}
              />
              {showSuggestions && suggestions.length > 0 && (
                <div className="suggestions-box">
                  {suggestions.slice(0, 5).map((suggestion, index) => (
                    <div 
                      key={index}
                      className="suggestion-item"
                    onClick={() => {
                      const lines = code.split('\n')
                      const cursorLine = textareaRef.current.selectionStart
                      const currentLineIndex = code.substring(0, cursorLine).split('\n').length - 1
                      const currentLine = lines[currentLineIndex] || ''
                      const currentWord = currentLine.split(/\s+/).pop()
                      
                      const template = cKeywords[suggestion]
                      if (template) {
                        const beforeWord = code.substring(0, cursorLine - currentWord.length)
                        const afterCursor = code.substring(cursorLine)
                        const newCode = beforeWord + template + afterCursor
                        setCode(newCode)
                        setShowSuggestions(false)
                        
                        // Cursor'u template içindeki uygun yere yerleştir
                        setTimeout(() => {
                          let cursorPos = cursorLine - currentWord.length + template.length
                          
                          if (template.includes('condition')) {
                            cursorPos = beforeWord.length + template.indexOf('condition')
                          } else if (template.includes('count')) {
                            cursorPos = beforeWord.length + template.indexOf('count')
                          } else if (template.includes('n')) {
                            cursorPos = beforeWord.length + template.indexOf('n')
                          } else if (template.includes('/* code */')) {
                            cursorPos = beforeWord.length + template.indexOf('/* code */') + 4
                          }
                          
                          textareaRef.current.setSelectionRange(cursorPos, cursorPos)
                        }, 0)
                      }
                    }}
                    >
                      <strong>{suggestion}</strong>
                      <small>{cKeywords[suggestion] ? 'C anahtar kelimesi' : 'Fonksiyon'}</small>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="code-output">
          <div className="output-header">
            <span>📤 Çıktı</span>
          </div>
          <pre className="output-content">
            {output || 'Kodunuzu çalıştırmak için yukarıdaki "Kodu Çalıştır" butonuna tıklayın.'}
          </pre>
        </div>
      </div>

      <div className="editor-help">
        <h4>⚡ C Dil Akıllı Editör Özellikleri:</h4>
        <div className="help-grid">
          <div className="help-item">
            <strong>for</strong> yazın + Tab → <code>for (size_t i = 0; i {'<'} count; i++)</code>
          </div>
          <div className="help-item">
            <strong>fori</strong> yazın + Tab → <code>for (int i = 0; i {'<'} n; i++)</code>
          </div>
          <div className="help-item">
            <strong>if</strong> yazın + Tab → <code>if (condition)</code>
          </div>
          <div className="help-item">
            <strong>while</strong> yazın + Tab → <code>while (condition)</code>
          </div>
          <div className="help-item">
            <strong>switch</strong> yazın + Tab → Tam switch yapısı
          </div>
          <div className="help-item">
            <strong>printf</strong> yazın + Tab → <code>printf("format", args);</code>
          </div>
        </div>
        <p className="help-note">
          💡 <strong>İpucu:</strong> Herhangi bir C anahtar kelimesi yazmaya başlayın, 
          Tab tuşuna basın - editör otomatik tamamlayacak!
        </p>
      </div>
    </div>
  )
}

export default CodeEditor

