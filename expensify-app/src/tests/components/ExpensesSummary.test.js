import React from 'react';
import { shallow } from 'enzyme';
import {ExpensesSummary} from '../../components/ExpensesSummary';

test('should connectly render expenseSummay with 1 expense', () => {    
    const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={10025}/>);
    expect(wrapper).toMatchSnapshot();
  });
  

  test('should connectly render expenseSummay with 2 expenses', () => {   
    const wrapper = shallow(<ExpensesSummary expensesCount={2} expensesTotal={8000000025}/>);
    expect(wrapper).toMatchSnapshot();
  });