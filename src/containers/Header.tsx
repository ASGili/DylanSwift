const Header:React.FC = ()=> {

    return (      
    <header className="app-header">
    <h1 className="title"><p className="title">Swift or Dylan:</p><p className="title"> Guess The Artist</p></h1>
    <ul className="header-footer-links">
        <a className="header-footer-buttons" href="/DylanSwift/">Home</a>
        <a className="header-footer-buttons" href="/DylanSwift/leaderboard">Leaderboard</a>
    </ul>
    </header>
    )
}

export default Header;