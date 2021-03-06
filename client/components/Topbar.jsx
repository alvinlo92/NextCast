import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import Searchbar from './Searchbar';

const StyledTopbar = styled.div`
  position: fixed;
  background-color: rgb(30, 30, 30);
  height: 60px;
  top: 0;
  left: 230px;
  right: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  padding: 0 25px;
`;

const Button = styled.button`
  background-color: rgb(45,45,45);
  color: #A9A9A9;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    color: #FFFFFF;
  }
`;

const RightButton = styled(Button)`
  margin-left: 5px;
`;

const Topbar = () => {
  const history = useHistory();
  return (
    <StyledTopbar>
      <Button type="Button" onClick={() => history.goBack()}>&lt;</Button>
      <RightButton type="Button" onClick={() => history.goForward()}>&gt;</RightButton>
      <Searchbar />
    </StyledTopbar>
  );
};

export default Topbar;
