import entriesTypes from './../actions/entries.actions'
const reducer =    (state =initialEntry, action) => {
  let newEntries
  switch (action.type) {
    case entriesTypes.ADD_ENTRY:
      newEntries= state.concat({...action.payload})
      return newEntries
    case entriesTypes.REMOVE_ENTRY:
      newEntries = state.filter(entry => entry.id !==action.payload.id )
      return newEntries
    case entriesTypes.UPDATE_ENTRY:
      newEntries = [...state]
      const index = newEntries.findIndex(entry => entry.id === action.payload.id)
      newEntries[index] = {...action.payload.entry}
      return newEntries
    default:
      return state
  }
}


var initialEntry = [
  {
    id: 1,
    description:"Work Income redux",
    value : 100000,
    isExpense : false
  },
  {
    id: 2,
    description:"Water Bill redux",
    value : 20,
    isExpense : true
  },
  {
    id: 3,
    description:"Rent redux",
    value : 300,
    isExpense : true
  },
  {
    id: 4,
    description:"Power Bill redux",
    value : 50,
    isExpense: true
  }
]

export default reducer