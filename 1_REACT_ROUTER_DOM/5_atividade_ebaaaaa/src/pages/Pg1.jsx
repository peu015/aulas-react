import { Link } from "react-router-dom"

function Pg1() {
  return (
    <div>
        <h1>Página 1</h1>
        <Link to={"/Pg2"}>Clique para ir a segunda página</Link>
    </div>
  )
}

export default Pg1