import styled from "styled-components";

export const PrimaryButton = styled.a`
  display: inline-block;
  background-color: #E47676;
  color: white;
  padding: 12px 24px;
  border-radius: 50px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin-top: 20px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 10px 20px rgba(228, 118, 118, 0.3);
    background-color: #D06666; 
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }
`;
