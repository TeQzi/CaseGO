import Link from "next/link";

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
                        <Link href="/sign">
                             <a className="nav__link"> Войти</a>
                        </Link>
                        
                    </nav>

                </div>

            </div>
        </header>
    )
}