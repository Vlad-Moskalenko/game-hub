import { Heading, Spinner, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import useGameDetails from '../hooks/useGameDetails';

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data, isLoading, error } = useGameDetails(slug!);

  if (isLoading) return <Spinner />;

  if (error) throw error;

  return (
    <>
      <Heading>{data?.name}</Heading>
      <Text>{data?.description_raw}</Text>
    </>
  );
};

export default GameDetailPage;
