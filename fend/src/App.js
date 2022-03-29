
import React, { useState, useEffect } from 'react';

import './App.css';
import { getList } from './getList.js'

function App() {

  const [list, setList] = useState([]);

  useEffect(() => {
    let mounted = true;
    getList().then(items => {
      if (mounted) {
        setList(items);
      }
    })
    return () => mounted = false;
  }, []);

  console.log("list==== ", list)
  return (
    <div className="wrapper">
      <table>
        <thead>
          <tr>
            <th>Current players</th>
            <th>Hole</th>
            <th>Location</th>
          </tr>
        </thead>

        <tbody>
          {
            list.map((el, indx) => {
              return <tr key={indx}>
                <td>{el.FirstName} {el.LastName}</td>
                <td>{el.Hole} </td>
                <td>{el.HoleLocation}</td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default App;
