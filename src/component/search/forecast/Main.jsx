import React, { useState, useEffect } from 'react';

const Mian = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const result = await response.json();
        setData(result);
        console.log(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }

     
    };

    fetchData();
  }, []); // The empty dependency array ensures that useEffect runs only once (on mount)

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Mian;
