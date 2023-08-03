import { message } from 'antd';
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import authService from '../services/auth.service';

const AuthGuard = () => {
    const authUser = authService.getAuthUser();
  //  console.log("mahivae", authUser)
    // const isAdmin = authUser && authUser.isAdmin;
    return authUser ? <Outlet /> : <Navigate to={'/'} replace />

    // if (isAdmin) {
    //     return <Outlet />;
    //   } else if (authUser) {
    //     message.warning('You do not have access to this page.', 2);
    //     return <Navigate to="/" replace />;
    //   } else {
    //     return <Navigate to="/login" replace />;
    //   }
}

export default AuthGuard;