import React, { useState } from 'react';
import styled from 'styled-components';
//Icon Imports
import IconButton from '@material-ui/core/IconButton';
import PinterestIcon from '@material-ui/icons/Pinterest';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import FaceIcon from '@material-ui/icons/Face';
import TextsmsIcon from '@material-ui/icons/Textsms';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

function Header(props) {
  const [input, setInput] = useState('');
  const onSearchSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(input);
  };

  return (
    <Wrapper>
      <LogoWrapper>
        <IconButton>
          <PinterestIcon />
        </IconButton>
      </LogoWrapper>
      <HomePageButton>
        <a href='/'>Homepage</a>
      </HomePageButton>
      <FollowingButton>
        <a href='/'>Following</a>
      </FollowingButton>
      <SearchWrapper>
        <SearchBarWrapper>
          <IconButton type='submit' onClick={onSearchSubmit}>
            <SearchIcon />
          </IconButton>
          <form>
            <input
              type='text'
              onChange={(event) => setInput(event.target.value)}
            />
          </form>
        </SearchBarWrapper>
      </SearchWrapper>
      <IconsWrapper>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <IconButton>
          <TextsmsIcon />
        </IconButton>
        <IconButton>
          <FaceIcon />
        </IconButton>
        <IconButton>
          <KeyboardArrowDownIcon />
        </IconButton>
      </IconsWrapper>
    </Wrapper>
  );
}

export default Header;

// Styled Components
// TRouBLe
// prettier not formatting be careful CLAUDIA
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  padding: 12px 4px 4px 16px;
  background-color: white;
  color: black;
`;

// styling pinterest button in logo wrapper
const LogoWrapper = styled.div`
  .MuiSvgIcon-root {
    color: #c60023;
    font-size: 32px;
    cursor: pointer;
  }
`;
const HomePageButton = styled.button`
  display: flex;
  height: 48px;
  min-width: 123px;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  cursor: pointer;
  background-color: rgb(17, 17, 17);

  a {
    text-decoration: none;
    color: white;
    font-weight: 700;
  }
`;
const FollowingButton = styled.div`
  display: flex;
  height: 48px;
  min-width: 123px;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  cursor: pointer;
  background-color: white;

  a {
    text-decoration: none;
    color: black;
    font-weight: 700;
  }

  :hover {
    background-color: #e1e1e1;
  }
`;
const SearchWrapper = styled.div`
  flex: 1;
`;
const SearchBarWrapper = styled.div`
  background-color: #efefef;
  display: flex;
  height: 48px;
  width: 100%;
  border-radius: 50px;
  border: none;
  padding-left: 10px;

  form {
    display: flex;
    flex: 1;
  }
  form > input {
    background-color: transparent;
    border: none;
    width: 100%;
    margin-left: 5px;
    font-size: 16px;
  }
  form > button {
    display: none;
  }
  input:focus {
    outline: none;
  }
  input:active {
    outline: none;
  }
  input:hover {
    outline: none;
  }
`;
const IconsWrapper = styled.div``;
