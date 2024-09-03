import React, { useEffect, useRef } from "react";
import { Trash } from "../icons/trash";

export const NoteCard = ({ note }) => {
    let position = JSON.parse(note.position);
    const colors = JSON.parse(note.colors);
    const body = JSON.parse(note.body);
    const textAreaRef = useRef(null)

    useEffect(()=>{
        autoGrow(textAreaRef)
    },[])

    function autoGrow(textAreaRef) {
        const { current } = textAreaRef;
        current.style.height = "auto"; 
        current.style.height = current.scrollHeight + "px"; 
    }
 
    return (
        <div
            className="card"
            style={{
                backgroundColor: colors.colorBody,
                left: `${position.x}px`,
                top: `${position.x}py`
            }}

        >
            {body}
            
            <div className="card-header"
            style={{color: colors.colorHeader}}>
              <Trash />  

            </div>
            
            
            
            <div className="card-body">
                <textarea 
                style={{color:colors.colorText}}
                defaultValue={body}
                ref={textAreaRef}
                onInput={() => {
                    autoGrow(textAreaRef);
               }}
                ></textarea>
            </div>

        </div>
    );
};
 