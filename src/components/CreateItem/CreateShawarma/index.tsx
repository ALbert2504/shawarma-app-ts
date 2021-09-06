import {FC, useEffect, useMemo} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from 'react-redux';
import {Form, Button, Container, Row, Col} from 'react-bootstrap';
import {Fields} from './CreateShawarma.interface';
import {createShawarma} from '../../../store/actions/shawarma.action';
import moment from "moment";
import {RootState} from "../../../store/rootReducer";
import styles from './CreateShawarma.module.css';

const CreateShawarma: FC = () => {
  const dispatch = useDispatch();
  const {user} = useSelector((state: RootState) => state.auth);

  const {register, handleSubmit, formState: {errors}, watch} = useForm<Fields>({
    defaultValues: {
      exceptions: []
    }
  });

  const {
    exceptions,
    size,
    meat,
  } = watch();

  const handleCreateShawarma = (data: Fields) => {
    console.log(data);
    dispatch(createShawarma({
      ...data,
      user_id: user.id,
      user_name: user.name,
      created: moment().format('Do MMMM YYYY')
    }));
  };

  const price = useMemo(() => {
    if(meat  === 'Խոզի') {
      if(size === 'Մեծ') {
        return 1400;
      } else {
        return 1000;
      }
    } else {
      if(size === 'Մեծ') {
        return 1300;
      } else {
        return 900;
      }
    }
  }, [meat, size]);
  console.log(price);

  return (
    <div>
      <Container>
        <Row className="align-items-start">
          <Col xs={12} lg={9}>
            <h2 className="text-primary">Ողջույն {user?.name}</h2>
            <p className="text-primary">Ի՞նչ պարամետրերով շաուրմա կուզեք այսօր, որ Ալբերտը պատվիրի Ձեզ համար։ 🖤😊</p>
            <Form onSubmit={handleSubmit(handleCreateShawarma)}>
              <Form.Group className="p-4 border border-secondary rounded my-4">
                <p className="mb-2 text-primary">Ինչի մսով</p>
                <select
                  {...register("meat", {required: true})}
                  id="meat"
                  className={`form-select ${!!errors.meat ? 'is-invalid' : ''}`}
                >
                  <option value="Խոզի">Խոզի</option>
                  <option value="Հավի">Հավի</option>
                </select>
              </Form.Group>
              <Form.Group className="p-4 border border-secondary rounded my-4">
                <p className="mb-2 text-primary">Ինչ չափի</p>
                <select
                  {...register("size", {required: true})}
                  className={`form-select ${!!errors.size ? 'is-invalid' : ''}`}
                >
                  <option value="Մեծ">Մեծ</option>
                  <option value="Միջին">Միջին</option>
                </select>
              </Form.Group>
              <div className="p-4 border border-secondary rounded my-4">
                <p className="mb-2 text-primary">Բացառություններ</p>
                <Form.Group className={`d-flex align-items-center justify-content-start ${styles['exceptions-checkbox']}`}>
                  <input
                    type="checkbox"
                    {...register("exceptions")}
                    id="onion"
                    value="Սոխ"
                  />
                  <Form.Label htmlFor="onion">
                    Սոխ
                  </Form.Label>
                </Form.Group>
                <Form.Group className={`d-flex align-items-center justify-content-start ${styles['exceptions-checkbox']}`}>
                  <input
                    type="checkbox"
                    {...register("exceptions")}
                    value="Կծու"
                    id="spicy"
                  />
                  <Form.Label htmlFor="spicy">
                    Կծու
                  </Form.Label>
                </Form.Group>
                <Form.Group className={`d-flex align-items-center justify-content-start ${styles['exceptions-checkbox']}`}>
                  <input
                    type="checkbox"
                    {...register("exceptions")}
                    value="Կետչուպ"
                    id="ketchup"
                  />
                  <Form.Label htmlFor="ketchup">
                    Կետչուպ
                  </Form.Label>
                </Form.Group>
                <Form.Group className={`d-flex align-items-center justify-content-start ${styles['exceptions-checkbox']}`}>
                  <input
                    type="checkbox"
                    {...register("exceptions")}
                    value="Մայոնեզ"
                    id="mayo"
                  />
                  <Form.Label htmlFor="mayo">
                    Մայոնեզ
                  </Form.Label>
                </Form.Group>
              </div>
              <p className="text-primary">
                <sup className="text-danger">*</sup>
                Բոլոր շաուրմաները պատվիրվելու են լավաշով, միայն լավաշի առկա չլինելու դեպքում կպատվիրվեն լոշիկիվ
              </p>
              <Button type="submit" className="mt-2" variant="primary">Ավելացնել պատվեր</Button>
            </Form>
          </Col>
          <Col className="p-3 border rounded border-secondary" xs={12} lg={3}>
            <h3>Summary</h3>
            <Form.Group className="mb-3">
              <p className="mb-0">
                Միս:
              </p>
              <Form.Control type="text" value={meat} readOnly />
            </Form.Group>
            <Form.Group className="mb-3">
              <p className="mb-0">
                Չափ:
              </p>
              <Form.Control type="text" value={size} readOnly />
            </Form.Group>
            <Form.Group className="mb-4">
              <p className="mb-0">
                Բացառություններ:
              </p>
              <Form.Control type="text" value={exceptions.join(', ')} readOnly />
            </Form.Group>
            <Form.Group className="mb-3">
              <p className="mb-0">
                Արժեք:
              </p>
              <div className="input-group mb-3">
                <span className="input-group-text">֏</span>
                <Form.Control type="text" value={price} />
              </div>
            </Form.Group>

          </Col>
        </Row>

      </Container>
    </div>
  );
};

export default CreateShawarma;