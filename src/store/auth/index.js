import state from './state'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'

export const auth = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
