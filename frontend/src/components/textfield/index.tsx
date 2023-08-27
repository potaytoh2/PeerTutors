import React, { useState } from 'react';

type LoginProps = {
  onUsernameChange: (newUsername: string) => void;
  onPasswordChange: (newPassword: string) => void;
};

export default function Login(props:LoginProps) {
  const [password, setPasswordState] = useState('');
  const [username, setUsernameState] = useState('');
  
  const handleUserChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setUsernameState(value);
    props.onUsernameChange(value); //
  };

  const handlePassChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setPasswordState(value);
    props.onPasswordChange(value)
  };

  return (
    <div className="md:container md:mx-auto flex justify-center w-full h-full">
      <form className ="w-6/12 h-6/12">
        <input
          value={username}
          onChange={handleUserChange}
          name="userID"
          type="text"
          placeholder="Email Address"
          className="h-1/12 w-full bg-gray-200 p-2 border-sky-300 border-t-2"
        />
        <br /><br />
        <input
          value={password}
          onChange={handlePassChange}
          type="password"
          name="password"
          placeholder="Password"
          className="h-1/12 w-full bg-gray-200 p-2 border-sky-300 border-t-2"
        />
      </form>
    </div>
  );
}
