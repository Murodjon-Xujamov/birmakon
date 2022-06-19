import styled from "styled-components";
import media from "styled-media-query";
import { COLORS } from "./_variables";

export const CardWhite = styled.div`
  @media (max-width: 768px) {
    padding: 10px;
  }
  @media (max-width: 568px) {
    padding: 0px;
    box-shadow: none;
  }
`;

export const CardTitle = styled.h3`
  color: ${COLORS.black};
  margin-bottom: 10px;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "auto")};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : "auto")};
  margin-right: ${(props) => (props.marginRight ? props.marginRight : "auto")};
  margin-bottom: ${(props) =>
    props.marginBottom ? props.marginBottom : "auto"};
`;

export const CardText = styled.div`
  color: ${COLORS.grayText};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "auto")};
`;

export const Label = styled.label`
  color: ${COLORS.grayText};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "auto")};
`;

export const CardBlue = styled.div`
  background: ${COLORS.blue};
  border-radius: 3px;
  width: ${(props) => (props.width ? props.width : "-webkit-fill-available")};
  padding: ${(props) => (props.padding ? props.padding : "auto")};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "auto")};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : "auto")};
  margin-right: ${(props) => (props.marginRight ? props.marginRight : "auto")};
  margin-bottom: ${(props) =>
    props.marginBottom ? props.marginBottom : "auto"};
  display: inline-block;
  text-align: ${(props) => (props.textCenter ? props.textCenter : "center")};
  color: ${COLORS.white};
`;

export const CardGray = styled.div`
  background: ${COLORS.gray};
  border-radius: 3px;
  width: ${(props) => (props.width ? props.width : "-webkit-fill-available")};
  padding: ${(props) => (props.padding ? props.padding : "auto")};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "auto")};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : "auto")};
  margin-right: ${(props) => (props.marginRight ? props.marginRight : "auto")};
  margin-bottom: ${(props) =>
    props.marginBottom ? props.marginBottom : "auto"};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "center")};
  display: inline-block;
  color: ${COLORS.black};
`;

export const CardBlueTitle = styled.h3`
  color: ${COLORS.white};
  margin-bottom: 10px;
  font-weight: 400;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "auto")};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : "auto")};
  margin-right: ${(props) => (props.marginRight ? props.marginRight : "auto")};
  margin-bottom: ${(props) =>
    props.marginBottom ? props.marginBottom : "auto"};
`;

export const CardBlueText = styled.h4`
  color: ${COLORS.white};
  margin-bottom: 10px;
  font-weight: 400;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "auto")};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : "auto")};
  margin-right: ${(props) => (props.marginRight ? props.marginRight : "auto")};
  margin-bottom: ${(props) =>
    props.marginBottom ? props.marginBottom : "auto"};
`;

export const CardWhiteText = styled.h4`
  color: ${COLORS.black};
  margin-bottom: 10px;
  font-weight: 400;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "auto")};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : "auto")};
  margin-right: ${(props) => (props.marginRight ? props.marginRight : "auto")};
  margin-bottom: ${(props) =>
    props.marginBottom ? props.marginBottom : "auto"};
`;

export const GridTwo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "auto")};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : "auto")};
  margin-right: ${(props) => (props.marginRight ? props.marginRight : "auto")};
  margin-bottom: ${(props) =>
    props.marginBottom ? props.marginBottom : "auto"};
  @media (max-width: 568px) {
    grid-template-columns: 1fr;
  }
`;

export const GridThree = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 15px;
  border-radius: 3px;
  background: ${(props) => (props.background ? props.background : "auto")};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "auto")};
  padding: ${(props) => (props.padding ? props.padding : "auto")};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : "auto")};
  margin-right: ${(props) => (props.marginRight ? props.marginRight : "auto")};
  margin-bottom: ${(props) =>
    props.marginBottom ? props.marginBottom : "auto"};
  ${media.lessThan("medium")`
      grid-template-columns: 1fr 1fr;
  `}
  @media (max-width: 568px) {
    grid-template-columns: 1fr;
  }
`;

export const GridFour = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 15px;
  border-radius: 3px;
  background: ${(props) => (props.background ? props.background : "auto")};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "auto")};
  padding: ${(props) => (props.padding ? props.padding : "auto")};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : "auto")};
  margin-right: ${(props) => (props.marginRight ? props.marginRight : "auto")};
  margin-bottom: ${(props) =>
    props.marginBottom ? props.marginBottom : "auto"};
  ${media.lessThan("medium")`
      grid-template-columns: 1fr 1fr;
  `}
`;

export const GridSix = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 15px;
  border-radius: 3px;
  background: ${(props) => (props.background ? props.background : "auto")};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "auto")};
  padding: ${(props) => (props.padding ? props.padding : "auto")};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : "auto")};
  margin-right: ${(props) => (props.marginRight ? props.marginRight : "auto")};
  margin-bottom: ${(props) =>
    props.marginBottom ? props.marginBottom : "auto"};
  ${media.lessThan("medium")`
      grid-template-columns: 1fr 1fr;
  `}
`;

export const Form = styled.form`
  width: ${(props) => (props.width ? props.width : "auto")};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "auto")};
`;

export const FormGroup = styled.form`
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "auto")};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : "auto")};
  width: ${(props) => (props.width ? props.width : "-webkit-fill-available")};
`;

export const Input = styled.input`
  width: ${(props) => (props.width ? props.width : "96%")};
  display: block;
  outline: none;
  padding: 9px 10px;
  border-radius: 3px;
  border: 1px solid black;
  &:focus {
    box-shadow: 2px 2px 5px, -2px -2px 5px grey;
  }
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "10px")};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : "0")};
  margin-right: ${(props) => (props.marginRight ? props.marginRight : "0")};
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : "0")};
`;

export const TextArea = styled.textarea`
  width: ${(props) => (props.width ? props.width : "98%")};
  display: block;
  outline: none;
  padding: 9px 10px;
  border-radius: 3px;
  background: ${(props) => (props.marginTop ? props.marginTop : COLORS.gray)};
  border: 1px solid ${COLORS.gray};
  &:focus {
    box-shadow: 2px 2px 5px, -2px -2px 5px grey;
  }
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "10px")};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : "0")};
  margin-right: ${(props) => (props.marginRight ? props.marginRight : "0")};
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : "0")};
`;

export const Select = styled.select`
  width: ${(props) => (props.width ? props.width : "96%")};
  display: block;
  outline: none;
  background: ${(props) => (props.background ? props.background : COLORS.gray)};
  padding: 9px 10px;
  border-radius: 3px;
  border: 1px solid ${COLORS.gray};
  // &:focus {
  //   box-shadow: 2px 2px 5px, -2px -2px 5px grey;
  // }
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "10px")};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : "0")};
  margin-right: ${(props) => (props.marginRight ? props.marginRight : "0")};
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : "0")};
`;

export const InputData = styled.input`
  widht: "min-content";
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "10px")};
  display: ${(props) => (props.display ? props.display : "block")};
`;
