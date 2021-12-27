import { useState } from "react";

import styled, { css } from "styled-components";

const TabContainer = styled.div`
  width: 20rem;
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
`;

const Sidebar = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  gap: 5%;
  margin-bottom: 1.5rem;
`;

const TabButton = styled.div`
  border: none;
  cursor: pointer;
  outline: none;
  color: gray;
  ${(props) =>
    props.active &&
    css`
      border-bottom: 2px solid rgb(255, 69, 0);
      color: rgb(255, 69, 0);
    `}
`;

const TabContent = styled.div``;

const Paragraph = styled.p`
  font-size: 0.9rem;
`;

const Tabs = ({ product }) => {
  const [displayTab, setDisplayTab] = useState({
    details: true,
    fabricCare: false,
  });

  const handleDetailsClick = () => {
    setDisplayTab({
      ...displayTab,
      details: true,
      fabricCare: false,
    });
  };

  const handleFabricCareClick = () => {
    setDisplayTab({
      ...displayTab,
      details: false,
      fabricCare: true,
    });
  };

  return (
    <TabContainer>
      <Sidebar>
        <TabButton active={displayTab.details} onClick={handleDetailsClick}>
          Details
        </TabButton>
        <TabButton
          active={displayTab.fabricCare}
          onClick={handleFabricCareClick}
        >
          Fabric &#38; Care
        </TabButton>
      </Sidebar>

      <TabContent
        id="Details"
        style={{ display: displayTab.details ? "block" : "none" }}
      >
        <Paragraph>{product.detail}</Paragraph>
      </TabContent>

      <TabContent
        id="Fabric &#38; Care"
        style={{ display: displayTab.fabricCare ? "block" : "none" }}
      >
        <Paragraph>{product.composition}</Paragraph>
        <Paragraph>{product.care}</Paragraph>
      </TabContent>
    </TabContainer>
  );
};

export default Tabs;
