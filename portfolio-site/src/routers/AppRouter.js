import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';  
import ContactPage from '../components/ContactPage';
import PortfolioDashboardPage from '../components/PortfolioDashboardPage';
import PortfolioPage from '../components/PortfolioPage';
import ProjectPage from '../components/ProjectPage';
import NotFoundPage from '../components/NotFoundPage'; 
 
  const AppRouter = () =>(
    <BrowserRouter>
      <div>
        <Header />
        <Switch>   
          <Route path="/" component={PortfolioDashboardPage} exact={true}/>  
          <Route path="/Portfolio" component={PortfolioPage} />   
          <Route path="/Project/:id" component={ProjectPage}/>      
          <Route path="/contact" component={ContactPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
  )

  export default AppRouter;