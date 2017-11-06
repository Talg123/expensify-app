import React from 'react';
import { Link, Switch, BrowserRouter, Route, NavLink } from 'react-router-dom';
import Header from '../components/Header';
import ExpenseDashBoardPage from '../components/ExpanseDashBoardPage';
import AddExpensePage from '../components/AddExpansePage';
import EditExpansePage from '../components/EditExpansePage';
import HelpExpansePage from '../components/HelpExpansePage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Header />
        <Switch>
            <Route path="/" component={ExpenseDashBoardPage} exact={true} />
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit/:id" component={EditExpansePage} />
            <Route path="/help" component={HelpExpansePage} />
            <Route component={ NotFoundPage } />
        </Switch>
    </div>
</BrowserRouter>
);

export default AppRouter;