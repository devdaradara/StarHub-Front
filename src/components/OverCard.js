import React from "react";
import styled from "styled-components";
import StackIcon from "../assets/icons/StackIcon.png";
import FinishIcon from "../assets/icons/FinishIcon.png";
import PlaceIcon from "../assets/icons/PlaceIcon.png";
import PeopleIcon from "../assets/icons/PeopleIcon.png";
import DuringIcon from "../assets/icons/DuringIcon.png";

const PageContainer = styled.div`
  width: 335px;
  height: 115px;
  border-radius: 5px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto auto auto;
  padding: 10px 20px;
  margin: 13px 0px;
  background-color: #ffffff;
  border-radius: 15px;
`;

const TitleContainer = styled.div`
  grid-column: span 2;
  color: #313866;
  font-size: 24px;
  font-family: "GmarketSans";
  width: 100%;
  margin-top: -7px;
  margin-bottom: 10px;
`;

const ShortContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 16px;
  align-items: center;
  margin-bottom: 10px;
`;

const ShortTitleContainer = styled.div`
  text-decoration: none;
  text-align: center;
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

const ClosedButton = styled.button`
  color: #7C8BBE;
  font-size: 16px;
  font-family: "GmarketSans";
  background-color: #ffffff;
  border: none;
  outline: none;
  cursor: pointer;
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
        title === "공간" ? PlaceIconCSS :
        title === "인원" ? PeopleIconCSS :
        title === "장소" ? DuringIconCSS : null
      }/>
      <ShortTitleContainer>{title}</ShortTitleContainer>
      <ShortDetailContainer>{content}{unit}</ShortDetailContainer>
    </ShortContainer>
  );
}


function OverCard({ title, stack, finish, during, people, onClose }) {
  console.log(title, stack, finish, during, people);

  const handleClose = () => {
    if (onClose) {
      onClose(); // onClose 함수 호출
    }
  };

  return (
    <PageContainer>
      <TitleContainer>
        {title}
        <ClosedButton onClick={handleClose} style={{ float: 'right', cursor: 'pointer' }}>
          X
        </ClosedButton>
      </TitleContainer>
      {shotInform(StackIcon, "스택", stack, "")}
      {shotInform(FinishIcon, "마감", finish, "")}
      {shotInform(PlaceIcon, "공간", during, "개월")}
      {shotInform(PeopleIcon, "인원", people, "명")}
      {shotInform(DuringIcon, "장소", during, "")}
    </PageContainer>
  );
}

export default OverCard;