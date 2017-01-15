export const mergeObjects = (...args) => {
  const res = {};
  args.forEach(arg => arg && Object.assign(res, arg));
  return res;
};

export const capitalizeFirstLetter = str =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const makeTitle = str =>
  (str.charAt(0).toUpperCase() + str.slice(1)).replace(/-/g, ' ');


export const addState = (data, state) =>
  data.map(obj => obj && { ...obj, ...state });

// export const addUnits = (value, unit) =>
//   (value.toString() + unit);

export const addUnits = (value, unit) =>
  `${value + unit}`;
