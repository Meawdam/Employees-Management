import Girl from '/girl.svg';
import Man from '/man.svg';

export default function Employee( {data} ) {
  return (
    <>
      <li className="d-flex justify-content-between align-items-center m-3 p-3 border rounded shadow-sm">
        <p>{data.id}</p>
        <p>{data.scientific_name}</p>
        <img src={data.id % 2 === 1 ? Man : Girl} alt={data.id % 2 === 1 ? 'man' : 'girl'} height={100} />
      </li>
    </>
  );
}
