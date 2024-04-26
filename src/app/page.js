'use client'

import useFetchUsers from "@/hooks/useFetchUsers";
import styles from "./page.module.css";
import Image from 'next/image'

export default function Home() {
  const { users, nextPage, prevPage, page } = useFetchUsers();
  return (
    <main className={styles.main}>
      <h1>Users</h1>
      <ul>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Number</th>
              <th>Profile Pic</th>
            </tr>
          </thead>
          <tbody>
            {users?.map(user => (
              <tr key={user.email}>
                <td>{user.name.first} {user.name.last}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <img
                    src={user?.picture?.thumbnail}
                    width={50}
                    height={50}
                    alt={user.name.first}
                  />
                </td>
              </tr>
            ))}
          </tbody>

        </table>
        <button onClick={prevPage}>{"<<"}</button>
        <button>{page}</button>
        <button onClick={nextPage}>{">>"}</button>
      </ul>
    </main>
  );
}
