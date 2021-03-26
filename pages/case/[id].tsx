
import { PrismaClient } from "@prisma/client";
import Image from 'next/image';
import CaseSpining from '../../component/SkinList'
import Footer from '../../component/footer'
import Header from "../../component/header";

const prisma = new PrismaClient()

export function getAllPostIds(Cases) {

    return Cases.map(fileName => {
        return {
            params: {
                id: fileName.shortname,
                price: fileName.price
            }
        }
    })
}


export async function getStaticProps({ params }) {
    const caseInfo = await prisma.cases.findMany({
        where: {
            'shortname': params.id
        }
    });
    const skinList = await prisma.skins.findMany({
        where: {
            'case_id': caseInfo[0].id
        }
    })
    console.log(skinList)
    return {
        props: { caseInfo, skinList }
    }
}

export async function getStaticPaths() {
    const Cases = await prisma.cases.findMany();
    const pathsAll = getAllPostIds(Cases)
    const paths = pathsAll.map((path) => {
        delete path['params'].price
        return path

    })

    return {
        paths,
        fallback: false
    }
}

function getSkinsBg(rare) {
    if (rare === "1") {
        return "item--milspec"
    }
    else if (rare === 2) {
        return "item--restricted"
    }
    else if (rare === 3) {
        return "item--classified"
    }
    else if (rare === 4) {
        return "item--covert"
    }
    else if (rare === 5) {
        return "item--knife"
    }
}



export default function Post({ caseInfo, skinList }) {
    const casename = caseInfo[0]['name'];
    const price = caseInfo[0]['price'];

    let skin;

    // Узнать как надо узнать длинну массива чтобы 
    if (skinList) {
        skin = skinList.map(({ id, skin_name, rare }) => {
            const img = '/assets/skins/' + id + '.png';
            const skinInfo = skin_name.split("|");
            const gunName = skinInfo[0];
            const skinName = skinInfo[1];

            const className = getSkinsBg(rare);
            
            return (
                <li key={id} className="items">
                    <div className={className}>
                        <Image
                            src={img}
                            alt={skin_name}
                            className="item__img"
                            width={170}
                            height={130}>
                        </Image>
                        <span className="gun__name"> {gunName} </span>
                        <span className="skin__name"> {skinName} </span>
                    </div>
                </li>
            );
        })

    }
    else{
        skin = <h1 className="content__case"> Содержимое кейса временно недоступно </h1>
    }


    return (
        <>
        <Header></Header>
        <div className="main__field">
            <div className="container">
                <div className="opencase__field">
                    <h1 className="case__name_"> {casename} </h1>
                    <div className="display__opening">
                        <span className="image"> <img src="/assets/1.webp" alt="" /> </span>
                    </div>


                    <div className="open__case">
                        <CaseSpining
                            price={price}
                            
                        />
                    </div>

                    <div className="list__items">
                        <h2 className="content__case">Содержимое кейса: </h2>

                        <ul className="list">
                            {skin}

                        </ul>
                    </div>

                </div>
            </div>
        </div>
        <Footer></Footer>
    </>
    );
}
