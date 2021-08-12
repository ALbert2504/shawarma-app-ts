import {FC, useEffect} from "react";
import {Row, Col, Container, Alert} from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux";
import ShawarmaItem from '../../components/ShawarmaList/ShawarmaItem';
import {RootState} from "../../store/rootReducer";
import {getShawarmas} from "../../store/actions/shawarma.action";

const ShawarmaList: FC = () => {
  const dispatch = useDispatch();
  const {orders} = useSelector((state: RootState) => state.shawarma);

  useEffect(() => {
    dispatch(getShawarmas());
  }, [dispatch]);

  return (
    <div>
      <Container>
        {orders.length ? <Row className="align-items-stretch">
          {orders.map(item => {
            return (
              <Col key={item.id} className="mb-4" xs={12} md={6} lg={4} xl={3}>
                <ShawarmaItem
                  meat={item.meat}
                  exceptions={item.exceptions}
                  size={item.size}
                  name={item.name}
                  created={item.created}
                />
              </Col>
            )
          })}
        </Row> : <Alert variant="danger" className="text-center">
          Այսօր շաուրմա չի պատվիրվել
        </Alert>}
      </Container>
    </div>

  );
};

export default ShawarmaList;