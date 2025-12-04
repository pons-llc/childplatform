import React, { useState } from 'react';
import dummyData from '../data/dummy.json';
import { FileText, Heart, Plus } from 'lucide-react';

const ChildbirthPage = () => {
    const [activeTab, setActiveTab] = useState('notification');
    const { childbirth } = dummyData;

    return (
        <div>
            <h1 style={{ marginBottom: '1.5rem' }}>出産後の手続き</h1>

            <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid #eee' }}>
                <TabButton
                    active={activeTab === 'notification'}
                    onClick={() => setActiveTab('notification')}
                    label="出生連絡票"
                    icon={<FileText size={18} />}
                />
                <TabButton
                    active={activeTab === 'consultation'}
                    onClick={() => setActiveTab('consultation')}
                    label="出生後相談"
                    icon={<Heart size={18} />}
                />
            </div>

            {activeTab === 'notification' && (
                <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                        <h2 style={{ margin: 0, fontSize: '1.2rem' }}>提出済みの出生連絡票</h2>
                        <button style={{
                            backgroundColor: '#ffb7b2',
                            color: 'white',
                            padding: '0.5rem 1rem',
                            borderRadius: '20px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}>
                            <Plus size={16} /> 新規作成
                        </button>
                    </div>

                    {childbirth.notifications.length === 0 ? (
                        <div style={{ padding: '2rem', textAlign: 'center', color: '#888', backgroundColor: '#fafafa', borderRadius: 'var(--radius-sm)' }}>
                            提出済みの連絡票はありません
                        </div>
                    ) : (
                        <div style={{ display: 'grid', gap: '1rem' }}>
                            {/* List items would go here */}
                        </div>
                    )}
                </div>
            )}

            {activeTab === 'consultation' && (
                <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                        <h2 style={{ margin: 0, fontSize: '1.2rem' }}>出生後相談の予約</h2>
                        <button style={{
                            backgroundColor: '#ffb7b2',
                            color: 'white',
                            padding: '0.5rem 1rem',
                            borderRadius: '20px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}>
                            <Plus size={16} /> 新規予約
                        </button>
                    </div>

                    {childbirth.consultations.length === 0 ? (
                        <div style={{ padding: '2rem', textAlign: 'center', color: '#888', backgroundColor: '#fafafa', borderRadius: 'var(--radius-sm)' }}>
                            予約済みの相談はありません
                        </div>
                    ) : (
                        <div style={{ display: 'grid', gap: '1rem' }}>
                            {/* List items would go here */}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

const TabButton = ({ active, onClick, label, icon }) => (
    <button
        onClick={onClick}
        style={{
            padding: '0.8rem 1.5rem',
            borderBottom: active ? '3px solid #ffb7b2' : '3px solid transparent',
            color: active ? '#ff8ba7' : '#888',
            fontWeight: active ? 'bold' : 'normal',
            backgroundColor: 'transparent',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            transition: 'all 0.2s'
        }}
    >
        {icon}
        {label}
    </button>
);

export default ChildbirthPage;
