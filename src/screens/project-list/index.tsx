import { useState, useEffect } from "react";
import { cleanObject, useMount, useDebounced } from "../../utils";
import { List } from "./list";
import { SearchPanel } from "./search-panel";
import * as qs from "qs";
import { useHttp } from "utils/http";
const apiURl = process.env.REACT_APP_API_URL;

export const ProjectList = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const [users, setUsers] = useState([]);
  const [list, setList] = useState([]);
  const debouncedParam = useDebounced(param, 200);
  const client = useHttp();
  useEffect(() => {
    client("projects", { data: cleanObject(debouncedParam) }).then(setList);
    // fetch(
    //   `http://localhost:3002/projects?name=${param.name}&personId=${param.personId}`
    // ).then(async (response) => {
    //   if (response.ok) {
    //     setList(await response.json());
    //   }
    // });
    // fetch(
    //   `http://localhost:3002/projects?${qs.stringify(
    //     cleanObject(debouncedParam)
    //   )}`
    // ).then(async (response) => {
    //   if (response.ok) {
    //     setList(await response.json());
    //   }
    // });
  }, [debouncedParam]);

  useMount(() => {
    client("users").then(setUsers);
    // fetch(`http://localhost:3002/users`).then(async (response) => {
    //   if (response.ok) {
    //     setUsers(await response.json());
    //   }
    // });
  });
  console.log("daasdsa");

  // useEffect(() => {
  //   fetch(`http://localhost:3002/users`).then(async (response) => {
  //     if (response.ok) {
  //       setUsers(await response.json());
  //     }
  //   });
  // }, []);
  return (
    <div>
      <SearchPanel param={param} setParam={setParam} users={users} />
      <List users={users} list={list} />
    </div>
  );
};
