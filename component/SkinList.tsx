function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

export default function CaseSpinning( {price, skins_list} ) {
    const handleClick = (e) => {
        const nameSkins = [];
        skins_list.map(({skin_name}) => nameSkins.push(skin_name));

        const winIndex = getRandomInt(skins_list.length);
        const winSkin = skins_list[winIndex];

        console.log("вы выиграли скин " + winSkin['skin_name'] + " за " + price + " руб.");
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