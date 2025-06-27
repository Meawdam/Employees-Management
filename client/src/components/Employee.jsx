import Girl from '/girl.svg';
import Man from '/man.svg';
import { useState } from 'react';

export default function Employee( {data, onUpdate, onDelete} ) {

  const [newWage, setNewWage] = useState('');

  const handleDelete = () => {
    onDelete(data.id);
  }

  const handleUpdate = () => {
    onUpdate(data.id, parseFloat(newWage));
    setNewWage('');
  }

  return (
    <>
      <li className="d-blog align-items-center m-3 p-3 border rounded shadow-sm">
        <h3>Name : {data.name}</h3>
        <p>Position : {data.position}</p>
        <p>Wage : {data.wage} Baht</p>
        <p>Gender :</p>
        {data.gender && <img className='m-2' src={data.gender === 'Male' ? Man : Girl} alt={data.gender === 'Male' ? 'man' : 'girl'} height={100} />}
        <input className='form-control' type="number" placeholder='Enter new wage...' onChange={(e) => setNewWage(e.target.value)} required/>
        <button className='btn btn-warning m-2' onClick={handleUpdate} >Update</button>
        <button className='btn btn-danger m-2' onClick={handleDelete}>Delete</button>
      </li>
    </>
  );
}
