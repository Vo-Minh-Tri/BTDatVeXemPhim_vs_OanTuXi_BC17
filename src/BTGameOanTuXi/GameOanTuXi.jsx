import React, { Component } from "react";
import Bot from "./Bot";
import "./GameOanTuXi.css";
import Player from "./Player";
import ThongTinGame from "./ThongTinGame";
import { connect } from "react-redux";

class GameOanTuXi extends Component {
  render() {
    return (
      <div className="bg-game">
        <div className="row">
          <div className="col-3">
            <Player></Player>
          </div>
          <div className="col-6">
            <ThongTinGame></ThongTinGame>
          </div>
          <div className="col-3">
            <Bot></Bot>
          </div>
        </div>
        <button
          onClick={() => {
            this.props.handlePlayGame();
          }}
          className="btn-success p-4"
          style={{ fontSize: "30px", fontWeight: "bold" }}
        >
          PLAY GAME
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handlePlayGame: () => {
      let count = 0;
      let randomBotItem = setInterval(() => {
        dispatch({
          type: "PLAY_GAME",
        });
        count++;
        if (count > 10) {
          clearInterval(randomBotItem);
          dispatch({
            type: "END_GAME",
          });
        }
      }, 50);
    },
  };
};

export default connect(null, mapDispatchToProps)(GameOanTuXi);
