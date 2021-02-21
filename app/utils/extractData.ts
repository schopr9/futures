import SortedArrayMap from 'collections/sorted-array-map';

const newSortedMapAsks = new SortedArrayMap();
const newSortedMapBids = new SortedArrayMap();

function extractData(futures: Array<Array<number>>, sortedMap: object) {
  for (const [price, size] of futures) {
    //object[price] = size === 0 ? undefined : size;
    if (size === 0) {
      sortedMap.delete(price);
    } else {
      sortedMap.add(size, price);
    }
  }
}

function parsePayload(
  payload: string,
  asksPrev: Array<object>,
  bidsPrev: Array<object>,
) {
  const parsedPayload = JSON.parse(payload);
  let asks: Array<object> = [...asksPrev];
  let bids: Array<object> = [...bidsPrev];
  if (parsedPayload.asks?.length) {
    extractData(parsedPayload.asks, newSortedMapAsks);
    asks = getTotal(newSortedMapAsks).reverse();
  }
  if (parsedPayload.bids?.length) {
    extractData(parsedPayload.bids, newSortedMapBids);
    bids = getTotal(newSortedMapBids);
  }

  return {
    asks,
    bids,
  };
}

function getTotal(sortedMap: object) {
  const keys = Array.from(sortedMap.keys()).slice(sortedMap.length - 10);
  let total = 0;
  return keys.map((price) => {
    const size = sortedMap.get(price);
    total += size;
    return {
      price,
      size,
      total,
    };
  });
}

export { parsePayload };
