import { gql } from '@apollo/client'

export const ALL_TODO = gql`
  query AllTodos {
    todos: allTodos {
      id
      title
      completed
    }
  }
`

export const ADD_TODO = gql`
  mutation CreateTodo($title: String!, $user_id: ID!, $completed: Boolean!) {
    newTodo: createTodo(title: $title, user_id: $user_id, completed: $completed) {
      id
      title
      completed
    }
  }
`

export const SET_COMPLETED = gql`
  mutation SetCompleted($id: ID!, $completed: Boolean) {
    updateTodo(id: $id, completed: $completed) {
      id
      title
      completed
    }
  }
`

export const REMOVE_TODO = gql`
  mutation RemoveTodo($id: ID!) {
    removeTodo(id: $id) {
      id
      title
      completed
    }
  }
`