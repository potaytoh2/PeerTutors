import React, { useState } from 'react';

export default function Login() {
  const [formState, setFormState] = useState({ userID: '', password: '' });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormState((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="md:container md:mx-auto flex justify-center w-full h-full">
      <form className ="w-6/12 h-6/12">
        <input
          value={formState.userID}
          onChange={handleChange}
          name="userID"
          type="text"
          placeholder="Email Address"
          className="h-1/12 w-full bg-gray-200 p-2 border-sky-300 border-t-2"
        />
        <br /><br />
        <input
          value={formState.password}
          onChange={handleChange}
          type="password"
          name="password"
          placeholder="Password"
          className="h-1/12 w-full bg-gray-200 p-2 border-sky-300 border-t-2"
        />
      </form>
    </div>
  );
}
