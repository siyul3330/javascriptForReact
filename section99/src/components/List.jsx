import { useState } from 'react'
import '../css/List.css'
import ScoreItem from './ScoreItem.jsx'

const List = ({ students, onDelete, onUpdate }) => {
  const [search, setSearch] = useState('')

  const filtered = students.filter(s =>
    s.name.includes(search)
  )
  return (
    <div className="List">
      <h3>성적 목록 📊</h3>
      <input placeholder="이름 검색" value={search} onChange={e => setSearch(e.target.value)}/>
      {filtered.map(s => (<ScoreItem key={s.id} {...s} onDelete={onDelete} onUpdate={onUpdate}/>))}
    </div>
  )
}
export default List