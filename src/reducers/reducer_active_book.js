//the state argument is npt the application's state,
//but rather the state that this reducer is reposonsible for.

//what this means is if we were to say:
//
// state += 1 inside this function and call the function over and over again,
//the state for this reducer would go up 1, 2, 3, 4, 5, and so on.
//
//it is for this reason that we just return 'state' when we dont care about the action.
//this is the 'default' on the switch statement


//state = null is ES6 magic that says: if this sate argument comes in and it's undefined,
//set state to null. we do this because redux edoesnt like undefined arguments.
export default function(state = null, action){
  switch(action.type){
    case 'SELECTED_BOOK':
    return action.payload;
    break;
    
    default:
    return state;
  }


}
