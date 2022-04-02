import React, { Component } from "react";
import { connect } from "react-redux";

class Bot extends Component {
  render() {
    return (
      <div className="player">
        <div className="box">
          <img className="w-75" src={this.props.bot.img} alt="" />
        </div>
        <div className="speech-bubble"></div>
        <img
          width={250}
          height={250}
          src="./image/gameOanTuXi/playerComputer.png"
          alt=""
        />
      </div>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    bot: rootReducer.OanTuXiReducer.bot,
  };
};

export default connect(mapStateToProps)(Bot);
