import React, { Component } from "react";
import { connect } from "react-redux";

class ThongTinGame extends Component {
  render() {
    return (
      <div className="pt-5 mt-5">
        <div className="display-4 text-danger" style={{ fontWeight: "bold" }}>
          {this.props.thongTinGame.ketQua}
        </div>
        <div className="display-4 text-primary" style={{ fontWeight: "bold" }}>
          Số lần thắng: <span>{this.props.thongTinGame.soLanThang}</span>
        </div>
        <div className="display-4 text-primary" style={{ fontWeight: "bold" }}>
          Tổng số lần chơi: <span>{this.props.thongTinGame.soLanChoi}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    thongTinGame: rootReducer.OanTuXiReducer,
  };
};

export default connect(mapStateToProps)(ThongTinGame);
