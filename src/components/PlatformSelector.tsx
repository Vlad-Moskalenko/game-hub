import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatforms from '../hooks/usePlatforms';
import usePlatform from '../hooks/usePlatform';

import { useGameQueryStore } from '../statement/gameQueryStore';

const PlatformSelector = () => {
  const selectedPlatformId = useGameQueryStore(state => state.gameQuery.platformId);
  const selectedPlatform = usePlatform(selectedPlatformId);

  const onSelectPlatform = useGameQueryStore(state => state.setPlatformId);
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || 'Platforms'}
      </MenuButton>
      <MenuList>
        {data?.results.map(platform => (
          <MenuItem onClick={() => onSelectPlatform(platform.id)} key={platform.id}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
