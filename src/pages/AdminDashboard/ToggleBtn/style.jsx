import styled from "styled-components";

export const Container = styled.button`
  width: 7.5rem;
  height: 2.4rem;
  border: none;
  border-radius: 8rem;
  cursor: pointer;
  position: relative;

  background: ${({ $active }) =>
    $active ? "#00A86B" : "#C8102E"};

  transition: 0.3s;
`;

export const Ball = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: white;
  position: absolute;
  top: 2px;
  left: ${({ $active }) => ($active ? "82px" : "4px")};

  display: flex;
  align-items: center;
  justify-content: center;

  transition: left 0.3s;
`;

export const Label = styled.span`
  position: absolute;
  top: 50%;
  color: white;
  left: 50%;
  font-weight: 600;

  transform: ${({ $active }) =>
    $active
      ?"translate(-80%, -50%)" 
      :"translate(-20%, -50%)"};
  transition: transform 0.3s ease;
`;