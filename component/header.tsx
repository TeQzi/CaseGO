import Link from "next/link";
import cookie from 'js-cookie';
import useSWR from 'swr';
export default function Header() {
    const { data, revalidate } = useSWR('/api/me', async function (args) {
        const res = await fetch(args);
        return res.json();
    });
    if (!data) return <h1>Загрузка...</h1>;
    let loggedIn = false;
    if (data.password) {
        loggedIn = true;
    }

    return (

        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <div className="header__logo">
                        <a href="/">CaseGO</a>
                    </div>

                    <nav>
                        {data.isAdmin &&
                            <Link href="/admin-panel">
                                <a> Админ-панель </a></Link>
                        }

                        {data.username && <span> Здраствуйте, {data.username}
                            <button
                                onClick={() => {
                                    cookie.remove('token');
                                    revalidate();
                                }}>
                                (Выйти)
                                        </button>
                        </span>}
                        <Link href="/sign">
                            <a className="nav__link"> Войти</a>
                        </Link>

                    </nav>

                </div>

            </div>
        </header>
    )
}