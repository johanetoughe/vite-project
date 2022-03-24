import {useRoutes} from "react-router-dom";
import * as routes from './route-names'; 

import HomePage from '@/modules/home/home-page';

function RouteProvider(){
    const router = useRoutes([
        {path: routes.HOME_PAGE, element: HomePage }
    ])

    return <div>{router}</div>;
}

export default RouteProvider;