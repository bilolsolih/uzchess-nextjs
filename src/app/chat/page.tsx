"use client";
import io from 'socket.io-client';
import {useEffect, useState} from "react";

const socket = io('http://10.10.0.130:8888', {extraHeaders: {authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywibG9naW4iOiJiaWxvbG11aGFtbWFkc29saWhAZ21haWwuY29tIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3NzU0NjIyNDcsImV4cCI6MTc3ODA1NDI0N30.v16EvT_xrD48iNTR0fN-IP3dqob18Kv1WMXJF-b1_Zc'}});

interface Message {
  id: number;
  userId: number;
  message: string;
  replyTo: number;
}

export default function ChatPage() {
  const [message, setMessage] = useState('');
  const [responses, setResponses] = useState<Message[]>([]);

  useEffect(() => {
    socket.on('uzchess-server', (data: Message) => {
      setResponses([...responses, data]);
      return () => socket.off('uzchess-server');
    });
  });

  const sendMessage = () => {
    socket.emit('uzchess-client', {message: message, replyTo: null});
    setMessage('');
  }

  return (
    <div>
      <input type="text" value={message} onChange={(e) => setMessage(e.target.value)}/>
      <button onClick={sendMessage}>Send Message</button>
      <div className={"flex flex-col gap-4 h-60 overflow-y-scroll min-w-200"}>
        {responses.map((response, index) => <p key={index} className={"w-180"}>{response.message}</p>)}
      </div>
    </div>
  );
}
