import { useState } from "react";
import React from "react"

import InputFun from './input.js';

function ListItem(props) {


    //conditional rendering
    const [allowEdit, setallowEdit] = useState(false);

    const [changedName, setChangedName] = useState(props.name);
    const [changedEmail, setChangedEmail] = useState(props.email);

    const clickDel = () => {
        let index = props.index;
        props.delItem(index);

    }

    const editHere = () => {
        setallowEdit(true);

    }

    const captureInp = (e) => {
        setChangedName(e.target.value);
    }


    const captureEmail = (e) => {
        setChangedEmail(e.target.value);
    }

    const changeEdit = () => {
        props.edit(props.index,{ name: changedName, email: changedEmail });



    }

    const truecode = <div>

        <lable for="inp"></lable>
        <input type="text" id="inp" value={changedName} placeholder={props.name} onChange={captureInp} />
        <input type="email" id="email" value={changedEmail} placeholder={props.email} onChange={captureEmail} />

        <button onClick={() => { changeEdit(); setallowEdit(false) }}>Confirm</button>
    </div>

    const falsecode = <div>{props.name} Email {props.email}

        <button onClick={clickDel}>Delete</button>

        <button onClick={editHere}>edit</button></div>

    return (
        <>
            {allowEdit ? truecode : falsecode}

        </>
    );
}
export default ListItem;