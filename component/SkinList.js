export default function CaseSpinning( {price} ) {
    const handleClick = (e) => {
        console.log(e);
        // const nameSkins = [];
        // listSkins.map(({skinname}) => nameSkins.push(skinname));

        // const winIndex = getRandomInt(listSkins.length);
        // const winSkin = listSkins[winIndex];

        // console.log("вы выиграли скин " + winSkin['skinname']);
    }

    return (
        <div className="b-popup">

            <button className="open__button"
                onClick={handleClick}>
                Открыть за {price} руб.
            </button>
        </div>
    );
} 