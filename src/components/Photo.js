import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  background-color: rgba(65, 74, 76, 0.15);
  height: 100vh;
`;

const StyledSection = styled.section`
  width: 80%;
  margin: 0 auto;
  color: white;
`;

const StyledPicture = styled.img`
  width: 80%;
`;

export default function Photo({
  photoURL,
  date,
  title,
  explanation,
  copyright,
}) {
  return (
    <StyledDiv>
      <StyledSection>
        <h1>{title}</h1>
        <h2>Date: {date}</h2>
        <StyledPicture src={photoURL} alt={`${title}`}></StyledPicture>
        <div>
          <p>Photo Copyright: {copyright}</p>
        </div>
        <div>
          <p>{explanation}</p>
        </div>
      </StyledSection>
    </StyledDiv>
  );
}
