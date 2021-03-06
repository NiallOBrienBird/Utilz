import DemoApp from './DemoApp'
import GridSelector from './GridSelector';
import tiles from "../resourses/schemas/tiles"
import {Route, BrowserRouter as Router} from 'react-router-dom';

const AppRouter = ()=> {


    return (
        <Router>
            <Route exact path="/">
                <GridSelector tiles={tiles}/>
            </Route>
            <Route exact path="/tonegenerator" component={DemoApp}/>
            <Route exact path="/biquad" component={DemoApp}/>
            <Route exact path="/tone_generator" component={DemoApp}/>
            <Route exact path="/delay_calc" component={DemoApp}/>
        </Router>
    )
}

export default AppRouter