import { SimpleGrid, Spinner, Image } from '@chakra-ui/react';
import useGameScreenshots from '../hooks/useGameScreenshots';

interface Props {
  id: number;
}

const GameScreenshots = ({ id }: Props) => {
  const { data, isLoading, error } = useGameScreenshots(id);

  if (isLoading) return <Spinner />;

  if (error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {data?.results?.map(({ image, id }) => (
        <Image key={id} src={image} alt="screenshots" />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
