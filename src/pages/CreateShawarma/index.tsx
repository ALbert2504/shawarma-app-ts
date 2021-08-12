import {FC} from 'react';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {Form, Button, Container} from 'react-bootstrap';
import {Fields} from './CreateShawarma.interface';
import {createShawarma} from '../../store/actions/shawarma.action';
import useLocalStorage from "../../hooks/useLocalStorage";
import moment from "moment";

const initialState = {
  meat: '',
  exceptions: '',
  size: '',
  name: '',
  created: ''
};

const CreateShawarma: FC = () => {
  const dispatch = useDispatch();
  const [fields, setFields] = useState<Fields>(initialState);
  const [name] = useLocalStorage('name', null);

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
      name,
      created: moment().format('Do MMMM YYYY')
    }));
  };

  return (
    <div>
      <Container>
        <h2 className="text-primary">Ողջույն {name}</h2>
        <p className="text-primary">Ինչ պարամետրերով շաուրմա կուզե՞ք այսօր, որ Ալբերտը պատվիրի Ձեր համար։ 💙😊</p>
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