export const SAVE_LIST = 'SAVE_LIST' // actLion types


export const savePinsList = (state:any) => {
  const action = {
      type: SAVE_LIST,
      state
  }
  console.log(state, ' action is auth ');
  return action
}