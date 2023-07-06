import { SimpleGrid, Text } from '@chakra-ui/react';

import { Game } from '../entities/Game';
import CriticScore from './CriticScore';
import { DefinitionItem } from './DefinitionItem';

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  const { name, description_raw, parent_platforms, metacritic, genres, publishers } = game;
  return (
    <SimpleGrid columns={2} as="dl">
      <DefinitionItem term="Platforms">
        {parent_platforms?.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Metascore">
        <CriticScore score={metacritic} />
      </DefinitionItem>
      <DefinitionItem term="Genres">
        {genres?.map(genre => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Publishers">
        {publishers?.map(publisher => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </DefinitionItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
