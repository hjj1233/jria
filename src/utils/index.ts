import React, { useEffect, useState } from "react";
export const isFalsy = (value: unknown) => (value === 0 ? false : !value);
//在一个函数里，改变传入的对象本身是不存在的
export const cleanObject = (object: Object) => {
  //Object.assign({},object)
  const result = { ...object };
  Object.keys(object).forEach((key) => {
    //0
    //@ts-ignore
    const value = object[key];
    if (isFalsy(value)) {
      //@ts-ignore
      delete result[key];
    }
  });
  return result;
};

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};

export const useDebounced = <V>(value: V, delay?: number) => {
  const [debouncedParamValue, setDebouncedParamValue] = useState(value);

  useEffect(() => {
    // 每次在value变化以后，设置一个定时器
    const tirm = setTimeout(() => setDebouncedParamValue(value), delay);
    // 每次在上一个useEffect处理完以后在运行
    return () => clearTimeout(tirm);
  }, [value, delay]);
  return debouncedParamValue;
};
