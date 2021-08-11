import { FC } from 'react';
import { useState } from 'react';
import { supabase } from '../../client';
import { Form, Button } from 'react-bootstrap';
import { Fields } from './CreateShawarma.interface';

const initialSTate = {
  meat: '',
  exceptions: '',
  size: ''
};

const CreateShawarma: FC<{
  // Todo change to a valid type
  createShawarma: any
}> = ({createShawarma}) => {
  const [fields, setFields] = useState<Fields>(initialSTate);

  const handleChange = (e: any): void => {
    const { name, value } = e.target;

    setFields(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  return (
    <Form onSubmit={(e) => createShawarma(e, fields)}>
      <Form.Control
        onChange={handleChange}
        type="text"
        name="meat"
        placeholder="Ինչի" />
      <Form.Control
        onChange={handleChange}
        type="text"
        name="exceptions"
        placeholder="Բացառություններ" />
      <Form.Control
        onChange={handleChange}
        type="text"
        name="size"
        placeholder="Չափսը" />
      <Button type="submit" className="mt-2" variant="primary">Ավելացնել պատվեր</Button>
    </Form>
  );
};

export default CreateShawarma;