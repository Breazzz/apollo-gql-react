import { VStack } from '@chakra-ui/react';
import { Spinner } from '@chakra-ui/react';

import { useMutation, useQuery } from '@apollo/client'
import { ALL_TODO, REMOVE_TODO, SET_COMPLETED } from "../apollo/todos";

import TodoItem from './TodoItem';
import TotalCount from './TotalCount';

const TodoList = () => {
  const { loading, error, data } = useQuery(ALL_TODO)

  const [toggleTodo, {error: toggleError}] = useMutation(SET_COMPLETED)
  const [removeTodo, {error: removeError}] = useMutation(REMOVE_TODO, {
    // update(cache, { data: { removeTodo }}) {
    //   const { todos } = cache.readQuery({ query: ALL_TODO })
    //   cache.writeQuery({
    //     query: ALL_TODO,
    //     data: {
    //       todos: todos.filter(todo => todo.id !== removeTodo.id)
    //     }
    //   })
    // }
    update(cache, { data: {removeTodo}}){
      cache.modify({
        fields: {
          allTodos(currentTodos = []) {
            return currentTodos.filter(todo => todo.__ref !== `Todo:${removeTodo.id}`)
          }
        }
      })
    }
  })

  if (loading) return <Spinner />
  if (error || toggleError || removeError) return <h2>Error...</h2>

  return (
    <>
    <VStack spacing={2} mt={4}>
      {data.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          onToggle={toggleTodo}
          remove={removeTodo}
          {...todo}
        />
      ))}
    </VStack>
    <TotalCount />
    </>
  );
};

export default TodoList;
