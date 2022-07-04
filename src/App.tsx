import Card, { CardVariant } from "./components/Card";
import EventsExample from "./components/EventsExample";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import UserPage from "./components/UsersPage";
import TodoPage from "./components/TodoPage";
import UserItemPage from "./components/UserItemPage";
import TodoItemPage from "./components/TodoItemPage";

const App = () => {


  return (
    <BrowserRouter>
      <div><Link to='/users'>Users</Link></div>
      <div>  <Link to='todos'>To-do list</Link></div>

      <Routes>
        <Route path="/users" element={<UserPage />} />
        <Route path="/todos" element={<TodoPage />} />
        <Route path="/users/:id" element={<UserItemPage />} />
        <Route path="/todos/:id" element={<TodoItemPage />} />
      </Routes>
    </BrowserRouter>
  )
}
/* 
<Route path="/user/:id" element={<UserItemPage />} />
          <Route path="/todo/:id" element={<TodoItemPage />} />
          <Route path="*" element={<div>NotFound</div>} /> */


/* <div>
  <EventsExample />
  <Card onClick={(num) => console.log('click', num)} variant={CardVariant.outlined} width="200px" height="200px">
    <button>Button</button>
  </Card>
</div> */


export default App;
