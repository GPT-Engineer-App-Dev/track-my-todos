import { Box, Text } from '@chakra-ui/react';

const About = () => {
  return (
    <Box p={5}>
      <Text fontSize="xl" mb={3}>About the Todo App</Text>
      <Text mb={2}>This application is designed to help users manage their daily tasks efficiently.</Text>
      <Text mb={2}>Users can add tasks, mark them as complete, and delete them when no longer needed.</Text>
      <Text>The app is built using React and Chakra UI, showcasing a simple yet effective user interface.</Text>
    </Box>
  );
};

export default About;