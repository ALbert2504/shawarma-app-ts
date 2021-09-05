import {FC} from 'react';
import {useState} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from 'react-redux';
import {Form, Button, Container} from 'react-bootstrap';
import {Fields} from './CreateShawarma.interface';
import {createShawarma} from '../../../store/actions/shawarma.action';
import moment from "moment";
import {RootState} from "../../../store/rootReducer";

const CreateShawarma: FC = () => {
  const dispatch = useDispatch();
  const {register, handleSubmit, formState: {errors}} = useForm<Fields>({
    defaultValues: {
      exceptions: null
    }
  });
  const {user} = useSelector((state: RootState) => state.auth);

  const handleCreateShawarma = (data: Fields) => {
    dispatch(createShawarma({
      ...data,
      user_id: user.id,
      user_name: user.name,
      created: moment().format('Do MMMM YYYY')
    }));
  }

  return (
    <div>
      <Container>
        <h2 className="text-primary">Ողջույն {user?.name}</h2>
        <p className="text-primary">Ի՞նչ պարամետրերով շաուրմա կուզեք այսօր, որ Ալբերտը պատվիրի Ձեզ համար։ 💙😊</p>
        <Form onSubmit={handleSubmit(handleCreateShawarma)}>
          <Form.Group className="p-4 border rounded my-4">
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
          <Form.Group className="p-4 border rounded my-4">
            <p className="mb-2 text-primary">Ինչ չափի</p>
            <select
              {...register("size", {required: true})}
              className={`form-select ${!!errors.size ? 'is-invalid' : ''}`}
            >
              <option value="Մեծ">Մեծ</option>
              <option value="Միջին">Միջին</option>
            </select>
          </Form.Group>
          <div className="p-4 border rounded my-4">
            <p className="mb-2 text-primary">Բացառություններ</p>
            <Form.Group className="d-flex align-items-center justify-content-start">
              <Form.Check
                {...register("exceptions")}
                id="onion"
                value="Սոխ"
              />
              <Form.Label htmlFor="onion">
                Սոխ
              </Form.Label>
            </Form.Group>
            <Form.Group className="d-flex align-items-center justify-content-start">
              <Form.Check
                {...register("exceptions")}
                value="Կծու"
                id="spicy"
              />
              <Form.Label htmlFor="spicy">
                Կծու
              </Form.Label>
            </Form.Group>
            <Form.Group className="d-flex align-items-center justify-content-start">
              <Form.Check
                {...register("exceptions")}
                value="Կետչուպ"
                id="ketchup"
              />
              <Form.Label htmlFor="ketchup">
                Կետչուպ
              </Form.Label>
            </Form.Group>
            <Form.Group className="d-flex align-items-center justify-content-start">
              <Form.Check
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
            Բոլոր շաուրմաները պատվիրվելու են լավաշով, միայն լավաշի առկա չլինելու դեպքում կմատվիրվեն լոշիկիվ
          </p>
          <Button type="submit" className="mt-2" variant="primary">Ավելացնել պատվեր</Button>
        </Form>
      </Container>
    </div>
  );
};

export default CreateShawarma;