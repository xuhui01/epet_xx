import {
  RECEIVE_HOME,
  RECEIVE_LEFTDATA
} from './mutation-types'

export default {
  [RECEIVE_HOME](state, {home}) {
    state.menus = home.menus;
    state.datas = home.datas;
    state.images = state.datas[0].value;
    state.columnDatas = state.datas[2].menus;

    state.ad1 = state.datas[7].content_images;
    state.ad2 = state.datas[9].content_images;
    state.ad3 = state.datas[11].value;
    state.ad4 = state.datas[12].value[0];
    state.ad5 = state.datas[14].value;
    state.ad6 = state.datas[15].value;
    state.ad7 = state.datas[17].content_images;
    state.ad8 = state.datas[19].content_images;
    state.ad9 = state.datas[21].content_images;
    state.ad10 = state.datas[23].content_images;
    state.ad11 = state.datas[25].content_images;
    state.ad12 = state.datas[27].content_images;
    state.ad13 = state.datas[29].content_images;
    state.ad14 = state.datas[31].content_images;
    state.ad15 = state.datas[33].content_images;
    state.ad16 = state.datas[35].content_images;
    state.ad17 = state.datas[37].value;
    state.ad18 = state.datas[38].value;
    state.ad19 = state.datas[40].value;
    state.ad20 = state.datas[41].value[0];
    state.ad21 = state.datas[43].value;
    state.ad22 = state.datas[44].value[0];
    state.ad23 = state.datas[46].content_images;
  },

  [RECEIVE_LEFTDATA](state, {leftData}) {
    state.categorys = leftData.categorys
  }
}
