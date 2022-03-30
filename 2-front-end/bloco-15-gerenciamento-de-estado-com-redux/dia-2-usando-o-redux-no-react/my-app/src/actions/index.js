const NEW_ACTION = 'NEW_ACTION';

export const newAction = (state) => ({ 
  type: NEW_ACTION, state 
});

export const addAssignment = (value) => ({ type: 'ADD_ELEMENT', value });
