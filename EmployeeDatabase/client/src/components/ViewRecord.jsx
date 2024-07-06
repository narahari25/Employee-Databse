// components/ViewRecord.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ViewRecord() {
  const { id } = useParams();
  const [record, setRecord] = useState(null);

  useEffect(() => {
    async function fetchRecord() {
      const response = await fetch(`http://localhost:5050/record/${id}`);
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        console.error(message);
        return;
      }
      const record = await response.json();
      setRecord(record);
    }
    fetchRecord();
  }, [id]);

  if (!record) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p>Name: {record.name}</p>
      <p>Position: {record.position}</p>
      <p>Contact No: {record.contactNo}</p>
      <p>Level: {record.level}</p>
    </div>
  );
}

export default ViewRecord;
