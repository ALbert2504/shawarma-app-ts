import { FC } from "react";
import { ShawarmaItemProps } from "./ShawarmaItem.interface";

const ShawarmaItem: FC<ShawarmaItemProps> = ({
  meat,
  exceptions,
  size
}) => {
  return (
    <li style={{border: '1px solid black', padding: 5, marginBottom: 10}}>
      <p>{meat}</p>
      <p>{exceptions}</p>
      <p>{size}</p>
    </li>
  );
};

export default ShawarmaItem;