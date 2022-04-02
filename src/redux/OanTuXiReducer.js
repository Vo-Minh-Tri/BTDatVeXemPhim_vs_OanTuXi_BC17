const stateDefault = {
  arrOanTuXi: [
    { id: "bao", img: "./image/gameOanTuXi/bao.png", chon: false },
    { id: "bua", img: "./image/gameOanTuXi/bua.png", chon: true },
    { id: "keo", img: "./image/gameOanTuXi/keo.png", chon: false },
  ],
  bot: { id: "keo", img: "./image/gameOanTuXi/keo.png" },
  ketQua: "Thắng",
  soLanThang: 0,
  soLanChoi: 0,
};

const OanTuXiReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "CHON_ITEM": {
      let arrOanTuXiUpdate = [...state.arrOanTuXi];
      arrOanTuXiUpdate = arrOanTuXiUpdate.map((item, index) => {
        if (item.id === action.baoBuaKeo) {
          arrOanTuXiUpdate[index].chon = true;
          return { ...item };
        }
        return { ...item, chon: false };
      });

      // console.log(arrOanTuXiUpdate);
      // let index = arrOanTuXiUpdate.findIndex((item) => {
      //   return item.id === action.baoBuaKeo;
      // });
      // if (index !== -1) {
      //   arrOanTuXiUpdate[index].chon = true;
      // }
      state.arrOanTuXi = arrOanTuXiUpdate;
      return { ...state };
    }

    case "PLAY_GAME": {
      let indexRandom = Math.floor(Math.random() * 3);
      let baoBuaKeoRandom = state.arrOanTuXi[indexRandom];

      state.bot = baoBuaKeoRandom;

      return { ...state };
    }

    case "END_GAME": {
      let player = state.arrOanTuXi.find((item) => {
        return item.chon === true;
      });
      console.log("player", player);
      console.log("state", state);
      let bot = state.bot;

      switch (player.id) {
        case "bao":
          if (bot.id === "bao") {
            state.ketQua = "HÒA";
          }
          if (bot.id === "keo") {
            state.ketQua = "THUA";
          }
          if (bot.id === "bua") {
            state.ketQua = "THẮNG";
            state.soLanThang += 1;
          }

          break;
        case "bua":
          if (bot.id === "bao") {
            state.ketQua = "THUA";
          }
          if (bot.id === "keo") {
            state.ketQua = "THẮNG";
            state.soLanThang += 1;
          }
          if (bot.id === "bua") {
            state.ketQua = "HÒA";
          }

          break;
        case "keo":
          if (bot.id === "bao") {
            state.ketQua = "THẮNG";
            state.soLanThang += 1;
          }
          if (bot.id === "keo") {
            state.ketQua = "HÒA";
          }
          if (bot.id === "bua") {
            state.ketQua = "THUA";
          }

          break;
        default:
          state.ketQua = "HÒA";
      }
      state.soLanChoi += 1;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default OanTuXiReducer;
