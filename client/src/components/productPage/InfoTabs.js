import { useState } from "react";

import styled, { css } from "styled-components";

const TabContainer = styled.div`
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
`;

const Sidebar = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  gap: 5%;
  margin-bottom: 1.5rem;
  @media (min-width: 768px) {
    width: 70%;
  }
`;

const TabButton = styled.div`
  border: none;
  cursor: pointer;
  outline: none;
  color: gray;
  ${(props) =>
    props.selected &&
    css`
      border-bottom: 2px solid rgb(255, 69, 0);
      color: rgb(255, 69, 0);
    `}
`;

const ContentContainer = styled.div`
  width: 90%;
  @media (min-width: 768px) {
    width: 70%;
  }
`;

const Paragraph = styled.p`
  font-size: 0.9rem;
`;

const Tabs = ({ product }) => {
  const [selectedTab, setSelectedTab] = useState("details");

  return (
    <TabContainer>
      <Sidebar>
        <TabButton
          selected={selectedTab === "details"}
          onClick={() => setSelectedTab("details")}
        >
          Details
        </TabButton>
        <TabButton
          selected={selectedTab === "compositionCare"}
          onClick={() => setSelectedTab("compositionCare")}
        >
          Composition &#38; Care
        </TabButton>
      </Sidebar>

      <ContentContainer id="Details">
        {selectedTab === "details" ? (
          <Paragraph>{product.detail}</Paragraph>
        ) : (
          <div>
            <Paragraph>{product.composition}</Paragraph>
            <Paragraph>{product.care}</Paragraph>
          </div>
        )}
      </ContentContainer>
    </TabContainer>
  );
};

export default Tabs;
