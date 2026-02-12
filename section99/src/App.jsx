import './css/App.css'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'
import { useState, useRef } from 'react'

const mockData = [
  {
    id: 0,
    name: "이시율",
    kor: 90,
    eng: 80,
    math: 70,
  }
]

function App() {
  const [students, setStudents] = useState(mockData)
  const idRef = useRef(1)

  const onCreate = (name, kor, eng, math) => {
    const newStudent = {
      id: idRef.current++,
      name,
      kor: Number(kor),
      eng: Number(eng),
      math: Number(math),
    }
    setStudents([newStudent, ...students])
  }
  const onDelete = (id) => {setStudents(students.filter(s => s.id !== id))}
  const onUpdate = (id, newData) => {setStudents(students.map(s => s.id === id ? { ...s, ...newData } : s))}
  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List students={students} onDelete={onDelete} onUpdate={onUpdate} />
    </div>
  )
}
export default App