import React, { useState } from 'react';
// Correct the folder path, you wrote 'component' instead of 'components'

const CreateUser: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSubmit = () => {
        if (username && email && password) {
            console.log({ username, email, password });
        }
    };

    return (
        <div>
            <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleSubmit}>Create User</button>
        </div>
    );
};

export default CreateUser;
