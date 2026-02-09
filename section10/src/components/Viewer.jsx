const Viewer = ({n1, n2, result, setN1, setN2}) => {
  return (
    <div className="Viewer">
      <input type="number" value={n1} onChange={(e) => setN1(e.target.value)}/>
      <input type="number" value={n2} onChange={(e) => setN2(e.target.value)}/>
      <h2>결과</h2>
      <div>{result !== null ? result : "-"}</div>
    </div>
  )
}
export default Viewer