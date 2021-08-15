import React from "react";
import store from 'store'
import {Redirect} from 'react-router-dom';

const RequireAuthentication = (Component: JSX.Element | any) => {
  return class AuthenticatedComponent extends React.Component {

    isAuthenticated = () => {
      return store.get('supabase.auth.token')
    }

    render() {
      return (
        <div>
          { this.isAuthenticated() ? <Component {...this.props} /> : <Redirect from="*" to="/auth" /> }
        </div>
      );
    }
  };
}

export default RequireAuthentication;