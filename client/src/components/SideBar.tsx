import React from "react";
import styled from "styled-components";
import { ReactComponent as HomeIcon } from "../../src/assets/icons/home.svg";
import { ReactComponent as TagsIcon } from "../../src/assets/icons/tags.svg";
import { ReactComponent as MylistIcon } from "../../src/assets/icons/mylist.svg";
import { ReactComponent as MypageIcon } from "../../src/assets/icons/mypage.svg";
import { ReactComponent as SearchIcon } from "../../src/assets/icons/search.svg";
import { ReactComponent as DogLogo } from "../../src/assets/imgs/doglogo.svg";

function SideBar() {
  return (
    <RootWrapper>
      <Nav>
        <SearchImg fill="#B4B4B7" />
      </Nav>
      <NavLogo>
        <NaN_0001>
          <DogLogoImg />
        </NaN_0001>
      </NavLogo>
      <NavHome>
        <HomeImg fill="#84CBFF" />
        <Home_0001 href="/">Home</Home_0001>
      </NavHome>
      <NavMylist>
        <MyList href="/mylist">MyList</MyList>
        <MyListImg fill="#B4B4B7" />
      </NavMylist>
      <NavTags>
        <Tags href="/tags">Tags</Tags>
        <TagImg fill="#B4B4B7" />
      </NavTags>
      <ButtonLogout>
        <Rectangle191 />
        <Logout>LOGOUT</Logout>
      </ButtonLogout>
      <NavMypage>
        <MyPage href="/mypage">MyPage</MyPage>
        <MypageImg fill="#B4B4B7" />
      </NavMypage>
    </RootWrapper>
  );
}
export default SideBar;

const RootWrapper = styled.div`
  background-color: rgb(240, 243, 243);
  border: solid 1px rgba(255, 255, 255, 0.16);
  position: relative;
  box-shadow: 0px 4px 5px 2px rgba(217, 217, 217, 0.5);
  width: 245px;
  height: 832px;
`;

const Nav = styled.div`
  overflow: hidden;
  background-color: white;
  border-radius: 100px;
  position: absolute;
  left: 28px;
  top: 140px;
  right: 32px;
  bottom: 656px;
`;

const SearchImg = styled(SearchIcon)`
  width: 24px;
  height: 24px;
  object-fit: cover;
  position: absolute;
  left: 10px;
  top: calc((calc((50% + 0px)) - 12px));
`;

const NavLogo = styled.div`
  position: absolute;
  left: 69px;
  top: 50px;
  right: 66px;
  bottom: 712px;
`;

const NaN_0001 = styled.div`
  position: absolute;
  left: 17px;
  top: 0px;
  right: 17px;
  bottom: 36px;
`;

const DogLogoImg = styled(DogLogo)`
  object-fit: cover;
  position: absolute;
  left: -16px;
  top: -2px;
  right: 7px;
  bottom: -2px;
`;

const NavHome = styled.div`
  position: absolute;
  left: 41px;
  top: 196px;
  right: 118px;
  bottom: 614px;
`;

const HomeImg = styled(HomeIcon)`
  object-fit: cover;
  position: absolute;
  left: 0px;
  top: 0px;
  right: 64px;
  bottom: 0px;
`;

const Home_0001 = styled.a`
  color: rgb(132, 203, 255);
  text-overflow: ellipsis;
  font-size: 18px;
  font-family: Quicksand, sans-serif;
  font-weight: 700;
  line-height: 100%;
  text-align: left;
  position: absolute;
  left: 34px;
  top: 1px;
  right: 0px;
  bottom: 3px;
  text-decoration: none;
`;

const NavMylist = styled.div`
  position: absolute;
  left: 41px;
  top: 280px;
  right: 118px;
  bottom: 530px;
`;

const MyList = styled.a`
  color: rgb(180, 180, 183);
  text-overflow: ellipsis;
  font-size: 18px;
  font-family: Quicksand, sans-serif;
  font-weight: 700;
  line-height: 100%;
  text-align: left;
  position: absolute;
  left: 34px;
  top: 1px;
  right: -4px;
  bottom: 3px;
  text-decoration: none;
`;

const MyListImg = styled(MylistIcon)`
  object-fit: cover;
  position: absolute;
  left: 0px;
  top: 0px;
  right: 64px;
  bottom: 0px;
`;

const NavTags = styled.div`
  width: 95px;
  height: 22px;
  overflow: hidden;
  position: absolute;
  left: 41px;
  top: 238px;
`;

const Tags = styled.a`
  color: rgb(180, 180, 183);
  text-overflow: ellipsis;
  font-size: 18px;
  font-family: Quicksand, sans-serif;
  font-weight: 700;
  line-height: 100%;
  text-align: left;
  position: absolute;
  left: 34px;
  top: 2px;
  text-decoration: none;
`;

const TagImg = styled(TagsIcon)`
  object-fit: cover;
  position: absolute;
  left: 0px;
  top: 0px;
  right: 73px;
  bottom: 0px;
`;

const ButtonLogout = styled.div`
  width: 185px;
  height: 40px;
  position: absolute;
  left: calc((calc((50% + 1px)) - 93px));
  top: 743px;
`;

const Rectangle191 = styled.div`
  border: solid 1px rgb(209, 209, 209);
  border-radius: 100px;
  position: absolute;
  left: 0px;
  top: 0px;
  right: 0px;
  bottom: 0px;
`;

const Logout = styled.span`
  color: rgb(180, 180, 183);
  text-overflow: ellipsis;
  font-size: 14px;
  font-family: Quicksand, sans-serif;
  font-weight: 700;
  line-height: 24px;
  text-align: left;
  min-height: 25px;
  position: absolute;
  left: 64px;
  top: 7px;
  right: 63px;
  bottom: 8px;
`;

const NavMypage = styled.div`
  width: 106px;
  height: 24px;
  position: absolute;
  left: 41px;
  top: 322px;
`;

const MyPage = styled.a`
  color: rgb(180, 180, 183);
  text-overflow: ellipsis;
  font-size: 18px;
  font-family: Quicksand, sans-serif;
  font-weight: 700;
  line-height: 100%;
  text-align: left;
  position: absolute;
  left: 36px;
  top: 2px;
  right: 0px;
  bottom: 4px;
  text-decoration: none;
`;

const MypageImg = styled(MypageIcon)`
  object-fit: cover;
  position: absolute;
  left: 0px;
  top: 0px;
  right: 84px;
  bottom: 2px;
`;
