import React, { useState } from 'react';

const UserForm = ({ addUser }) => {
  const [user, setUser] = useState({ name: '', email: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.name.trim() === '' || user.email.trim() === '') return;

    addUser(user);
    setUser({ name: '', email: '' });
  };

  return (
    <div className="user-form">
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            placeholder="Enter name"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default UserForm;
