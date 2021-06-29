export const state = () => ({
 isOpened: false,
})

export const mutations = {
 toggleIsOpened(state) {
    state.isOpened = !state.isOpened
  },
}

export const getters = {
  getIsOpened: (state) => {
    return state.isOpened
  },
}

export const actions = {
    toggleIsOpened: (context) => {
    return context.commit('toggleIsOpened')
  },
}
