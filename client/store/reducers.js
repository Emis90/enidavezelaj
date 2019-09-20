const initState = {
  something: 0
}

const GET_CAMPUSES = 'GET_CAMPUSES';

const reducer = (state = initState, action) => {
  switch (action) {
    case GET_CAMPUSES:
     return {...state}

    default:
      return state
  }
}


export default reducer
