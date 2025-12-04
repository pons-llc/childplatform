import React, { useState } from 'react';
import { CheckCircle, Circle, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const TodoList = ({ todos }) => {
    const categories = {
        pregnancy: '妊娠中',
        childbirth: '出産準備',
        childcare: '育児・保育'
    };

    const groupedTodos = todos.reduce((acc, todo) => {
        if (!acc[todo.category]) acc[todo.category] = [];
        acc[todo.category].push(todo);
        return acc;
    }, {});

    return (
        <div style={{ display: 'grid', gap: '2rem' }}>
            {Object.entries(groupedTodos).map(([category, items]) => (
                <div key={category}>
                    <h2 style={{
                        fontSize: '1.2rem',
                        color: '#7d5a5a',
                        borderLeft: '4px solid #ffb7b2',
                        paddingLeft: '0.8rem',
                        marginBottom: '1rem'
                    }}>
                        {categories[category] || category}
                    </h2>

                    <div style={{ backgroundColor: 'white', borderRadius: 'var(--radius-sm)', boxShadow: 'var(--shadow-sm)', overflow: 'hidden' }}>
                        {items.map((todo, index) => (
                            <TodoItem key={todo.id} todo={todo} isLast={index === items.length - 1} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

const TodoItem = ({ todo, isLast }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div style={{
            borderBottom: isLast ? 'none' : '1px solid #f0f0f0',
            backgroundColor: todo.completed ? '#fafafa' : 'white'
        }}>
            <div
                onClick={() => setExpanded(!expanded)}
                style={{
                    padding: '1rem 1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    cursor: 'pointer'
                }}
            >
                <div style={{ color: todo.completed ? '#a2e8dd' : '#ddd' }}>
                    {todo.completed ? <CheckCircle size={24} /> : <Circle size={24} />}
                </div>
                <div style={{ flex: 1 }}>
                    <p style={{
                        margin: 0,
                        fontWeight: 'bold',
                        color: todo.completed ? '#aaa' : '#333',
                        textDecoration: todo.completed ? 'line-through' : 'none'
                    }}>
                        {todo.title}
                    </p>
                    <p style={{ margin: 0, fontSize: '0.8rem', color: todo.completed ? '#ccc' : '#ff8ba7' }}>
                        期限: {todo.dueDate}
                    </p>
                </div>
                <div style={{ color: '#ccc' }}>
                    {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
            </div>

            {expanded && (
                <div style={{
                    padding: '0 1.5rem 1.5rem 4rem',
                    fontSize: '0.9rem',
                    color: '#666',
                    animation: 'fadeIn 0.2s ease-in'
                }}>
                    <p style={{ marginTop: 0, marginBottom: '0.8rem' }}>
                        <span style={{ fontWeight: 'bold', color: '#7d5a5a' }}>概要: </span>
                        {todo.description || '詳細はありません。'}
                    </p>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{
                            display: 'inline-block',
                            padding: '0.2rem 0.6rem',
                            borderRadius: '12px',
                            fontSize: '0.8rem',
                            backgroundColor: todo.completed ? '#e0ffff' : '#fff0f5',
                            color: todo.completed ? '#008b8b' : '#d48795'
                        }}>
                            ステータス: {todo.completed ? '完了' : '未完了'}
                        </div>

                        {todo.relatedLink && (
                            <Link to={todo.relatedLink} style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.3rem',
                                color: '#ff8ba7',
                                fontSize: '0.8rem',
                                textDecoration: 'underline'
                            }}>
                                関連ページへ <ExternalLink size={14} />
                            </Link>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default TodoList;
