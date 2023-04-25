import React from 'react'
import { useSelector } from 'react-redux'
import Forbiden from './Forbiden';
import { Outlet } from 'react-router-dom';

function AuthorizeRoutes({ requireRoles }) {
    const { auth } = useSelector((state) => state.auth)

    const roles = auth.roles.map(role => role.name);

    const canAccess = requireRoles.some((role) => roles.includes(role));

    if (!canAccess) {
        return <Forbiden />;
    }
    return (
        <>
            <Outlet />
        </>
    )
}

export default AuthorizeRoutes