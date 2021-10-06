import React, { useState } from 'react'
import firebase from 'firebase'
import { firebaseConfig } from '../Firebase/config';
import './WriteStory.css'
import { useHistory } from "react-router-dom";
let db = firebase.firestore();

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
} else {
    firebase.app(); // if already initialized, use that one
}

export const WriteStory = () => {
    const history = useHistory();
    const [Name, setName] = useState("")
    const [Title, setTitle] = useState("")
    const [Story, setStory] = useState("")

    const list = "abcdefghijklnopqrstuvwxyz1234567890"
    const post = () => {
        let id = "_";
        for (var i = 0; i < 6; i++) {
            id += list[Math.floor(Math.random() * (list.length - 1))]
        }
        const data = {
            "id": id,
            "name": Name,
            "title": Title,
            "story": Story,
            "time": Date.now()
        }
        db.collection('stories').doc(id).set(data).then(() => {
            history.push("/");
        })

    }

    return (

        <div class="write-story">
            <div class="mid-write-area">
                <div>
                    <div>Name</div>
                    <input type="text" onChange={(name) => { setName(name.target.value) }} /></div>
                <div>
                    <div>Title</div>
                    <input type="text" onChange={(title) => { setTitle(title.target.value) }} /></div>
                <div>
                    <div>Story</div>
                    <textarea rows="10" cols="55" onChange={(story) => { setStory(story.target.value) }} /></div>
                <button onClick={() => { post() }}> Post</button>
            </div>
        </div>
    )
}
