import { Checkbox, Text, CloseButton, HStack } from '@chakra-ui/react';

const TodoItem = ({ id, title, completed, onToggle, remove }) => {
  const handleClick = () => {
    onToggle({
      variables: {
        id,
        completed: !completed
      }
    })
  }

  const removeTodo = () => {
    remove({
      variables: { id }
    })
  }

  return (
    <HStack spacing={3}>
      <Checkbox
        isChecked={completed}
        onChange={handleClick}
      />
      <Text>{title}</Text>
      <CloseButton onClick={removeTodo} />
    </HStack>
  );
};

export default TodoItem;