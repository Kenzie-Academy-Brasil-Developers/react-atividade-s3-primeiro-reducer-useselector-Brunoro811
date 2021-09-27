import { useSelector } from "react-redux";
const FruitsPage = () => {
  // acessando o estado global e pegando o state do fruits
  const fruits = useSelector((state) => state.fruits);
  return (
    <div>
      {console.log(fruits)}
      {fruits.map((fruit) => (
        <ul>
          <li key={fruit.image}>
            <p>{fruit.name}</p>
            <img src={`${fruit.image}`} alt={fruits.name} />
          </li>
        </ul>
      ))}
    </div>
  );
};
export default FruitsPage;
