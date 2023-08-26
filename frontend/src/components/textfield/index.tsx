import React, { useState } from 'react';

export default function Login() {
  const [formState, setFormState] = useState({});

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormState((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="md:container md:mx-auto flex justify-center">
      <form>
        <input
          value={formState.userID || 'UserID'}
          onChange={handleChange}
          name="userID"
          type="text"
          className="h-20 w-96 bg-gray-100 p-2 border-lime-800 border-t-2"
        />
        <br /><br />
        <input
          value={formState.password || 'Password'}
          onChange={handleChange}
          type="password"
          name="password"
          className="h-20 w-96 bg-gray-100 p-2 border-lime-800 border-t-2"
        />
      </form>
    </div>
  );
}
