import React from 'react';

const TableComponent = () => {
  const data = [
    { id: 1, name: 'John', age: 28 },
    { id: 2, name: 'Jane', age: 32 },
    { id: 3, name: 'Mark', age: 25 },
  ];

  return (
    <table border="1" style={{ width: '50%', textAlign: 'left' }}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.name}</td>
            <td>{row.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
