import {FC} from "react";
import {Card} from "react-bootstrap";
import {ShawarmaItemProps} from "./ShawarmaItem.interface";
import useLocalStorage from "../../../hooks/useLocalStorage";

const ShawarmaItem: FC<ShawarmaItemProps> = ({
  meat,
  exceptions,
  size,
  name,
  created
}) => {
  return (
    <Card border="primary" className="h-100">
      <Card.Header>{size} {meat} Շաուրմա</Card.Header>
      <Card.Body>
        <Card.Title>Պատվիրող։ {name}</Card.Title>
        <Card.Text>
          Առանց {exceptions}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        Պատվիրվել է: {created}
      </Card.Footer>
    </Card>
  );
};

export default ShawarmaItem;