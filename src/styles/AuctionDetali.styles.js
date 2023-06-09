import styled from "styled-components";

export const SectionDetail = styled.div`
  background-color: var(--color-light-gray);
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 100vh;
  padding: 10px;
`;

export const DetailLeft = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const LeftImgBox = styled.div`
  align-items: center;
  object-fit: cover;
`;

export const DetailLeftImg = styled.img`
  width: 300px;
  height: 350px;
  object-fit: cover;
`;

export const DetailHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 70%;
`;

export const DetailDescription = styled.div`
  height: 30%;
  padding: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const DetailDescriptionButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const DetailRight = styled.div`
  width: 40%;
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
`;

export const StPrices = styled.div``;

export const Bidbox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* justify-content: space-between; */
`;

export const BidInput = styled.input`
  width: 300px;
  background-color: var(--color-light-white);
  padding: 8px;
`;

export const StEditContainer = styled.div`
  position: fixed;
  z-index: 1;
  background-color: rgba(221, 221, 221, 0.8);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// =========== //

export const Stasd = styled.div`
  background-color: var(--color-light-white);
`;
export const StLayout = styled.div`
  max-width: 1200px;
  gap: 50px;
  height: calc(100vh - 45px);
  margin: 10px auto 0px auto;
  border: 1px solid red;
`;
export const StTitle = styled.div`
  margin: 5px auto 0px auto;
  display: flex;
  justify-content: end;
  padding-left: 10px;
  padding-right: 10px;
  gap: 12px;
`;
export const StFlex = styled.div`
  display: flex;
  justify-content: center;
  gap: 80px;
  margin: 30px;
  border: 1px solid black;
`;
export const StPicture = styled.div`
  border: 1px solid pink;
  width: 400px;
  height: 300px;
`;
export const StInput = styled.input`
  /* display: block; */
  /* white-space: pre-wrap; */
  border: 1px solid pink;
  width: 100%;
  height: ${(props) => (props.height ? "100px" : "25px")};
  padding: 5px;
`;
export const Stbutton = styled.div`
  display: flex;
  justify-content: center;
  width: ${(props) => (props.width ? "100px" : "50px")};
  /* margin-top: -30px; */
  /* border: 1px solid red; */
  font-size: var(--font-small);
  background-color: var(--color-primary);
  color: var(--color-light-white);
  border-radius: 5px;
  &:hover {
    filter: brightness(90%);
  }
`;
export const StTopPirce = styled.div`
  border: 1px solid blue;
  display: block;
  margin-top: 10px;
`;
export const StBidding = styled.div`
  gap: 12px;
  /* margin-top: 10px; */
  border: 1px solid green;
  display: flex;
  width: 230px;
`;
export const StDescription = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 200px;
  margin: 10px auto 0px auto;
  padding-left: 30px;
  padding-right: 30px;
`;

export const StModalRemove = styled.input`
  background-color: transparent;
  box-sizing: border-box;
  height: 100px;
  width: 100%;
  outline: none;
  border-radius: 8px;
  padding: 0px 12px;
  font-size: 14px;
  border: 1px solid rgb(238, 238, 238);
`;

export const ModalOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  //수직센터
  /* align-items: center; */
  //가로센터
  justify-content: center;
  z-index: 100;
`;
//모달창
export const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  width: 300px;
  height: 200px;
  margin: 100px;
`;
export const ModalButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  /* flex-direction: row-reverse;  */
  gap: 12px;
  /* padding: 20px; */
`;
