export const isFalsy = (value) => (value === 0 ? false : !value);
//在一个函数里，改变传入的对象本身是不存在的
export const cleanObject = (object) => {
  //Object.assign({},object)
  const result = { ...object };
  Object.keys(object).forEach((key) => {
    //0
    const value = object[key];
    if (isFalsy(value)) {
      delete result[key];
    }
  });
  return result;
};
