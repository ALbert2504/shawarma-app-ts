import {FC, useState} from 'react';
import {Button, Container, Form} from "react-bootstrap";
import {useHistory} from 'react-router-dom';
import {fields} from './Auth.interface';
import {useDispatch} from "react-redux";
import {signUp, signIn} from "../../store/actions/auth.action";
import styles from './Auth.module.css';

const initialState = {
  email: '',
  password: '',
  name: ''
}

const Auth: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [fields, setFields] = useState<fields>(initialState);
  const [isSignUp, setIsSignUp] = useState<boolean>(false);

  const handleChange = (e: any): void => {
    const {name, value} = e.target;
    setFields(prevState => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if(isSignUp) {
      dispatch(signUp({...fields, role: 'customer'}));
    } else {
      dispatch(signIn({
        email: fields.email,
        password: fields.password
      }, history));
    }
  };

  return (
    <div>
      <Container>
        <Form className={`${styles['auth-form']} rounded border border-primary py-4 px-5`} onSubmit={handleSubmit}>
          {isSignUp && <Form.Control
            className="mb-2"
            placeholder="Name"
            type="text"
            name="name"
            value={fields.name}
            onChange={handleChange}
          />}
          <Form.Control
            className="mb-2"
            placeholder="Email"
            type="email"
            name="email"
            value={fields.email}
            onChange={handleChange}
          />
          <Form.Control
            placeholder="Password"
            type="password"
            name="password"
            value={fields.password}
            onChange={handleChange}
          />
          <Button type="submit" variant="outline-primary" className="mt-4">
            Sign {isSignUp ? 'Up' : 'In'}
          </Button>
        </Form>
        {isSignUp ? (
          <p className={`${styles.inform} text-center mt-3`}>
            Already have an account? <span className={`${styles['inform-action']} text-capitalize btn-link`} onClick={() => setIsSignUp(false)}>Sign In</span>
          </p>
        ) : (
          <p className={`${styles.inform} text-center mt-3`}>
            Don't have an account? <span className={`${styles['inform-action']} text-capitalize btn-link`} onClick={() => setIsSignUp(true)}>Sign Up</span>
          </p>
        )}
      </Container>
    </div>
  );
};

export default Auth;