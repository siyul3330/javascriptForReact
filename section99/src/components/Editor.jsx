import { useState } from 'react'
import '../css/Editor.css'

const Editor = ({ onCreate }) => {
  const [name, setName] = useState('')
  const [kor, setKor] = useState('')
  const [eng, setEng] = useState('')
  const [math, setMath] = useState('')

  const onSubmit = () => {
    if (!name || !kor || !eng || !math) return
    onCreate(name, kor, eng, math)
    setName('')
    setKor('')
    setEng('')
    setMath('')
  }
  return (
    <div className="Editor">
      <input placeholder="이름" value={name} onChange={e => setName(e.target.value)} />
      <input placeholder="국어" value={kor} onChange={e => setKor(e.target.value)} />
      <input placeholder="영어" value={eng} onChange={e => setEng(e.target.value)} />
      <input placeholder="수학" value={math} onChange={e => setMath(e.target.value)} />
      <button onClick={onSubmit}>등록</button>
    </div>
  )
}
export default Editor