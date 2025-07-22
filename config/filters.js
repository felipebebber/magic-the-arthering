// const Base = 'not:meld+not:split+-st:funny+-st:vanguard+not:flip+not:token:not:transform';

const ConfigBase = {
  not: ['meld', 'split', 'funny', 'flip', 'token', 'transform', 'dfc', 'mdfc', 'mtgo'],
  stN: ['funny', 'vanguard', 'memorabilia', 'plane', 'scheme', 'phenomenon', 'token'],
};

const Base = (function () {
  let base = '';
  let operator = '';
  let keyRef = '';

  for (const [key, value] of Object.entries(ConfigBase)) {
    keyRef = key;
    operator = '+';

    if (key === 'stN') {
      operator = '+-';
      keyRef = 'st';
    }
    if (key === 'stP') {
      keyRef = 'st';
    }

    value.map(function (item) {
      base += `${operator}${keyRef}:${item}`;
    });
  }

  console.log(base);

  return base;
})();

const GetFilterExtra = function (ref) {
  // return `${ref}+${Base}`
  return `${ref}`;
};

const Filters = {
  random: `${GetFilterExtra('-c:m')}`,
  red: `${GetFilterExtra('-c:m+c:r')}`,
  blue: `${GetFilterExtra('-c:m+c:u')}`,
  black: `${GetFilterExtra('-c:m+c:b')}`,
  green: `${GetFilterExtra('-c:m+c:g')}`,
  white: `${GetFilterExtra('-c:m+c:w')}`,
  colorless: `${GetFilterExtra('-c:m+c:c+-t:land')}`,
  multicolored: `${GetFilterExtra('c:m')}`,
  land: `${GetFilterExtra('t:land')}`,
};

export default Filters;
