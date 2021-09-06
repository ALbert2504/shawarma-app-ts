import {FC} from 'react';
import CreateShawarma from "../../components/CreateItem/CreateShawarma";
import RequireAuthentication from "../../HOC/IsAuthenticated";

export const CreateItem :FC = () => {
  return (
    <>
      <CreateShawarma />
    </>
  );
};

export default RequireAuthentication(CreateItem);