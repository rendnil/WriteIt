const defaultState = []

export default function(state=defaultState, action){

  switch(action.type){
    case "FETCH_COMMENTS":
      return action.payload
    case "CREATE_COMMENT":
      return [...state, action.payload]

    default:
      return state
  }
}
