import React, { useState } from 'react';
import styled from 'styled-components';

import Icon from '../icon/Icon';
import { useDebounce } from '../../common';

const SearchIcon = styled(Icon)`
  position: absolute;
  top: 1.2rem;
  right: 1rem;
`;

const StyledSearchField = styled.div`
  display: block;
  position: relative;
  width: 50%;
  margin: 0 auto;
`;

const SearchInput = styled.input`
  padding: 1rem;
  width: calc(100% - 4rem);
  padding-right: 3rem;
  font-size: ${({ theme, type }) => `${theme.font.heading.h2.fontSize}rem`};
`;

function SearchField({ searchCb }) {
  const [searchValue, setSearchValue] = useState('');

  const debouncedSearchValue = useDebounce(searchValue, 500);

  searchCb(debouncedSearchValue);

  return (
    <StyledSearchField>
      <SearchIcon size={16} kind="search" />
      <SearchInput
        onChange={e => setSearchValue(e.target.value)}
        placeholder="Search term..."
      />
    </StyledSearchField>
  );
}

export default SearchField;
