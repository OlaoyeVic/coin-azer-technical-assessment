import { CgAdidas } from 'react-icons/cg'
import './header.scss'

const Header = () => {
    return (
        <div className="header">
            <div className='mobile-header'>
                <div className="nav-items">
                    <div><CgAdidas /> victor</div>
                    <div>About</div>
                    <div>Projects</div>
                    <div>Skills</div>
                </div>
                <div className="nav-button">
                    <button>Contact me</button>
                </div>
            </div>
            <div className='desktop-header'>
                <div className="desktop-header-logo">
                    <div><CgAdidas style={{width: '59px', height: '77px'}} /></div>
                    <div><h1>VICTOR</h1></div>
                </div>
                <div className='desktop-nav-items'>
                    <div><h1>About</h1></div>
                    <div><h1>Projects</h1></div>
                    <div><h1>Skills</h1></div>
                </div>
                <div className="desktop-nav-button">
                    <button>Contact me</button>
                </div>
            </div>
        </div>
    )
}
export default Header