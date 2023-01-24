import { useParams } from "react-router-dom";

function Coin() {
  //const params = useParams();
  //console.log(params);
  const { coinId } = useParams();
  console.log(coinId);
  return <h1>Coin: {coinId}</h1>;
}
export default Coin;
