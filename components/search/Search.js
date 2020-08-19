import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Container, Input, IconContainer, Button } from './styles';

const Search = () => {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const navigate = () => {
    if (query.length > 0) {
      router.push({
        pathname: '/products',
        query: { name: query },
      })
    }
  }

  const handleOnKeyDown = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      navigate(); // Enter pressed
    }
  }

  const handleOnChange = (event) => {
    setQuery(event.target.value)
  }

  return (
    <form>
      <Container>
        <Input
          className="search-form"
          onChange={handleOnChange}
          onKeyDown={handleOnKeyDown}
          type="text"
          placeholder="Search products, categories ..."
        />
        <IconContainer>
          <Button src="/search.svg" onClick={() => navigate()} alt="Logo" />
        </IconContainer>
      </Container>
    </form>
  )
}

export default Search;