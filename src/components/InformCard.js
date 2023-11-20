import React from "react";
import styled from "styled-components";
import StackIcon from "../assets/icons/StackIcon.png";
import FinishIcon from "../assets/icons/FinishIcon.png";
import PlaceIcon from "../assets/icons/PlaceIcon.png";
import PeopleIcon from "../assets/icons/PeopleIcon.png";
import DuringIcon from "../assets/icons/DuringIcon.png";
import { useNavigate } from "react-router-dom";

const PageContainer = styled.div`
  width: 335px;
  height: 115px;
  border-radius: 5px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto auto auto;
  padding: 10px 20px;
  padding-bottom: 20px;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
`;

const TitleContainer = styled.div`
  grid-column: span 2;
  color: #313866;
  font-size: 24px;
  font-family: "GmarketSans";
  width: 100%;
  margin-bottom: 7px;
`;

const ShortContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 16px;
  align-items: center;
  margin-bottom: 7px;
`;

const ShortTitleContainer = styled.div`
  text-decoration: none;
  text-align: center;
  align-items: center;
  color: #7C8BBE;
  font-size: 16px;
  font-family: "SCDream4";
  margin: 0px 5px;
`;

const ShortDetailContainer = styled.div`
  text-decoration: none;
  text-align: center;
  color: #313866;
  font-size: 16px;
  font-family: "SCDream4";
`;

const StackIconCSS = {
  width: "14px",
  height: "14px",
  margin: "4px",
};

const FinishIconCSS = {
  width: "14px",
  height: "16px",
  margin: "3px 4px",
};

const PlaceIconCSS = {
  width: "10px",
  height: "16px",
  margin: "3px 6px",
};

const PeopleIconCSS = {
  width: "16px",
  height: "14px",
  margin: "4px 3px",
};

const DuringIconCSS = {
  width: "14px",
  height: "14px",
  margin: "4px",
};

function shotInform(image, title, content, unit) {
  return (
    <ShortContainer>
      <img src={image} alt={title} style={
        title === "스택" ? StackIconCSS :
        title === "마감" ? FinishIconCSS :
        title === "장소" ? PlaceIconCSS :
        title === "인원" ? PeopleIconCSS :
        title === "기간" ? DuringIconCSS : null
      }/>
      <ShortTitleContainer>{title}</ShortTitleContainer>
      <ShortDetailContainer>{content}{unit}</ShortDetailContainer>
    </ShortContainer>
  );
}

function InformCard({ type, title, skill, deadline, progress, peopleNum, place }) {
  const navigate = useNavigate();

  function moveDetail() {
    navigate('/studydetail');
  }

  return (
    <PageContainer onClick={moveDetail}>
      {/* <TitleContainer>[{type}] {title}</TitleContainer> */}
      <TitleContainer>{title}</TitleContainer>
      {shotInform(StackIcon, "스택", skill, "")}
      {shotInform(FinishIcon, "마감", deadline, "")}
      {shotInform(DuringIcon, "기간", progress, "개월")}
      {shotInform(PeopleIcon, "인원", peopleNum, "명")}
      {shotInform(PlaceIcon, "장소", place, "")}
    </PageContainer>
  );
}

export default InformCard;
