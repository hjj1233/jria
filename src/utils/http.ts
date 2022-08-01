import { response } from "@umijs/deps/compiled/express";
import qs from "qs";
import * as auth from "../auth-provider";

const apiURl = process.env.REACT_APP_API_URL;

interface Config extends RequestInit {
  data: Object;
  token: string;
}

export const http = async (
  endpoint: string,
  { data, token, headers, ...customConfigs }: Config
) => {
  const config = {
    method: "GET",
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
      "Content-Type": data ? "application/json" : "",
    },
    ...customConfigs,
  };
  if (config.method.toUpperCase() === "GET") {
    endpoint = endpoint + `?${qs.stringify(data)}`;
  } else {
    config.body = JSON.stringify(data || {});
  }
  return window.fetch(`${apiURl}/${endpoint}`, config).then(async (res) => {
    if (res.status === 401) {
      await auth.logout();
      window.location.reload();
      return Promise.reject({ message: "请重新登录" });
    }
    const data = await response.json();
    if (res.ok) {
      return data;
    } else {
      return Promise.reject(data);
    }
  });
};
