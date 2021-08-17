import {FC, useEffect} from 'react';
import CreateShawarma from "../../components/CreateItem/CreateShawarma";
import RequireAuthentication from "../../HOC/IsAuthenticated";

export const CreateItem :FC = () => {
  return (
    <div>
      <CreateShawarma />
    </div>
  );
};

export default RequireAuthentication(CreateItem);