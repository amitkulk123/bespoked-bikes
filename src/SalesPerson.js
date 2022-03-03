import { useState, useEffect } from 'react';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from './firebase-config';

const SalesPerson = () => {

    // const [newFirstName, setNewFirstName] = useState("");
    // const [newLastName, setNewLastName] = useState("");
    // const [newAddress, setNewAddress] = useState("");
    // const [newPhone, setNewPhone] = useState("");
    // const [newStartDate, setNewStartDate] = useState("");
    // const [newTermDate, setNewTermDate] = useState("");
    // const [newManager, setNewManager] = useState("");
    // const [users, setUsers] = useState([]);
    // const usersCollectionRef = collection(db, "users")


    // const createSalesPerson = async() => { 
    //     if (newFirstName == "" || newLastName == "" || newAddress == "" || newPhone == "" || newStartDate == "" || newTermDate == "" || newManager == "") {
    //     alert("One of your inputs is/are null. Please fill out all inputs");
    //     } 
    //     else {
    //     // This will add a new user 
    //     await addDoc(usersCollectionRef, { 
    //         firstName: newFirstName, 
    //         lastName: newLastName,
    //         address: newAddress,
    //         phone: newPhone,
    //         startDate: newStartDate,
    //         termDate: newTermDate,
    //         manager: newManager      
    //     });
    //     }
    // }

    // const updateUser = async(id, age) => {
    //   const userDoc = doc(db, "users", id)
    //   const newFields = { age: age + 1 }
    //   await updateDoc(userDoc, newFields);
    // };

    // const deleteUser = async (id) => {
    //     const userDoc = doc(db, "users", id);
    //     await deleteDoc(userDoc);
    // }


    return (
        <div className="SalesPerson">
            <input 
                placeholder="First Name" 
                // onChange={(event) => {
                // setNewFirstName(event.target.value);
                // }}

            />
            <input
                placeholder="Last Name"
                // onChange={(event) => {
                // setNewLastName(event.target.value);
                // }}
            />
            <input
                placeholder="Address"
                // onChange={(event) => {
                // setNewAddress(event.target.value);
                // }}
            />
            <input
                type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                placeholder="Phone ###-###-####"
                // onChange={(event) => {
                // setNewPhone(event.target.value);
                // }}
            />
            <input
                type="date"
                placeholder="Start Date"
                // onChange={(event) => {
                // setNewStartDate(event.target.value);
                // }}
            />
            <input
                type="date"
                placeholder="Termination Date"
                // onChange={(event) => {
                // setNewTermDate(event.target.value);
                // }}
            />
            <input
                placeholder="Manager"
                // onChange={(event) => {
                // setNewManager(event.target.value);
                // }}
            />
        </div>
    );
};

export default SalesPerson;