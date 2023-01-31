import "./navbar.css"
import { Route, Routes, Link } from "react-router-dom"
import Home from './Home';
import Books from './Books';
import Business from './Business'
import Jobs from './Jobs'   
import EuropeNews from './Climate'   
import Arts from './Arts';
import Sports from "./Sports";
import Education from "./Education";
import ClimateChange from "./Climate";

export default function Navbar()
{
    const date = new Date()
    const day = date.getDate()
    const month = date.getMonth() +1 
    const year = date.getFullYear()


    const linkStyle = {
      textDecoration: "none",
      color: 'black'
    };

    function toggleMenu()
    {
        document.body.classList.toggle("menu-open")
    }

    function closeMenu()
    {
      document.body.classList.remove("menu-open")
    }
return(
    <div>
    <div>
    <header className="header">
      <div className="header__content">
          <Link to="/" style={linkStyle}><h1 className="title"><em>NY TIMES CLONE</em></h1></Link>
        <ul className="header__menu">

          <li onClick={closeMenu}><Link to="/Clone-New-York-Times/" style={linkStyle}>Home</Link></li>
          <li onClick={closeMenu}><Link to="/arts" style={linkStyle}>Arts</Link></li>
          <li onClick={closeMenu}><Link to="/books" style={linkStyle}>Books</Link></li>
          <li onClick={closeMenu}><Link to="/business" style={linkStyle}>Business</Link></li>
          <li onClick={closeMenu}><Link to="/education" style={linkStyle}>Education</Link></li>
          <li onClick={closeMenu}><Link to="/climateChange" style={linkStyle}>Climate Change</Link></li>
          <li onClick={closeMenu}><Link to="/sports" style={linkStyle}>Sports</Link></li>
          <li onClick={closeMenu}><Link to="/jobs" style={linkStyle}>Jobs</Link></li>
        </ul>

      

        <div className="current-date">
            <p>{`${day} /${month <=9? `0${month}` : `${month}`} / ${year}`}</p>
        </div>
       
          <div onClick={toggleMenu} class="icon-hamburger">
            <span></span>
            <span></span>
          </div>
        </div>

      

  </header>
    </div>
    <div>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/business" element={<Business />} />
        <Route path="/climateChange" element={<ClimateChange />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/arts" element={<Arts />} />
        <Route path="/education" element={<Education />} />
      </Routes>
      </div>
    </div>
    
    

)
}

