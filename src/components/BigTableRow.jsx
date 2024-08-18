import { memo, useCallback, useMemo, useState } from "react";
import BigTableRowEditMode from "./BigTableRowEditMode";

const BigTableRow = memo(
  ({ user, id, onChange }) => {
    console.count("RENDERING BigTableRow");

    const [editMode, setEditMode] = useState(false);

    const tds = !editMode ? (
      <>
        <td>{user.name.first}</td>
        <td>{user.username}</td>
        <td>{user.password}</td>
        <td>{user.phoneNumber}</td>
        <td>{user.website}</td>
      </>
    ) : (
      <BigTableRowEditMode user={user}></BigTableRowEditMode>
    );

    return (
      <tr>
        <td>
          <input type="checkbox" onClick={() => setEditMode(!editMode)}></input>
        </td>
        {!editMode ? (
          <>
            <td>{user.name.first}</td>
            <td>{user.username}</td>
            <td>{user.password}</td>
            <td>{user.phoneNumber}</td>
            <td>{user.website}</td>
          </>
        ) : (
          <BigTableRowEditMode
            user={user}
            index={id}
            onChange={onChange}
          ></BigTableRowEditMode>
        )}
      </tr>
    );
  },
  // });
  userEquality
);
function userEquality(oldVal, newVal) {
  return (
    oldVal.user.password === newVal.user.password &&
    oldVal.user.name.first === newVal.user.name.first &&
    oldVal.user.username === newVal.user.username &&
    oldVal.user.phoneNumber === newVal.user.phoneNumber &&
    oldVal.user.website === newVal.user.website &&
    oldVal.onChange === newVal.onChange
  );
}

export default BigTableRow;
