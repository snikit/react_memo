import { useEffect, useState } from "react";

const BigTableRowEditMode = ({ user, index, onChange }) => {
  const onValueChange = ({ target }) => {
    onChange({ ...user, [target.name]: target.value }, index);
  };

  return (
    <>
      <td>
        <input
          type="text"
          value={user.name.first}
          onChange={({ target }) =>
            onChange(
              {
                ...user,
                name: { ...user.name, first: target.value },
              },
              index
            )
          }
        ></input>
      </td>
      <td>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={onValueChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          name="password"
          value={user.password}
          onChange={onValueChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          name="phoneNumber"
          value={user.phoneNumber}
          onChange={onValueChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          value={user.website}
          name="website"
          onChange={onValueChange}
        ></input>
      </td>
    </>
  );
};

export default BigTableRowEditMode;
