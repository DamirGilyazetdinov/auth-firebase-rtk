import React from 'react';
import { useState } from 'react';

interface IFormProps {
    title: string;
    onClick: (email: string, pass: string) => void;
}

const Form: React.FC<IFormProps> = ({ title, onClick }) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    return (
        <div>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} placeholder="Password" />
            <button onClick={() => onClick(email, pass)}>{title}</button>
        </div>
    );
};

export { Form };
