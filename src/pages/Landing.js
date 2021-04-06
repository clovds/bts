import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { Button } from "reactstrap";
import {
  addChecklist,
  deleteChecklistAction,
  getChecklistAction,
} from "../redux/actions/checklistAction";
import { addItemAction } from "../redux/actions/checklistItemAction";

const Landing = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getChecklistAction());
  }, [dispatch]);
  const user = useSelector((state) => state.user);
  const { checklist } = useSelector((state) => state.checklist);
  const [name, setName] = useState("");
  const [itemName, setItemName] = useState("");

  const handleAddBtn = () => {
    if (name.length !== 0) {
      dispatch(addChecklist({ name }));
      setName("");
    } else {
      alert("Name cannot empty");
    }
  };

  const handleAddItemBtn = (value) => {
    if (itemName.length !== 0) {
      dispatch(addItemAction(value.id, itemName));
      setItemName("");
    } else {
      alert("Name cannot empty");
    }
  };

  const renderChecklist = () => {
    return checklist.map((val) => {
      return (
        <div style={{ marginTop: "7px" }}>
          <div style={{ display: "flex" }}>
            <div style={{ marginRight: "5px" }}>{val.name}</div>
            <div>
              <button onClick={() => dispatch(deleteChecklistAction(val.id))}>
                Delete
              </button>
            </div>
          </div>
          <ul>
            {val.items
              ? val.items.map((subval) => {
                  return <li>{subval.name}</li>;
                })
              : null}
          </ul>
          <div>
            <div>
              <input
                type="text"
                placeholder="add item"
                onChange={(e) => setItemName(e.target.value)}
              />
              <button onClick={() => handleAddItemBtn(val)}>add</button>
            </div>
          </div>
        </div>
      );
    });
  };

  if (user.token.length === 0) {
    return <Redirect to="/login" />;
  }
  return (
    <div>
      <div>Checklist</div>
      <div style={{ marginTop: "5px", marginBottom: "50px" }}>
        <div>Add Checklist</div>
        <div>
          <input
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <Button onClick={handleAddBtn}>Add</Button>
        </div>
      </div>
      <div>{renderChecklist()}</div>
    </div>
  );
};

export default Landing;
