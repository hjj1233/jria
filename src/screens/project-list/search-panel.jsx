import { useState, useEffect } from "react";
export const SearchPanel = ({ param, setParam, users }) => {
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
