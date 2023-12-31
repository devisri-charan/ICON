import React from "react";
import { styled } from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #bf2132;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>Super Deal! Free Shipping on Orders above ₹500</Container>;
};

export default Announcement;
