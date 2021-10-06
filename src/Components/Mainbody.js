import React, { useEffect, useState } from 'react'
import './Mainbody.css'
import firebase from "firebase"
import { firebaseConfig } from '../Firebase/config'
import { Card } from './SubComponents/Card'

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
} else {
    firebase.app();
}



export const Mainbody = () => {
    const [Data, setData] = useState([])


    async function getMarker() {
        const snapshot = await firebase.firestore().collection('stories').get()
        return snapshot.docs.map(doc => doc.data());
    }

    async function getComments(id) {
        const snapshot2 = await firebase.firestore().collection('stories').doc(id).collection('comment').get()
        return snapshot2.docs.map(doc => doc.data());
    }

    useEffect(() => {
        getMarker().then((result) => {
            setData(result)
        })
    }, [])



    return (
        <div className="mainbody">
            <div className="mainbody-mid">
                {
                    Data.map((e) => {
                        console.log(e)
                        getComments(e.id).then((result) => {
                            console.log(result)
                            // console.log(_com)
                            // console.log(Comment)
                        })
                        return (
                            <Card name={e.name} story={e.story} title={e.title} id={e.id} />
                        )
                    })
                }
            </div>
        </div>
    )
}


