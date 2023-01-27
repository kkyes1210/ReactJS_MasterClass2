import { useQuery } from "react-query";
import { useOutletContext } from "react-router-dom";
import { fetchCoinHistory } from "../api";

interface IProp {
  coinId: string;
}
function Chart() {
  const { coinId } = useOutletContext<IProp>();
  console.log(coinId);
  const { isLoading, data } = useQuery(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId)
  );
  return <h1>Chart</h1>;
}
export default Chart;
