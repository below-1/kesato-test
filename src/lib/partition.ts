export default function partition<T>(items: Array<T>, n: number) {
  let result: Array<Array<T>> = [];
  let subresult: Array<T> = [];
  for (let i = 1; i <= items.length; i++) {
    subresult.push(items[i - 1]);
    if ((subresult.length % n) == 0) {
      result.push(subresult);
      subresult = [];
    }
  }
  if (subresult.length) {
    result.push(subresult);
  }
  return result;
}