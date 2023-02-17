import React, { useEffect, useState, useCallback } from 'react';
import { UserAuth } from "../context/AuthContext";
import { auth } from "../firebase";
import { db } from "../firebase"
import { query, where } from "firebase/firestore";
import { collection, doc, setDoc, getDocs, updateDo, addDoc, deleteDoc } from "firebase/firestore";


const useAllUsers = () => {
    const [users, setUsers] = useState([]);
    const [groups, setGroups] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const users = [];
            const collectionT = await getDocs(collection(db, "users"));
            collectionT.forEach(function (doc) {
                users.push({
                    email: doc.data().email
                });
            });
            setUsers(users);

            // Delete all documents in "Groups" collection
            const groupCollection = collection(db, "Groups");
            const groupDocs = await getDocs(groupCollection);
            groupDocs.forEach((doc) => deleteDoc(doc.ref));

            // Create subarrays of size 2
            const subarraySize = 2;
            const subarrays = [];
            for (let i = 0; i < users.length; i += subarraySize) {
                subarrays.push(users.slice(i, i + subarraySize));
            }

            // Add a new document to Firestore for each subarray
            subarrays.forEach(async (subarray) => {
                await addDoc(collection(db, 'Groups'), {
                    "members": subarray
                });
            });
        };
        fetchData();
    }, []);

    console.log(users.length);

    return users;
};

const AllUsers = () => {
    const users = useAllUsers();
    console.log(users);

    return (
        <div>
            {users.map((user, index) => (
                <div key={index}>{user.email}</div>
            ))}
        </div>
    );
};

export default AllUsers;
