import React, { Component } from "react";
import "./btDatVeXemPhim.css";
import DatCho from "./DatCho";
import DatVe from "./DatVe";
import danhSachGheData from "../Data/danhSachGhe.json";
import ThongTinDatVe from "./ThongTinDatVe";

export default class BTDatVeXemPhim extends Component {
  arrDanhSachGhe = [...danhSachGheData];

  render() {
    return (
      <div className="bg-film">
        <h3 className="display-4 text-white pt-5" style={{ fontWeight: "400" }}>
          MOVIE SEAT SELECTION
        </h3>
        <div
          className="container p-5"
          style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
        >
          <DatVe></DatVe>
          <div className="d-flex flex-column align-items-center">
            <table className="text-light" width={900}>
              <tbody>
                {this.arrDanhSachGhe.map((item, index) => {
                  if (index == 0) {
                    return (
                      <tr>
                        <td>{item.hang}</td>
                        {item.danhSachGhe.map((soGhe, index) => {
                          return (
                            <td
                              className="pb-2"
                              style={{ fontWeight: "bold" }}
                              key={index}
                            >
                              {soGhe.soGhe}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  }
                  return <DatCho key={index} hangGhe={item}></DatCho>;
                })}
              </tbody>
            </table>
            <div className="screen p-3 mt-5">SCREEN THIS WAY</div>
            <ThongTinDatVe></ThongTinDatVe>
          </div>
        </div>
      </div>
    );
  }
}
