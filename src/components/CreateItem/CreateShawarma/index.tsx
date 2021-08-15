import {FC} from 'react';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Form, Button, Container} from 'react-bootstrap';
import {Fields} from './CreateShawarma.interface';
import {createShawarma} from '../../../store/actions/shawarma.action';
import moment from "moment";
import {RootState} from "../../../store/rootReducer";

const initialState = {
  meat: '',
  exceptions: '',
  size: '',
  created: '',
  user_id: '',
  user_name: ''
};

const CreateShawarma: FC = () => {
  const dispatch = useDispatch();
  const {user} = useSelector((state: RootState) => state.auth);
  const [fields, setFields] = useState<Fields>(initialState);

  const handleChange = (e: any): void => {
    const {name: fieldName, value} = e.target;

    setFields(prevState => ({
      ...prevState,
      [fieldName]: value
    }));
  };

  const handleSubmit = (e: any): void => {
    e.preventDefault();
    dispatch(createShawarma({
      ...fields,
      user_id: user.id,
      user_name: user.name,
      created: moment().format('Do MMMM YYYY')
    }));
  };

  return (
    <div>
      <Container>
        <h2 className="text-primary">Ողջույն {user?.name}</h2>
        <p className="text-primary">Ի՞նչ պարամետրերով շաուրմա կուզեք այսօր, որ Ալբերտը պատվիրի Ձեզ համար։ 💙😊</p>
        <Form onSubmit={handleSubmit}>
          <Form.Control
            onChange={handleChange}
            type="text"
            name="meat"
            placeholder="Ինչի (Օր․ Հավի/Խոզի)"/>
          <Form.Control
            onChange={handleChange}
            type="text"
            name="exceptions"
            placeholder="Բացառություններ (Օր․ սոխ, կծու․․․)"/>
          <Form.Control
            onChange={handleChange}
            type="text"
            name="size"
            placeholder="Չափսը (Օր․ Մեծ/Միջին)"/>
          <Button type="submit" className="mt-2" variant="primary">Ավելացնել պատվեր</Button>
        </Form>
      </Container>
    </div>
  );
};

export default CreateShawarma;