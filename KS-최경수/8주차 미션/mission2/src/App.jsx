import { useState } from 'react'
import { styled } from 'styled-components';
import { useMutation, useQuery } from '@tanstack/react-query';
import { deleteTodo, getTodoList, patchTodo, postTodo } from './apis/todo';
import { queryClient } from './main';

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [search, setSearch] = useState("");
  const [checked, setChecked] = useState(false);


  const { data: todos, isPending } = useQuery({
    queryFn: () => getTodoList({ title: search }),
    queryKey: ["todos", search],
  });

  const {mutate:postTodoMutation} = useMutation({
    mutationFn: postTodo,
    onSuccess: (data) => {
      console.log(data)
      queryClient.invalidateQueries({
        queryKey:["todos"],
      })
    },
    onError: (error) => {
      console.log(error)
    },
    onSettled: () => {
      // 항상 실행되는 함수
    },
  })

  const {mutate:deleteTodoMutation} = useMutation({
    mutationFn: deleteTodo,
    onSuccess: (data) =>{
      queryClient.invalidateQueries({
        queryKey:["todos"],
      })
    },
    onError: (error) => {
      console.log(error)
    }
  })

  const {mutate:patchTodoMutation} = useMutation({
    mutationFn: patchTodo,
    onSuccess: (data) =>{
      queryClient.invalidateQueries({
        queryKey:["todos"],
      })
    },
    onError: (error) => {
      console.log(error)
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, content)
    postTodoMutation({title, content})
  }


  return (
    <>
      <h1>Todo 검색</h1>
      <InputSearch value={search} onChange={(e) => setSearch(e.target.value)} />
      <Form onSubmit={handleSubmit}>
        <Input
          name='title'
          placeholder='제목을 입력해주세요..'
          value={title}
          onChange={(e) => setTitle(e.target.value)} />
        <Input
          name='content'
          placeholder='컨텐츠를 입력해주세요..'
          value={content}
          onChange={(e) => setContent(e.target.value)} />
        <Button type='submit'>투두 생성</Button>
      </Form>
      {isPending ? <div>로딩중 입니다.</div> : (
        <Container>
          {todos[0]?.map((todo) => {
            return (
              <TodoContainer key={todo.id}>
                <input type='checkBox' defaultChecked={todo.checked} onChange={(e) => patchTodoMutation({id: todo.id, checked: !todo.checked})}/>
                <div>
                  <p>{todo.title}</p>
                  <p>{todo.content}</p>
                </div>
                <button onClick={() => deleteTodoMutation({id: todo.id})}>삭제하기</button>
              </TodoContainer>
            )
          }
          )}
        </Container>
      )}
    </>
  )
}

export default App

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const Input = styled.input`
  padding: 10px;
  border: 1px solid purple;
  border-radius: 20px;
`

const InputSearch = styled.input`
  padding: 10px;
  border: 1px solid purple;
  border-radius: 20px;
  margin-bottom: 10px;
`

const Button = styled.button`
  border-radius: 10px;
  border: none;
  padding: 20px;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`
const TodoContainer = styled.div`
  display: flex;
  gap: 5px;

`