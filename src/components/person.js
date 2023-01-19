const Person = (props) => {
  let name = props.name;
  if (name.length > 8) {
    name = name.substring(0, 6) + "...";
  }

  return (
    <div>
      <p>Learn some information about {name}</p>
      {props.age >= 21 ? <h3>Have a drink!</h3> : <h3>You must be 21</h3>}
      <ul>
        {props.hobbies.map((hobby, index) => {
          return <li key={index}>{hobby}</li>
        })}
      </ul>
    </div>
  );
}

export default Person;
