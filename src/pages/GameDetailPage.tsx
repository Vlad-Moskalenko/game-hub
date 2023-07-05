import { Heading, Spinner, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ExpandableText from '../components/ExpandableText';
import useGameDetails from '../hooks/useGameDetails';

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data, isLoading, error } = useGameDetails(slug!);

  if (isLoading) return <Spinner />;

  if (error) throw error;

  return (
    <>
      <Heading>{data?.name}</Heading>
      <ExpandableText>{data?.description_raw}</ExpandableText>
    </>
  );
};

export default GameDetailPage;
