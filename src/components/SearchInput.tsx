import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useGameQueryStore } from '../statement/gameQueryStore';

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const onSearch = useGameQueryStore(state => state.setSearchText);
  const navigate = useNavigate();

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        if (ref.current) {
          onSearch(ref.current.value);
          navigate('/');
        }
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input ref={ref} borderRadius={20} placeholder="Search games..." variant="filled" />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
