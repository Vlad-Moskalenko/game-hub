import { useParams } from 'react-router-dom';
import { Heading, Spinner, SimpleGrid, GridItem } from '@chakra-ui/react';

import ExpandableText from '../components/ExpandableText';
import GameAttributes from '../components/GameAttributes';
import useGameDetails from '../hooks/useGameDetails';
import { GameTrailer } from '../components/GameTrailer';
import GameScreenshots from '../components/GameScreenshots';

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data, isLoading, error } = useGameDetails(slug!);

  if (isLoading) return <Spinner />;

  if (error || !data) throw error;

  const { name, description_raw, id } = data;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <GridItem>
        <Heading>{name}</Heading>
        <ExpandableText>{description_raw}</ExpandableText>
        <GameAttributes game={data} />
      </GridItem>
      <GridItem>
        <GameTrailer id={id} />
        <GameScreenshots id={id} />
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetailPage;
