import React from 'react';
import dummyData from '../data/dummy.json';
import TodoList from '../components/TodoList';

const TodoPage = () => {
    const { todos } = dummyData;

    return (
        <div>
            <h1 style={{ marginBottom: '1.5rem' }}>やることリスト（全項目）</h1>
            <p style={{ marginBottom: '2rem', color: '#666' }}>
                妊娠・出産・育児に関するすべてのタスクを確認できます。
            </p>
            <TodoList todos={todos} />
        </div>
    );
};

export default TodoPage;
