import React from "react";

export function showMatches(currentData, newData, leadType) {
  // console.log("All New Leads", newData);
  return (
    <table className="SystechTable">
      <thead>
        <tr>
          <th>New {leadType}</th>
          <th>Existing {leadType}</th>
        </tr>
      </thead>
      <tbody>{showMatchesRows(currentData, newData)}</tbody>
    </table>
  );
}

function emailDomain(email) {
  return email.slice(email.indexOf("@")) + 1;
}

function showMatchesRows(currentData, newData) {
  return newData.map(newEmail => {
    // console.log("New Email", newEmail);
    let matches = currentData.find(currentEmail => {
      return emailDomain(newEmail) == emailDomain(currentEmail);
    });
    if (matches) {
      return (
        <tr>
          <td>{newEmail}</td>
          <td>{matches} </td>
        </tr>
      );
    } else {
      return null;
    }
  });
}
