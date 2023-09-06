import React, { useState } from 'react';
import UserForm from './Component/UserForm';
import UserList from './Component/UserList';

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div>
      
      <div className="container">
        <UserForm addUser={addUser} />
        <UserList users={users} />
      </div>
    </div>
  );
}

export default App;
