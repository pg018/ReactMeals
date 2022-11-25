import * as firebase from '@firebase/app';
import { getFirestore, getDocs, collection, getDoc, where, doc, addDoc, Firestore } from 'firebase/firestore/lite';
import { RegistrationCredentialsType } from '../types/Login/authenticationTypes';

const firebaseConfig = {
    apiKey: "AIzaSyDA48W1eJEQ5gjASSk83vj_hPIWDDw4I1c",
    authDomain: "food-order-c7bb3.firebaseapp.com",
    databaseURL: "https://food-order-c7bb3-default-rtdb.firebaseio.com",
    projectId: "food-order-c7bb3",
    storageBucket: "food-order-c7bb3.appspot.com",
    messagingSenderId: "532293057793",
    appId: "1:532293057793:web:4b45e12919a6e530492f00"
};

firebase.initializeApp(firebaseConfig);
export const db = getFirestore();

export const userCollectionRef = collection(db,"users");

export const getUserInfo = async (emailID:string) => {
    //let users:any[] = []
    // getDocs(userCollectionRef).then((snapshot)=>{
    //     snapshot.docs.forEach((doc)=>{
    //         users.push({...doc.data(),id:doc.id})
    //     })
    // })
    // console.log(users)

    const snapshot = await getDocs(userCollectionRef)
    const docs = snapshot.docs.map(doc => doc.data())
    const userData = docs.filter((user) => user.email == emailID)
    return userData;
    // console.log(userData[0])
}

export const storeNewUser = async (data:RegistrationCredentialsType) => {
    await addDoc(userCollectionRef,{
        email:data.email,
        name:data.name,
        phoneNumber:data.phoneNumber
    })
}