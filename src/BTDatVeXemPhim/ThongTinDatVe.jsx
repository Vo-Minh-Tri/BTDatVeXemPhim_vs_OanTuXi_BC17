import React, { Component } from "react";
import { connect } from "react-redux";

class ThongTinDatVe extends Component {
  render() {
    return (
      <table className="table bg-light mt-5">
        <thead>
          <tr>
            <th>Số ghế</th>
            <th>Giá</th>
            <th>Thành tiền</th>
          </tr>
        </thead>
        <tbody>
          {this.props.datVeXemPhim.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.soGhe}</td>
                <td>{item.gia}</td>
                <td>
                  <button
                    onClick={() => {
                      this.props.dispatch({
                        type: "HUY_GHE",
                        soGhe: item.soGhe,
                      });
                    }}
                    className="btn btn-danger"
                    style={{ fontWeight: "bold" }}
                  >
                    Hủy
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td style={{ fontWeight: "bold" }}>Tổng tiền</td>
            <td>
              {this.props.datVeXemPhim.reduce((total, item, index) => {
                return (total += item.gia);
              }, 0)}
            </td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    datVeXemPhim: rootReducer.BTDatVeXemPhimReducer.danhSachGheDangDat,
  };
};

export default connect(mapStateToProps)(ThongTinDatVe);
