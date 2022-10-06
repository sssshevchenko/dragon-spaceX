import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from '../../hooks/use-auth';
import { privateRoutes, publicRoutes, RouteNames } from '../../router';

const AppRouter = () => {
    const {isAuth} = useAuth()

    return (
        isAuth 
                ?<Routes>
                        {privateRoutes.map(route => 
                            <Route path={route.path}
                                    exact={route.exact}
                                    element={route.element}
                                    key={route.path}    
                            /> 
                        )}
                    <Route path='*' element={<Navigate to={RouteNames.MAINDRAGON} />} />       
                </Routes>
            :   <Routes>
                {publicRoutes.map(route => 
                    <Route path={route.path}      
                           exact={route.exact}
                           element={route.element}
                           key={route.path}
                    />    
                )}
                <Route path='*' element={<Navigate to={RouteNames.LOGIN} />} />
            </Routes>
    );
};

export default AppRouter;