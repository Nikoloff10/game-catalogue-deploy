import { Card, CardBody, HStack, Skeleton } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card.Root >
      <Skeleton height="200px" />
      <CardBody gapY={4}>
        <Skeleton height="20px" width="80%" />
        <HStack justifyContent="space-between">
          <Skeleton height="20px" width="30%" />
          <Skeleton height="20px" width="10%" />
        </HStack>
      </CardBody>
    </Card.Root>
  );
};

export default GameCardSkeleton;
