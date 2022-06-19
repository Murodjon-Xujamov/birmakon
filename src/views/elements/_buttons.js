import styled from "styled-components";
import { COLORS } from "./_variables";

export const Button = styled.button`
  background-color: ${(props) => (props.Color ? props.Color : COLORS.white)};
  display: ${(props) => (props.display ? props.display : "auto")};
  width: ${(props) => (props.width ? props.width : "auto")};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "0px"};
  border: ${(props) => (props.border ? props.border : "0px")} solid
    ${COLORS.black};
  width: ${(props) => (props.width ? props.width : "max-content")};
  padding-left: ${(props) => (props.paddingLeft ? props.paddingLeft : "20px")};
  padding-right: ${(props) =>
    props.paddingRight ? props.paddingRight : "20px"};
  padding-top: ${(props) => (props.paddingTop ? props.paddingTop : "10px")};
  padding-bottom: ${(props) =>
    props.paddingBottom ? props.paddingBottom : "10px"};
  border-bottom: ${(props) =>
      props.borderBottom ? props.borderBottom : "auto"}
    solid ${COLORS.black};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "0")};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : "0")};
  margin-right: ${(props) => (props.marginRight ? props.marginRight : "0")};
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : "0")};
  cursor: pointer;
  align-items: center;
`;

export const ButtonBlue = styled.button`
  background: ${COLORS.blue};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "3px"};
  border: ${(props) => (props.border ? props.border : "0px")};
  width: ${(props) => (props.width ? props.width : "max-content")};
  padding-left: ${(props) => (props.paddingLeft ? props.paddingLeft : "20px")};
  padding-right: ${(props) =>
    props.paddingRight ? props.paddingRight : "20px"};
  padding-top: ${(props) => (props.paddingTop ? props.paddingTop : "10px")};
  padding-bottom: ${(props) =>
    props.paddingBottom ? props.paddingBottom : "10px"};
  border-bottom: ${(props) => (props.borderBottom ? props.borderBottom : "0px")}
    solid black;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "0")};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : "0")};
  margin-right: ${(props) => (props.marginRight ? props.marginRight : "0")};
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : "0")};
  cursor: pointer;
  color: ${COLORS.white};
  font-family: sans-serif;
`;

export const ButtonLeft = styled.button`
  background: ${COLORS.blueLinear};
  border-radius: 3px 0 0 3px;
  border: ${(props) => (props.border ? props.border : "0px")};
  width: ${(props) => (props.width ? props.width : "max-content")};
  padding-left: ${(props) => (props.paddingLeft ? props.paddingLeft : "20px")};
  padding-right: ${(props) =>
    props.paddingRight ? props.paddingRight : "20px"};
  padding-top: ${(props) => (props.paddingTop ? props.paddingTop : "10px")};
  padding-bottom: ${(props) =>
    props.paddingBottom ? props.paddingBottom : "10px"};
  border-bottom: ${(props) => (props.borderBottom ? props.borderBottom : "0px")}
    solid ${COLORS.black};
  cursor: pointer;
  color: ${COLORS.white};
  font-family: sans-serif;
`;

export const ButtonRight = styled.button`
  background: ${COLORS.gray};
  border-radius: 0 3px 3px 0;
  border: ${(props) => (props.border ? props.border : "0px")};
  width: ${(props) => (props.width ? props.width : "max-content")};
  padding-left: ${(props) => (props.paddingLeft ? props.paddingLeft : "20px")};
  padding-right: ${(props) =>
    props.paddingRight ? props.paddingRight : "20px"};
  padding-top: ${(props) => (props.paddingTop ? props.paddingTop : "10px")};
  padding-bottom: ${(props) =>
    props.paddingBottom ? props.paddingBottom : "10px"};
  border-bottom: ${(props) => (props.borderBottom ? props.borderBottom : "0px")}
    solid ${COLORS.black};
  cursor: pointer;
  color: ${COLORS.black};
  font-family: sans-serif;
`;

export const ButtonCenter = styled.button`
  background: ${COLORS.gray};
  border: ${(props) => (props.border ? props.border : "0px")};
  width: ${(props) => (props.width ? props.width : "max-content")};
  padding-left: ${(props) => (props.paddingLeft ? props.paddingLeft : "20px")};
  padding-right: ${(props) =>
    props.paddingRight ? props.paddingRight : "20px"};
  padding-top: ${(props) => (props.paddingTop ? props.paddingTop : "10px")};
  padding-bottom: ${(props) =>
    props.paddingBottom ? props.paddingBottom : "10px"};
  border-bottom: ${(props) => (props.borderBottom ? props.borderBottom : "0px")}
    solid ${COLORS.black};
  cursor: pointer;
  color: ${COLORS.black};
  font-family: sans-serif;
`;
