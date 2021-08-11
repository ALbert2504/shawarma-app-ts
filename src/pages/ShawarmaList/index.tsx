import { FC } from "react";
import ShawarmaItem from '../../components/ShawarmaList/ShawarmaItem';
import { ShawarmaListProps } from "./ShawarmaList.interface";
import styles from './ShawarmaList.module.css';

const ShawarmaList: FC<ShawarmaListProps> = ({data}) => {
  console.log(data);
  
  return (
    <ul className={styles['shawarma-list']}>
      {data.map(item => {
        console.log(item);
        
        return (
          <ShawarmaItem
            key={item.id}
            meat={item.meat}
            exceptions={item.exceptions}
            size={item.size}
          />
        )
      })}
    </ul>
  );
};

export default ShawarmaList;