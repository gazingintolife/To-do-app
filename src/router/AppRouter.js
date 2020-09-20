import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NoteDashBoard from '../components/NoteDashBoard';
import AddNote from '../components/AddNote';
import Header from '../components/Header';
import EditNote from '../components/EditNote';
import PageNotFound from '../components/PageNotFound';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path = '/' component = {NoteDashBoard} exact={true}/>
                <Route path = '/create' component = {AddNote} />
                <Route path = '/edit/:id?' component = {EditNote}/>
                <Route component = {PageNotFound}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;