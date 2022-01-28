import { helper } from '@ember/component/helper';

export default helper(function currency(positional, named = {}) {
  const [number] = positional;
  const { sign = '$' } = named;

  const dollars = Math.floor(number);
  let cents = Math.floor((number * 100) % 100);

  if (cents.toString().length === 1) {
    cents = `0${cents}`;
  }

  return `${sign}${dollars}.${cents}`;
});
