import { useState, useEffect } from 'react';

export default function useFetchUsers() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  
  const fetchUsers = async (pageSize = 10) => {
    try {
      const response = await fetch(`https://randomuser.me/api/?page=${page}&results=${pageSize}`);
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.log("Error: ", error.message)
    }
  };
  
  useEffect(() => {

    fetchUsers();
  }, [page]); 

  const nextPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  const prevPage = () => {
    setPage(prevPage => Math.max(prevPage - 1, 1));
  };
  
  return { users: users.results || [], nextPage, prevPage, page } ;
}