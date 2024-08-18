const BigTableHead = ({ columns }) => {
  const columnsTDs = columns.map((name) => <th key={name}>{name}</th>);
  return <tr>{columnsTDs}</tr>;
};

export default BigTableHead;
