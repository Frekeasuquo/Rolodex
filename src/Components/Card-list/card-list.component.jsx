
import Card from "../card/card.component";
import './card-list.styles.css'

const CardList = ({ monsters }) => (
// Implict return
    <div className="card-list">
        {monsters.map((monster, keys) => {
            return <Card key={keys} monster={monster} />
        })}
    </div>
); 

export default CardList;