import React, { Component } from "react";
import { connect } from "react-redux";

class Player extends Component {
  render() {
    return (
      <div className="player">
        <div className="box">
          <img
            className="w-75"
            src={
              this.props.arrBaoBuaKeo.find((item) => {
                return item.chon === true;
              }).img
            }
            alt=""
          />
        </div>

        <div className="speech-bubble"></div>
        <img
          width={250}
          height={250}
          src="./image/gameOanTuXi/player.png"
          alt=""
        />
        <div className="row w-100">
          {this.props.arrBaoBuaKeo.map((item, index) => {
            let background = {};
            if (item.chon) {
              background = { background: "blue" };
            }

            return (
              <div key={index} className="col-4">
                <button onClick={()=>{
                  this.props.chonBaoBuaKeo(item.id)
                }} style={background} className="btn btn-primary">
                  <img className="w-100" src={item.img} alt="" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    arrBaoBuaKeo: rootReducer.OanTuXiReducer.arrOanTuXi,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    chonBaoBuaKeo: (baoBuaKeo) => {
      dispatch({
        type: "CHON_ITEM",
        baoBuaKeo,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
