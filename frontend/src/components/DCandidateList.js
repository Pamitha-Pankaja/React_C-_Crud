
import React, { useEffect, useState } from 'react';
import DCandidateService from '../services/DCandidateService';
import '../styles/DCandidateList.css'

const DCandidateList = () => {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    retrieveCandidates();
  }, []);

  const retrieveCandidates = () => {
    DCandidateService.getAll()
      .then(response => {
        setCandidates(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div className="table-container">
      <h4>DCandidates List</h4>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Age</th>
            <th>Blood Group</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {candidates &&
            candidates.map((candidate, index) => (
              <tr key={index}>
                <td>{candidate.fullName}</td>
                <td>{candidate.mobile}</td>
                <td>{candidate.email}</td>
                <td>{candidate.age}</td>
                <td>{candidate.bloodGroup}</td>
                <td>{candidate.address}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default DCandidateList;
