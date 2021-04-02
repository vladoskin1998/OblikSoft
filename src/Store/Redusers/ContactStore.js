let initstate = []

export default function ContactStore(state = initstate, action) {
  switch (action.type) {
    case 'GET_DATA_FROM_SERVER': {
      return action.payload
    }
    case 'READ_MESSAGE': {
      return state.filter((item) => {
        item.id === action.payload ? item.status = "true" : null
        return item
      })
    }
    default: return state
  }
}