import { useState } from "react";

function ChildComponent(props){
    return <p>Receive prop from Parent: {props.message}</p>;
}

export default function ParentComponent(){
    const [message,setMessage] = useState('Hello from Parent');

    const updateMessage = () =>{
        setMessage('New message from Parent');
    };

    return(
        <div>
            <ChildComponent message = {message} />

            <button onClick={updateMessage}>Update Message</button>
        </div>
    );
};