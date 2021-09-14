import {FC, useMemo} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from 'react-redux';
import {Form, Button, Container, Row, Col} from 'react-bootstrap';
import {Fields} from './CreateShawarma.interface';
import {createShawarma} from '../../../store/actions/shawarma.action';
import moment from "moment";
import {motion} from "framer-motion";
import {componentVariants, childVariants} from "./CreateShawarma.motion";
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
    if (size === 'Մեծ') {
      return 1300;
    }
    return 900;
  }, [size]);
  console.log(price);

  return (
    <motion.div
      variants={componentVariants}
      initial="hidden"
      animate="visible"
    >
      <Container>
        <Row className="align-items-start">
          <Col xs={12} lg={9}>
            <h2 className="text-primary">Ողջույն {user?.name}</h2>
            <motion.p
              className="text-primary"
              variants={childVariants}
            >
              Ի՞նչ պարամետրերով շաուրմա կուզեք այսօր, որ Ալբերտը պատվիրի Ձեզ համար։ 🖤😊
            </motion.p>
            <Form onSubmit={handleSubmit(handleCreateShawarma)}>
              <motion.div
                className="form-group p-4 border border-secondary rounded my-4"
                variants={childVariants}
              >
                <p className="mb-2 text-primary">Ինչի մսով</p>
                <select
                  {...register("meat", {required: true})}
                  id="meat"
                  className={`form-select ${!!errors.meat ? 'is-invalid' : ''}`}
                >
                  <option value="Խոզ + հավ միքս">Խոզ + հավ միքս</option>
                </select>
              </motion.div>
              <motion.div
                className="form-group p-4 border border-secondary rounded my-4"
                variants={childVariants}
              >
                <p className="mb-2 text-primary">Ինչ չափի</p>
                <select
                  {...register("size", {required: true})}
                  className={`form-select ${!!errors.size ? 'is-invalid' : ''}`}
                >
                  <option value="Մեծ">Մեծ</option>
                  <option value="Միջին">Միջին</option>
                </select>
              </motion.div>
              <motion.div
                className="p-4 border border-secondary rounded my-4"
                variants={childVariants}
              >
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
              </motion.div>
              <motion.p
                className="text-primary"
                variants={childVariants}
              >
                <sup className="text-danger">*</sup>
                Բոլոր շաուրմաները պատվիրվելու են լավաշով, միայն լավաշի առկա չլինելու դեպքում կպատվիրվեն լոշիկիվ
              </motion.p>
              <motion.button
                type="submit" className="mt-2 btn btn-primary"
                variants={childVariants}
              >
                Ավելացնել պատվեր
              </motion.button>
            </Form>
          </Col>
          <motion.div
            className="p-3 border rounded border-secondary col-xs-12 col-lg-3"
            variants={childVariants}
          >
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
          </motion.div>
        </Row>

      </Container>
    </motion.div>
  );
};

export default CreateShawarma;