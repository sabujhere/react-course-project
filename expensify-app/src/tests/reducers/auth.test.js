import authReducer from '../../reducers/auth';

test('should set default state', () => {
  const state = authReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({});
});

test('should setup uid on login', () => {
    const action = {
      type: 'LOGIN',
      uid: '12364'
    };
    const state = authReducer({}, action);
    expect(state).toEqual({uid:action.uid});
  });

test('should clear uid on logout', () => {
const action = {
    type: 'LOGOUT'    
};
const state = authReducer({uid: '12364'}, action);
expect(state).toEqual({});
});