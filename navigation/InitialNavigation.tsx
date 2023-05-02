import React from 'react';
import { useSelector } from 'react-redux';

import { selectUser } from '../redux/slicers/userSlicer';
import MainNavigation from './MainNavigation';
import TabNavigation from './TabNavigation';

const InitialNavigation = () => {
    const user = useSelector(selectUser);
    console.log(user);
    return (
        user.name ? <TabNavigation /> : <MainNavigation />
    )
}

export default InitialNavigation;