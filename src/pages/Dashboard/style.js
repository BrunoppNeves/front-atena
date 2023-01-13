import styled from "styled-components";
import background from "../../assets/images/Background.svg";

export const DashboardContainer = styled.div`
  background-image: url(${background});
  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export const WorkSpaceContainer = styled.div`
  width: 90vw;
  height: 100vh;
  display: flex;
  justify-content: start;
  /* background-color: black; */
  align-items: flex-start;
  flex-direction: column;
`;

export const DivLeftContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1%;
  margin-left: 0.5%;
  padding-right: 0%;
`;

export const DivRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* background-color: gray; */
  margin-top: 2%;
  /* margin: 2% 0 0 0.5%; */
  height: 70vh;
  width: 42vw;
`;
export const DivBottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

export const DivVideoContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const DivButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 42vw;
`;
