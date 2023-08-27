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
    <div className="md:container md:mx-auto flex justify-center">
      <form>
        <input
          value={username}
          onChange={handleUserChange}
          name="userID"
          type="text"
          className="h-20 w-96 bg-gray-100 p-2 border-lime-800 border-t-2"
        />
        <br /><br />
        <input
          value={password}
          onChange={handlePassChange}
          type="password"
          name="password"
          className="h-20 w-96 bg-gray-100 p-2 border-lime-800 border-t-2"
        />
      </form>
    </div>
  );
}
