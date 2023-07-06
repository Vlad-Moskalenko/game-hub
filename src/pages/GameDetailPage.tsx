import { useParams } from 'react-router-dom';
import { Heading, Spinner, Text } from '@chakra-ui/react';

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
    <>
      <Heading>{name}</Heading>
      <ExpandableText>{description_raw || ''}</ExpandableText>
      <GameAttributes game={data} />
      <GameTrailer id={id} />
      <GameScreenshots id={id} />
    </>
  );
};

export default GameDetailPage;
