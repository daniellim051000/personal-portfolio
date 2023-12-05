import { Flex, Progress, Text, Container } from "@chakra-ui/react";
import { NextComponentType } from "next";

type Props = {
  language: string;
  level: number;
};

const Skill: React.FC<Props> = ({ language, level }) => {
  return (
    <Flex flexDirection="row" justify="left" align="center" mt={4}>
      <Container maxW={"150px"}>
        <Text>{language}</Text>
      </Container>
      <Progress
        value={level}
        colorScheme="purple"
        width="100%"
        outline="1px solid lightgray"
        rounded={8}
      />
    </Flex>
  );
};

export default Skill;
