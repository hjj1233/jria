// 在真实环境中，如果使用firebase这种第三方auth服务的话，本文件不需要开发者开发

import { Users } from "./screens/project-list/search-panel";

const localStorageKey = "__auth_provider_token__";

export const getToken = () => window.localStorage.getItem(localStorageKey);

export const handleUserResponse = ({ user }: { user: Users }) => {
  window.localStorage.setItem(localStorageKey, user.token || "");
};

export const login = (data: { userName: string; password: string }) => {
  fetch("http://localhost:3001/login", {
    method: "POST",
    headers: {
      "Content-Typea": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then(async (response) => {
      if (response.ok) {
        // return await response.json()
        return handleUserResponse(await response.json());
      } else {
        return Promise.reject(data);
      }
    })
    .catch((e) => {
      console.log(e);
      return Promise.reject("请求数据失败");
    });
};

export const register = (data: { userName: string; password: string }) => {
  fetch("http://localhost:3001/register", {
    method: "POST",
    headers: {
      "Content-Typea": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then(async (response) => {
      if (response.ok) {
        // return await response.json()
        return handleUserResponse(await response.json());
      } else {
        return Promise.reject(data);
      }
    })
    .catch((e) => {
      console.log(e);
      return Promise.reject("请求数据失败");
    });
};

export const logout = async () =>
  window.localStorage.removeItem(localStorageKey);
