import React, { Component } from "react";
import { connect } from "react-redux";

class DatCho extends Component {
  render() {
    let hangGhe = this.props.hangGhe;
    return (
      <tr>
        <td className="pr-4" style={{ fontWeight: "bold" }}>
          {hangGhe.hang}
        </td>
        {hangGhe.danhSachGhe.map((item, index) => {
          let cssGheDaChon = "";
          let disabled = false;

          // Trạng thái ghế đã đặt
          if (item.daDat) {
            cssGheDaChon = "gheDuocChon";
            disabled = true;
          }

          // Trạng thái ghế đang chọn
          let cssGheDangChon = "";
          let indexGheDangchon =
            this.props.datVeXemPhim.danhSachGheDangDat.findIndex(
              (gheDangChon) => {
                return gheDangChon.soGhe === item.soGhe;
              }
            );
          if (indexGheDangchon !== -1) {
            cssGheDangChon = "gheDangChon";
          }
          

          return (
            <td key={index}>
              <button
                onClick={() => {
                  this.props.chonGhe(item);
                }}
                disabled={disabled}
                className={`ghe ${cssGheDaChon} ${cssGheDangChon} mt-2`}
              >
                {item.soGhe}
              </button>
            </td>
          );
        })}
      </tr>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    datVeXemPhim: rootReducer.BTDatVeXemPhimReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    chonGhe: (ghe) => {
      dispatch({
        type: "DAT_GHE",
        ghe,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DatCho);
