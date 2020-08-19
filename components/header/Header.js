import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addPoints } from '../../redux/actions/Actions';
import { BsPlusCircleFill } from 'react-icons/bs';
import Link from 'next/link';
import { FiMenu } from 'react-icons/fi';
import { Img, TextContainer, Text, Navbar, NavItem, Toggle, NavCollapse, PointsContainer, TextPoints, ImgCoin, ImgBuy } from './styles';
import Search from '../search/Search';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [points, setPoints] = useState(0);
  const [name, setName] = useState('');
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (state.user) {
      setName(state.user.name);
      setPoints(state.user.points)
    }
  }, [state])

  const handleOnlick = () => {
    setOpen(!open)
  }

  return (
    <Navbar>
      <NavItem>
        <Link href="/">
          <Img src="/AeroStore.svg" alt="Logo" />
        </Link>
      </NavItem>
      <NavCollapse open={open}>
        <div className="search-container">
          <Search />
        </div>
        <TextContainer>
          <Text>{name}</Text>
          <PointsContainer>
            <TextPoints><label>{points}</label></TextPoints>
            <ImgCoin><img src="/icons/coin.svg" /></ImgCoin>
          </PointsContainer>
          <ImgBuy><BsPlusCircleFill size={30} color={"grey"} onClick={() => dispatch(addPoints())}/></ImgBuy>
          <Link href="/products"><Text>Products</Text></Link>
        </TextContainer>
      </NavCollapse>
      <Toggle onClick={() => handleOnlick()}>
        <FiMenu />
      </Toggle>
      <style jsx>{`
        .search-container {
          padding-top: 8px;
        }
      `}</style>
    </Navbar>
  )
}

export default Header;