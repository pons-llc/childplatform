import React from 'react';
import dummyData from '../data/dummy.json';
import TodoList from '../components/TodoList';

const TopPage = () => {
    const { user, todos } = dummyData;

    // Filter for incomplete or urgent todos for the top page, or just show all
    // For now, let's show all as requested, but maybe limit or prioritize?
    // User request: "やることリストはトップページに送信して" -> Send ToDo list to Top Page.
    // We will display the full list for now as it's a dashboard.

    return (
        <div>
            <div style={{
                backgroundColor: '#fff0f5',
                padding: '2rem',
                borderRadius: 'var(--radius-md)',
                marginBottom: '2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <div>
                    <h1 style={{ margin: 0, fontSize: '1.8rem', color: '#d48795' }}>こんにちは、{user.name}さん</h1>
                    <p style={{ marginTop: '0.5rem', color: '#666' }}>
                        出産予定日まであと <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#ff8ba7' }}>101</span> 日です
                    </p>
                </div>
                <div style={{
                    width: '100px',
                    height: '100px',
                    backgroundColor: 'white',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: 'var(--shadow-sm)'
                }}>
                    <span style={{ fontSize: '3rem' }}>🤰</span>
                </div>
            </div>

            <div className="top-page-grid">
                <div>
                    <h2 style={{ borderBottom: '2px solid #ffe4e1', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>
                        お知らせ
                    </h2>

                    <div style={{ display: 'grid', gap: '1rem' }}>
                        <div style={{ padding: '1.5rem', backgroundColor: 'white', borderRadius: 'var(--radius-sm)', boxShadow: 'var(--shadow-sm)' }}>
                            <h3 style={{ marginTop: 0, fontSize: '1.1rem' }}>妊娠届が受理されました</h3>
                            <p style={{ color: '#666', marginBottom: 0 }}>2025年8月10日に提出された妊娠届が受理されました。</p>
                        </div>
                        <div style={{ padding: '1.5rem', backgroundColor: 'white', borderRadius: 'var(--radius-sm)', boxShadow: 'var(--shadow-sm)' }}>
                            <h3 style={{ marginTop: 0, fontSize: '1.1rem' }}>次回の健診は12月10日です</h3>
                            <p style={{ color: '#666', marginBottom: 0 }}>母子手帳を忘れずに持参してください。</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 style={{ borderBottom: '2px solid #ffe4e1', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>
                        やることリスト
                    </h2>
                    <TodoList todos={todos} />
                </div>
            </div>
        </div>
    );
};

export default TopPage;
