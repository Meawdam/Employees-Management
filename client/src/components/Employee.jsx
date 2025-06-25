import Girl from '/girl.svg';
import Man from '/man.svg';

export default function Employee( {data} ) {
  return (
    <>
      <li className="d-flex justify-content-between align-items-center m-3 p-3 border rounded shadow-sm">
        <p>{data.id}</p>
        <p>{data.name}</p>
        <p>{data.wage} Baht</p>
        <img src={data.gender === 'Male' ? Man : Girl} alt={data.gender === 'Male' ? 'man' : 'girl'} height={100} />
      </li>
    </>
  );
}
