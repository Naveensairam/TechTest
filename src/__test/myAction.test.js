import * as actions from '../Action/myAction'

describe('actions', () => {
  it('should create an action to add a save', () => {
 const SAVE_LIST = 'SAVE_LIST' // actLion types
    const state = 'Finish docs'
    const action = {
        type: SAVE_LIST,
        state
    }
    expect(actions.savePinsList(state)).toEqual(action)
  })
})