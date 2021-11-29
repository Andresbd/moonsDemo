import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  appDarkGrey,
  primaryColorByKey,
  secondaryColorByKey,
} from "../utils/colors";

const Statistics = ({ data, index }) => {
  return (
    <Row className="boder-grey">
      <Col xs={6} className="body-text align-start">
        <p
          className="body-subtitle"
          style={{ color: primaryColorByKey[index] }}
        >
          Tablet
        </p>
        <Row>
          <Col xs={3}>
            <p style={{ color: appDarkGrey }}>{data.marginTablet}%</p>
          </Col>
          <Col xs={9} className="body-secondary">
            <p>{data.valueTablet}</p>
          </Col>
        </Row>
      </Col>
      <Col xs={6} className="body-text align-end">
        <p
          className="body-subtitle"
          style={{ color: secondaryColorByKey[index] }}
        >
          Smartphone
        </p>
        <Row>
          <Col>
            <p style={{ color: appDarkGrey }}>{data.marginSmartphone}%</p>
          </Col>
          <Col className="body-secondary">
            <p>{data.valueSmartphone}</p>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Statistics;
