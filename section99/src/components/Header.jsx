import '../css/Header.css'

const Header = () => {
  return (
    <div className="Header">
      <h3>성적 관리 프로그램 📊</h3>
      <h1>{new Date().toLocaleDateString()}</h1>
    </div>
  )
}

export default Header