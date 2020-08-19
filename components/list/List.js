import React, { useState, useEffect } from 'react';
import ProductCard from '../productCard/ProductCard';
import CategoryCard from '../categoryCard/CategoryCard';
import Pagination from '../pagination/Pagination';
import Filter from '../filter/Filter';
import { ListContainer, PaginationContainer } from './styles';
import { SORT_BY, LIST_TYPE } from '../../utils/Constants';

const List = ({ data, type, onClick, itemsPerPage }) => {
  const [currentData, setCurrentData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [sortedBy, setSortedBy] = useState(0);

  useEffect(() => {
    setTotalPages(Math.ceil(data.length / itemsPerPage));
    setCurrentPage(1);
  }, [data])

  useEffect(() => {
    const lastIndex = currentPage * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;
    if (sortedBy) {
      const sortFunc = sortedBy === SORT_BY.LOWER_PRICE ? (a, b) => a.cost - b.cost : (a, b) => b.cost - a.cost;
      setCurrentData(data.sort(sortFunc).slice(firstIndex, lastIndex));
    } else setCurrentData(data.slice(firstIndex, lastIndex));
  }, [data, currentPage, sortedBy])

  const handleOnClick = (value) => {
    if (onClick) {
      onClick(value);
    }
  }

  const paginate = (page) => {
    setCurrentPage(page);
  }

  const products = () => (
    currentData.map((element, idx) => (
      <ProductCard
        key={idx}
        name={element.name}
        category={element.category}
        cost={element.cost}
        src={element.img.url}
        onClick={() => handleOnClick(element._id)} />
    ))
  );


  const categories = () => (
    currentData.map((element, idx) => (
      <CategoryCard
        key={idx}
        name={element.name}
        img={element.img}
        onClick={() => handleOnClick(element.name)} />
    ))
  );

  const cards = () => type === LIST_TYPE.PRODUCTS ? products() : categories();
  const elements = type === LIST_TYPE.PRODUCTS ? 4 : 5;

  const sort = (value) => {
    setSortedBy(value);
    setCurrentPage(1);
  }

  return (
    <div>
      {totalPages > 1 && <PaginationContainer>
        <Pagination total={totalPages} currentPage={currentPage} paginate={(page) => paginate(page)} />
      </PaginationContainer>}
      {type === LIST_TYPE.PRODUCTS && currentData.length > 0 && <Filter selectOption={(value) => sort(value)} />}
      <ListContainer col={elements}>
        {cards()}
      </ListContainer>
    </div>
  )
}

export default List;