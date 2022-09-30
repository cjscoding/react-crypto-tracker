import { BrowserRouter, Route, Switch } from "react-router-dom";
import Coins from "./routes/Coins";
import Coin from "./routes/Coin";

// Route의 순서는 비교할 라우터 => 기본 라우터 순으로 작성해야 한다.
// 기본 라우터 (/) 부터 작성할 경우 비교할 라우터의 path에도 `/`가 들어있기 때문에 컴포넌트가 중복으로 보여지게 된다.
function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:coinId">
          <Coin />
        </Route>
        <Route path="/">
          <Coins />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
