import { useState } from 'react'
import '../css/ScoreItem.css'

const ScoreItem = ({ id, name, kor, eng, math, onDelete, onUpdate }) => {
  const [isEdit, setIsEdit] = useState(false)
  const [editData, setEditData] = useState({ kor, eng, math })

  const total = kor + eng + math

  const onSave = () => {
    onUpdate(id, editData)
    setIsEdit(false)
  }
  return (
    <div className="ScoreItem">
      <b>{name}</b>
      {isEdit ? (
        <>
          <input value={editData.kor} onChange={e => setEditData({...editData, kor:Number(e.target.value)})} />
          <input value={editData.eng} onChange={e => setEditData({...editData, eng:Number(e.target.value)})} />
          <input value={editData.math} onChange={e => setEditData({...editData, math:Number(e.target.value)})} />
          <button onClick={onSave}>저장</button>
        </>
      ) : (
        <>
          <span>국어:{kor}</span>
          <span>영어:{eng}</span>
          <span>수학:{math}</span>
          <span>총점:{total}</span>
          <button onClick={() => setIsEdit(true)}>수정</button>
        </>
      )}
      <button onClick={() => onDelete(id)}>삭제</button>
    </div>
  )
}
export default ScoreItem
