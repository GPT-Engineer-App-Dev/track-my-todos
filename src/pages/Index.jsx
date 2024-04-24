import { useState } from 'react';
import { Box, Button, Input, List, ListItem, ListIcon, IconButton } from '@chakra-ui/react';
import { FaPlus, FaTrash, FaCheckCircle, FaRegCircle } from 'react-icons/fa';

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const handleAddTask = () => {
    if (input) {
      setTasks([...tasks, { id: Date.now(), text: input, isCompleted: false }]);
      setInput('');
    }
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleToggleTaskCompletion = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, isCompleted: !task.isCompleted } : task));
  };

  return (
    <Box p={5}>
      <Input
        placeholder="Add a new task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        size="lg"
        mb={3}
      />
      <Button leftIcon={<FaPlus />} colorScheme="blue" onClick={handleAddTask}>
        Add Task
      </Button>
      <List spacing={3} mt={5}>
        {tasks.map(task => (
          <ListItem key={task.id} d="flex" alignItems="center" justifyContent="space-between">
            <ListIcon as={task.isCompleted ? FaCheckCircle : FaRegCircle} color={task.isCompleted ? 'green.500' : 'gray.500'} onClick={() => handleToggleTaskCompletion(task.id)} cursor="pointer" />
            <Box flex="1" as="span" ml={2} textDecoration={task.isCompleted ? 'line-through' : 'none'}>
              {task.text}
            </Box>
            <IconButton aria-label="Delete task" icon={<FaTrash />} onClick={() => handleDeleteTask(task.id)} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Index;