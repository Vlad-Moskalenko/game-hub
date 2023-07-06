import { Spinner, Text } from '@chakra-ui/react';
import useGameTrailer from '../hooks/useGameTrailer';

interface Props {
  id: number;
}

export const GameTrailer = ({ id }: Props) => {
  const { data, isLoading, error } = useGameTrailer(id);

  if (isLoading) return <Spinner />;

  if (error) throw error;

  const res = data?.results[0];

  return res ? (
    <video src={res.data[480]} poster={res.preview} controls />
  ) : (
    <Text>This game doesn't have trailer</Text>
  );
};
