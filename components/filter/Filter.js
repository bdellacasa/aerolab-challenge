import React, { useState } from 'react';
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';
import { Container, Row, CurrentVal, Option, Select } from './styles';
import { SORT_BY } from '../../utils/Constants';

const Filter = ({ selectOption }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [currentValue, setCurrentValue] = useState('Sort by');

  const handleOnClick = (value = false) => {
    setShowOptions(!showOptions);
    if (value) {
      setCurrentValue(value);
      selectOption(value);
    }
  }

  return (
    <Container>
      <Row onClick={() => handleOnClick()}>
        <CurrentVal>{currentValue}</CurrentVal>
        <CurrentVal>{showOptions ? <TiArrowSortedUp /> : <TiArrowSortedDown />}</CurrentVal>
      </Row>
      <Select show={showOptions}>
        <Option onClick={() => handleOnClick(SORT_BY.LOWER_PRICE)}>{SORT_BY.LOWER_PRICE}</Option>
        <Option onClick={() => handleOnClick(SORT_BY.HIGHER_PRICE)}>{SORT_BY.HIGHER_PRICE}</Option>
      </Select>
    </Container>
  )
}

export default Filter;