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


export function CaseItem({ id, name, shortname, price }) {
  const caseName = name;
  const fileName = "/assets/" + id + ".webp";
  const way = "/case/" + shortname;

  return (

    <li className="case__item" key={id}>
      <Link href={way} >
        <a>
          <span className="case__img">
            <span className="case__img__inner">
              <Image
                src={fileName}
                alt={shortname}
                className="img"
                width={180}
                height={150}
              />
            </span>
          </span>
          <span className="case__name">{caseName}</span>
          <span className="case__price">{price}</span>
        </a>
      </Link>
    </li>
  );
}

export default function Home({ Cases }) {
  return (
    <>
    <Header></Header>
    <div className="container">
      <div className="intro-inner">
        <h1 className="intro__title"> СТАНДАРТНЫЕ КЕЙСЫ </h1>

      </div>
      <section className="intro__cases">
        <ul className="list__cases">
          {Cases.map(({ id, name, shortname, price }) =>
            <CaseItem id={id} name={name} shortname={shortname} price={price} />
          )}
        </ul>
      </section>
    </div>);
    <Footer></Footer>
    </>
  )
}
