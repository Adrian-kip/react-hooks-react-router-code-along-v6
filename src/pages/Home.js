import { useState, useEffect } from 'react';
import UserCard from '../components/UserCard';
import NavBar from '../components/NavBar';

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/users')
      .then(r => r.json())
      .then(data => setUsers(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        {users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </main>
    </>
  );
}

export default Home;