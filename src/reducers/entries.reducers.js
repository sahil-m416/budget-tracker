const reducer =    (state =initialEntry, action) => {
  console.log("This is ", action)
  let newEntries
  switch (action.type) {
    case 'ADD_ENTRY':
      newEntries= state.concat({...action.payload})
      return newEntries
    case 'REMOVE_ENTRY':
      newEntries = state.filter(entry => entry.id !==action.payload.id )
      return newEntries
    default:
      return state
  }
}


var initialEntry = [
  {
    id: 1,
    description:"Work Income",
    value : 100000,
    isExpense : false
  },
  {
    id: 2,
    description:"Water Bill",
    value : 20,
    isExpense : true
  },
  {
    id: 3,
    description:"Rent",
    value : 300,
    isExpense : true
  },
  {
    id: 4,
    description:"Power Bill",
    value : 50,
    isExpense: true
  }
]

export default reducer