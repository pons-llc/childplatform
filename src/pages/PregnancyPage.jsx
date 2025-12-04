import React, { useState } from 'react';
import dummyData from '../data/dummy.json';
import { FileText, Calendar, Plus } from 'lucide-react';

const PregnancyPage = () => {
    const [activeTab, setActiveTab] = useState('registration');
    const { pregnancy } = dummyData;

    return (
        <div>
            <h1 style={{ marginBottom: '1.5rem' }}>妊娠・出産の手続き</h1>

            <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid #eee' }}>
                <TabButton
                    active={activeTab === 'registration'}
                    onClick={() => setActiveTab('registration')}
                    label="妊娠届"
                    icon={<FileText size={18} />}
                />
                <TabButton
                    active={activeTab === 'consultation'}
                    onClick={() => setActiveTab('consultation')}
                    label="妊娠相談"
                    icon={<Calendar size={18} />}
                />
            </div>

            {activeTab === 'registration' && (
                <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                        <h2 style={{ margin: 0, fontSize: '1.2rem' }}>提出済みの妊娠届</h2>
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

                    <div style={{ display: 'grid', gap: '1rem' }}>
                        {pregnancy.registrations.map(reg => (
                            <div key={reg.id} style={{ padding: '1.5rem', backgroundColor: 'white', borderRadius: 'var(--radius-sm)', boxShadow: 'var(--shadow-sm)' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                    <span style={{ fontWeight: 'bold' }}>{reg.content}</span>
                                    <span style={{
                                        backgroundColor: '#e0ffff',
                                        color: '#008b8b',
                                        padding: '0.2rem 0.6rem',
                                        borderRadius: '12px',
                                        fontSize: '0.8rem'
                                    }}>
                                        {reg.status === 'accepted' ? '受理済み' : '申請中'}
                                    </span>
                                </div>
                                <p style={{ color: '#666', margin: 0, fontSize: '0.9rem' }}>提出日: {reg.date}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {activeTab === 'consultation' && (
                <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                        <h2 style={{ margin: 0, fontSize: '1.2rem' }}>妊娠相談の予約</h2>
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

                    <div style={{ display: 'grid', gap: '1rem' }}>
                        {pregnancy.consultations.map(consult => (
                            <div key={consult.id} style={{ padding: '1.5rem', backgroundColor: 'white', borderRadius: 'var(--radius-sm)', boxShadow: 'var(--shadow-sm)' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                    <span style={{ fontWeight: 'bold' }}>
                                        {consult.type === 'initial' ? '初回相談' : '定期相談'}
                                    </span>
                                    <span style={{
                                        backgroundColor: consult.status === 'completed' ? '#eee' : '#fffdd0',
                                        color: consult.status === 'completed' ? '#666' : '#d48795',
                                        padding: '0.2rem 0.6rem',
                                        borderRadius: '12px',
                                        fontSize: '0.8rem'
                                    }}>
                                        {consult.status === 'completed' ? '完了' : '予約済み'}
                                    </span>
                                </div>
                                <p style={{ color: '#666', margin: 0, fontSize: '0.9rem' }}>日時: {consult.date}</p>
                                {consult.notes && <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: '#444' }}>メモ: {consult.notes}</p>}
                            </div>
                        ))}
                    </div>
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

export default PregnancyPage;
