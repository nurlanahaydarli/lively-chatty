import { useEffect, useRef, useState } from "react";
import {
    query,
    collection,
    orderBy,
    onSnapshot,
    limit,
} from "firebase/firestore";
import { db } from "../../firebase";
import Message from "../Message/Message";
import SendMessage from "../Message/SendMessage";

const Chat=(props)=>{
    const [messages, setMessages] = useState([]);
    const scroll = useRef();
    console.log(scroll,'scroll')
    useEffect(() => {
        const q = query(
            collection(db, "messages"),
            orderBy("createdAt", "desc"),
            limit(50)
        );

        const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
            const fetchedMessages = [];
            QuerySnapshot.forEach((doc) => {
                fetchedMessages.push({ ...doc.data(), id: doc.id });
            });
            const sortedMessages = fetchedMessages.sort(
                (a, b) => a.createdAt - b.createdAt
            );
            setMessages(sortedMessages);
        });
        return () => unsubscribe;
    }, []);
    return(
        <>
            <main className="chat-box">
                <div className="messages-wrapper">
                    {messages?.map((message) => (
                        <Message key={message.id} message={message} />
                    ))}
                </div>
                <span ref={scroll} />
                <SendMessage scroll={scroll} />
            </main>
        </>
    )
}

export default Chat