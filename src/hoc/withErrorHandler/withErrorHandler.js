import React, { Fragment, useState, useEffect } from 'react';

import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
  return (props) => {
    const [myState, setError] = useState({ error : null});
    const reqInterceptor = axios.interceptors.request.use(
      request => {
        setError({error: null});
        return request;
      });
    
    const resInterceptor = axios.interceptors.response.use(
      res => res, 
      error => {
        setError({error})
    });
    useEffect(() => {
      return () => {
        axios.interceptors.request.eject(reqInterceptor);
        axios.interceptors.response.eject(resInterceptor);
      }
    }, [reqInterceptor, resInterceptor]);

    const errorConfirmHandler = () => {
      setError({error: null});
    }

    return (
      <Fragment>
        <Modal show={myState.error} modalCanceled={errorConfirmHandler}>
          {myState.error ? myState.error.message : null}
        </Modal>
        <WrappedComponent {...props}/>
      </Fragment>
    )
  }
}

export default withErrorHandler;