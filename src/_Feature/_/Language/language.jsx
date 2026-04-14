import React from "react";

function Language(props){

    return (
        <>
        return (
    <table border="1">
      <thead>
        <tr>
          <th>#</th>
          <th>Language</th>
        </tr>
      </thead>

      <tbody>
        {props.Arry.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
        </>
      );
}

export default Language;