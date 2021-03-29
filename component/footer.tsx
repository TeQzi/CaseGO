import Link from "next/link";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__container">
                    <div className="footer__copyright">
                        <div className="footer__copyright-title"> Связь: asdkl@mail.ru </div>
                        <div className="footer__copyright-text"> На нашем сайте вы можете открыть различные
                        кейсы CS:GO по самым выгодным ценам. </div>
                    </div>
                    <div className="footer__nav">
                        <nav>
                            <Link href="/terms-of-use">
                                <a className="nav__link">Пользовательское соглашение</a>
                            </Link>

                            <Link href="/corp-info">
                                <a className="nav__link">Корпоротивная информация</a>
                            </Link>
                        </nav>
                    </div>


                </div>



            </div>
        </footer>
    )
}
