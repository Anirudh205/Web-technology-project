import React, { useState } from 'react'
import firebase from "firebase"
import { firebaseConfig } from '../../Firebase/config';


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
} else {
    firebase.app();
}


export const Card = (props) => {
    const [Trim, setTrim] = useState(true)
    const [Input, setInput] = useState(false)
    const [InputValue, setInputValue] = useState("")

    const sendData = () => {
        const data = {
            "comment": InputValue
        }
        firebase.firestore().collection('stories').doc(props.id).collection("comment").add(data).then(() => {
            // history.push("/");
            alert("Your Comment is been Saved")
        })
    }


    return (
        <div className="card card2">
            <img src="https://myrepublica.nagariknetwork.com/uploads/media/android.png" height="200" width="200" alt="..." />
            <div className="card-body">
                <h3 className="card-title">Title : {props.title}</h3>
                <h5 className="card-title">Name : {props.name}</h5>
                {
                    Trim ? <p class="card-text">Story : {props.story.slice(0, 70) + " ..."}</p> : <p class="card-text">Story : {props.story}</p>
                }
                <button className="btn btn-primary" style={{ cursor: 'pointer' }} onClick={() => { Trim ? setTrim(false) : setTrim(true) }}>Read More...</button>
                <div onClick={() => setInput(true)} style={{ cursor: 'pointer' }} >Comment</div>
                {
                    Input ? <><input onChange={(text) => { setInputValue(text.target.value) }} /><button onClick={() => { sendData() }}>Comment</button></> : <></>
                }
                {
                    console.log(props.comment)
                    // props.comment !== undefined || props.comment !== [] ?
                    //     props.comment.map((e) =>
                    //         console.log(e)

                    //     ) : <></>
                }
            </div>
        </div>
    )
}
