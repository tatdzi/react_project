import React from "react";
import s from "./Dialog.module.css"
import Dialog from "./dialog/Dialog";
import Message from "./message/Message";


const Dialogs = (props) =>{
    let dialogElements = props.date.map
    (dialog =><Dialog name={dialog.name} id={dialog.id}/>)

    let messageElements = props.date1.map
    (messag =><Message message={messag.message}/>)

    return(
        <div className={s.dialogsPage}>
            <div className={s.dialogs}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    )
}
export default Dialogs