import { useCallback, useState } from "react";
import userdata from "../data/user.json";
import BigTableHead from "./BigTableHead";
import BigTableRow from "./BigTableRow";

const HeadColumns = [
  "Checkbox",
  "Name",
  "Username",
  "Password",
  "Phone No",
  "Website",
];

import { useReducer } from "react";

function initialState() {
  return userdata.result;
}

function reducer(state, action) {
  switch (action.type) {
    case "edit":
      return state.map((thiuser, i) => {
        if (i == action.index) {
          return {
            ...thiuser,
            ...action.newValue,
          };
        } else {
          return thiuser;
        }
      });
  }
}

const BigTable = () => {
  // const [users, setUsers] = useState(userdata.result);
  const [users, dispatch] = useReducer(reducer, initialState());

  const onChange = useCallback(
    (newValue, index) => {
      dispatch({
        type: "edit",
        newValue,
        index,
      });
    },
    [dispatch]
  );

  const usernames = users.map((user, index) => (
    <BigTableRow key={index} id={index} user={user} onChange={onChange} />
  ));
  return (
    <>
      <table>
        <thead>
          <BigTableHead columns={HeadColumns}></BigTableHead>
        </thead>
        <tbody>{usernames}</tbody>
      </table>
    </>
  );
};

export default BigTable;
