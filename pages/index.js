import Head from 'next/head'
import { PrismaClient } from "@prisma/client";
import Link from 'next/link'
import Image from 'next/image'
import Header from '../component/header'
import Footer from '../component/footer'

export async function getStaticProps() {
  const prisma = new PrismaClient()
  const Cases = await prisma.cases.findMany();
  return {
    props: { Cases }
  }
}


export function CaseItem({ Cases }) {
  return (
    <ul className="list__cases">
      {Cases.map(({ id, name, shortname, price }) =>
        <li key={id.toString()} className="case__item">
          <Link href={"/case/" + shortname} >
            <a>
              <span className="case__img">
                <span className="case__img__inner">
                  <Image
                    src={"/assets/cases/" + id + ".webp"}
                    alt={shortname}
                    className="img"
                    width={180}
                    height={150}
                  />
                </span>
              </span>
              <div className="text__fields">            
              <span className="case__name">{name}</span>
              <span className="case__price">{price + " руб."}</span></div>

            </a>
          </Link>
        </li>
      )}
    </ul>
  );
}

export default function Home({ Cases }) {
  return (
    <>
    <Head> 
      <link rel="shortcut icon" href="/favicon.png" />
    </Head>
      <Header />
      <div className="container">
        <div className="intro-inner">
          <h1 className="intro__title"> СТАНДАРТНЫЕ КЕЙСЫ </h1>

        </div>
        <section className="intro__cases">
          <CaseItem Cases={Cases} />
        </section>
      </div>);
      <Footer />
    </>
  )
}
