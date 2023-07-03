import { useParams } from "react-router-dom";

interface RouterParms {
    coinId:string
}

function Coin() {
    const { coinId } = useParams<RouterParms>();
    
    return <h1>Coin {coinId}</h1>;
}

export default Coin;