export default function Header() {
    return (

        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <div className="header__logo">
                        <a href="/">CaseGO</a>
                    </div>

                    <nav>
                        <a href="#" className="nav__link">F.A.Q</a>
                        <a href="/sign" className="nav__link">Войти</a>
                    </nav>

                </div>

            </div>
        </header>
    )
}