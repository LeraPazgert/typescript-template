import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { ITodo } from '../types/types';
import { useParams, useNavigate } from 'react-router-dom';

const TodoItemPage: FC = () => {
    type TodoItemPageParams = {
        id: string;
    }

    const [todo, setTodo] = useState<ITodo | null>(null);
    const params = useParams<TodoItemPageParams>();

    const navigate = useNavigate();

    useEffect(() => {
        fetchTodo();
    }, []);

    async function fetchTodo() {
        try {
            const response = await axios.get<ITodo>('https://jsonplaceholder.typicode.com/todos/' + params.id)
            setTodo(response.data);
        } catch (e) {
            alert(e);
        }
    }
    return (
        <div>
            <button onClick={() => navigate("/todos")}>Back</button>
            <h2>Need to do a  {todo?.title}</h2>
        </div>
    );
};

export default TodoItemPage;
