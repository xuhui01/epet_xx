import {
  requesthome,
  requestLeftData
} from '../api/index'

import {
  RECEIVE_HOME,
  RECEIVE_LEFTDATA
} from './mutation-types'

export default {
  async requesthome({commit}, cb) {
    const result = await requesthome();
    if(result.code===0) {
      const home = result.home;

      commit(RECEIVE_HOME, {home});

      cb && cb()
    }
  },

  async requestLeftData({commit}, cb) {
    const result = await requestLeftData();
    if(result.code===0) {
      const leftData = result.data;

      commit(RECEIVE_LEFTDATA, {leftData});

      cb && cb()
    }
  },
}
