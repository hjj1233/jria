import { useState, useEffect } from "react";

export interface Users {
  name: string;
  id: number;
  // personId:number
}

interface SearchPanelProps {
  users: Users[];
  param: {
    name: string;
    personId: string;
  };
  setParam: (param: SearchPanelProps["param"]) => void;
}

export const SearchPanel = ({ param, setParam, users }: SearchPanelProps) => {
  return (
    <form>
      <div>
        <input
          value={param.name}
          onChange={(val) => setParam({ ...param, name: val.target.value })}
        />
        <select
          value={param.personId}
          onChange={(val) =>
            setParam({
              ...param,
              personId: val.target.value,
            })
          }
        >
          <option value="">负责人</option>
          {users.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};
