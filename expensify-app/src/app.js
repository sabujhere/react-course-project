import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


const expenseDashboardPage = () =>(
    <div>
    This is from my dashboard component.
    </div>
)
const addExpensePage = () =>(
    <div>
    This is my add expense component. 
    </div>
)

const editExpensePage = () =>(
    <div>
    This is my edit expense component. 
    </div>
)

const helpPage = () =>(
    <div>
    This is my help page component. 
    </div>
) 

const routes = (
    <BrowserRouter>
        <div>
            <Route path="/"  component={expenseDashboardPage} exact={true}/>
            <Route path="/create" component={addExpensePage}/>
            <Route path="/edit" component={editExpensePage}/>
            <Route path="/help" component={helpPage}/>
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
