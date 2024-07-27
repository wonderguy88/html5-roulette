import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import _ from "lodash";

import RouteltteField from "../basics/rouletteField";
import InputField from "../basics/InputField";
import HotColdField from "../basics/HotColdField";

import useHook from "../../store/hooks";

import "./index.css";

const Info = () => {
  const {
    state: { cash, winAmount, betsData, latestNumbers, showDetail },
    setState,
  } = useHook();

  return (
    <>
      <Row className="info-content">
        <Col md={6} sm={12}>
          <div className="bet-info">
            <div className="info-child">
              <RouteltteField
                title="TOTAL BET"
                unit="$"
                value={betsData.reduce((total, one) => total + one[2], 0)}
              />
            </div>
            <div
              className="info-child"
              style={{ marginLeft: "1%", marginRight: "1%" }}
            >
              <RouteltteField
                title="CASH"
                unit="$"
                value={cash}
                onChangeCash={setState}
                inputDisabled={false}
              />
            </div>
            <div className="info-child">
              <RouteltteField title="WIN" unit="$" value={winAmount} />
            </div>
          </div>
          {showDetail && (
            <div className="bet-rate">
              <div className="progress-box">
                <RouteltteField
                  title="RED|BLACK"
                  numberInfo="2"
                  field={"color"}
                />
              </div>
              <div className="progress-box">
                <RouteltteField
                  title="ODD|EVEN"
                  numberInfo="2"
                  field={"even"}
                />
              </div>
            </div>
          )}
        </Col>
        <Col md={3} sm={6}>
          <div className="latest-numbers">
            <RouteltteField
              title="LATEST NUMBERS"
              numberInfo="1"
              numberArrays={latestNumbers.map(
                (item, idx) => latestNumbers[latestNumbers.length - 1 - idx]
              )}
            />
          </div>
          {showDetail && (
            <div className={"hot-cold-numbers"}>
              <HotColdField />
            </div>
          )}
        </Col>
        <Col md={3} sm={6} style={{ paddingLeft: "2%" }}>
          <InputField />
        </Col>
      </Row>
    </>
  );
};

export default Info;
