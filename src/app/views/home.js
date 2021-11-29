import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import PieChart from "../components/graph/pie/pie_chart";
import { primaryColorByKey, secondaryColorByKey } from "../utils/colors";
import { graphData, linearData } from "../utils/data";
import Statistics from "../components/statistics";

const Home = () => {
  const [modelData, setModelData] = useState([]);

  useEffect(() => {
    if (modelData.length === 0) {
      setModelData(graphData);
    }
  }, [modelData]);

  return modelData.length === 0 ? (
    <div />
  ) : (
    <Container fluid className="margin-center">
      <Row>
        {modelData.map((data, key) => (
          <Col
            xs={12}
            sm={6}
            md={4}
            key={data.label}
            style={{ padding: "0 5vw 0 5vw" }}
          >
            <PieChart
              data={[
                {
                  value: data.data.value,
                },
                {
                  value: 100 - data.data.value,
                },
              ]}
              color={primaryColorByKey[key]}
              secondaryColor={secondaryColorByKey[key]}
              label={data.label}
              value={data.value}
              linearData={linearData[key]}
            />
            <Statistics data={data} index={key} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
