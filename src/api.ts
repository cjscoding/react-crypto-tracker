const BASE_URL = `https://api.coinpaprika.com/v1`;

// data Promise 객체로 반환
export function fetchCoins() {
  return fetch(`${BASE_URL}/coins`).then((res) => res.json());
}

export function fetchCoinInfo(coinId: string) {
  return fetch(`${BASE_URL}/coins/${coinId}`).then((res) => res.json());
}

export function fetchCoinTickers(coinId: string) {
  return fetch(`${BASE_URL}/tickers/${coinId}`).then((res) => res.json());
}

export function fetchCoinHistory(coinId: string) {
  return fetch(
    `https://ohlcv-api.nomadcoders.workers.dev/?coinId=${coinId}`
  ).then((res) => res.json());
}
