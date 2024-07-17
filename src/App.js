import React, { useState } from 'react';
import './App.css';

function App() {

const users = [
  { name: 'Kevin', age: 40 },
  { name: 'John', age: 17 },
  { name: 'David', age: 25 },
  { name: 'Samantha', age: 28 },
  { name: 'Matt', age: 21 },
  { name: 'Todd', age: 33 },
];

const [filteredUsers, setFilteredUsers] = useState(users); 

const handleFilter = (event) => {
  const value = event.target.value;
  const filtered = users.filter(user => user.name.includes(value));
  setFilteredUsers(filtered);
};

return (
  <div>
    <input type="text" onChange={handleFilter} />
    {filteredUsers.map(user => (
      <div key={user.name}>
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
      </div>
    ))}
  </div>
);

}

export default App;
