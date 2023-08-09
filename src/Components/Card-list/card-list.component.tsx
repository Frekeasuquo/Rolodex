import { Monster } from "../../App";
import Card from "../card/card.component";
import './card-list.styles.css'

type CardListProps = {
    monsters: Monster[]
}

const CardList = ({ monsters }: CardListProps) => (
// Implict return
    <div className="card-list">
        {monsters.map((monster, keys) => {
            return <Card key={keys} monster={monster} />
        })}
    </div>
); 

export default CardList;