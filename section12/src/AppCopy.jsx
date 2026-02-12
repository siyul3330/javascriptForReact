import './App.css'
import { Route, Routes, Link, useNavigate } from 'react-router-dom'
import Home from './components/Home'
import New from './components/New'
import Diary from './components/Diary'
import Edit from './components/Edit'
import NotFound from './components/NotFound'

function App() {
  const nav = useNavigate();
  const onClickGoPage = (e) => {
    nav(`/${e.target.value}`)
  }

  return (
    <>
    {/* 여기에 적은 내용은 모든 페이지가 공통 사용 */}
    <h2><Link to={"/"}>Home</Link>||<Link to={"/New"}>New</Link>||<Link to={"/Diary"}>Diary</Link>||<Link to={"/Edit"}>Edit</Link>
    </h2>

    <h2><a href="/">Home</a>||<a href="/New">New</a>||<a href="/Diary">Diary</a>||<a href="/Edit">Edit</a></h2><br />
    <button value="" onClick={onClickGoPage}>Home</button>
    <button value="New" onClick={onClickGoPage}>New</button>
    <button value="Diary" onClick={onClickGoPage}>Diary</button>
    <button value="Edit" onClick={onClickGoPage}>Edit</button>

    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/new/:id' element={<New />}/>
      <Route path='/diary' element={<Diary />}/>
      <Route path='/edit' element={<Edit />}/>
      <Route path='*' element={<NotFound />}/>
    </Routes>
    </>
  )
}
export default App;
