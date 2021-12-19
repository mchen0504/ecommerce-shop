import { useState } from "react";

import styled, { css } from "styled-components";

const TabContainer = styled.div`
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
`;

const Sidebar = styled.div`
  display: flex;
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

const DescTabs = () => {
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
        <TabButton
          class="tablinks"
          active={displayTab.details}
          onClick={handleDetailsClick}
        >
          Details
        </TabButton>
        <TabButton
          class="tablinks"
          active={displayTab.fabricCare}
          onClick={handleFabricCareClick}
        >
          Fabric &#38; Care
        </TabButton>
      </Sidebar>

      <TabContent
        id="Details"
        class="tabcontent"
        style={{ display: displayTab.details ? "block" : "none" }}
      >
        <Paragraph>Iris Jacquard Series, Lapel,Floral Patterned</Paragraph>
      </TabContent>

      <TabContent
        id="Fabric &#38; Care"
        class="tabcontent"
        style={{ display: displayTab.fabricCare ? "block" : "none" }}
      >
        <Paragraph>6% Wool, 20% Acrylic, 20% Nylon, 54% Polyester.</Paragraph>
        <Paragraph>
          Hand wash in cold water, using a mild and gentle detergent. Do not
          scrub or use a brush, and do not twist it forcefully.
        </Paragraph>
      </TabContent>
    </TabContainer>
  );
};

export default DescTabs;
