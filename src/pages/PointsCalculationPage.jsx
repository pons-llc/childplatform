import React, { useState, useEffect } from 'react';
import { Calculator, ArrowLeft, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const PointsCalculationPage = () => {
    const [fatherWork, setFatherWork] = useState('fulltime_long');
    const [motherWork, setMotherWork] = useState('fulltime_long');
    const [adjustments, setAdjustments] = useState({
        singleParent: false,
        siblingInCare: false,
        grandparentsNearby: false,
    });
    const [totalScore, setTotalScore] = useState(0);

    const pointsMap = {
        fulltime_long: 50, // >40h
        fulltime_short: 48, // >35h
        parttime_long: 40, // >30h
        parttime_short: 30, // >20h
        unemployed: 0
    };

    useEffect(() => {
        let score = 0;

        // Basic Points (Lower of the two parents determines the base, usually, but for simplicity let's sum them or take the average? 
        // Actually, standard Japanese system usually takes the parents' situation. 
        // Often it's: (Father Points) + (Mother Points) + Adjustments.
        // Let's assume a simplified additive model for this demo, or standard "Selection Index" where both parents must work.
        // Standard model: Base index is determined by the parent with lower points (needs less care? no, usually lower points = more time available).
        // Let's use: Base Score = (Father + Mother) / 2 (Just for demo) OR Sum.
        // Let's go with Sum for a "High Score is Good" feel.

        score += pointsMap[fatherWork];
        score += pointsMap[motherWork];

        // Adjustments
        if (adjustments.singleParent) score += 10; // Single parent bonus (usually replaces one parent's score, but let's just add for simplicity in this demo logic if user selects both work + single? UI should handle this but let's keep logic simple)
        // Actually if single parent, usually one work status is ignored or set to max. 
        // Let's just add bonus.

        if (adjustments.siblingInCare) score += 5;
        if (adjustments.grandparentsNearby) score -= 5; // Often negative if help is available

        setTotalScore(score);
    }, [fatherWork, motherWork, adjustments]);

    const handleAdjustmentChange = (e) => {
        const { name, checked } = e.target;
        setAdjustments(prev => ({ ...prev, [name]: checked }));
    };

    return (
        <div>
            <div style={{ marginBottom: '1.5rem' }}>
                <Link to="/childcare" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ff8ba7', marginBottom: '1rem' }}>
                    <ArrowLeft size={20} /> 保育トップに戻る
                </Link>
                <h1 style={{ margin: 0 }}>点数シミュレーション</h1>
                <p style={{ color: '#666' }}>あなたの世帯状況から、認可保育園の入園選考指数（目安）を計算します。</p>
            </div>

            <div style={{ display: 'grid', gap: '2rem', maxWidth: '800px', margin: '0 auto' }}>

                {/* Result Card */}
                <div style={{
                    backgroundColor: '#fff0f5',
                    padding: '2rem',
                    borderRadius: 'var(--radius-md)',
                    textAlign: 'center',
                    boxShadow: 'var(--shadow-md)',
                    border: '2px solid #ffb7b2'
                }}>
                    <h2 style={{ margin: '0 0 1rem 0', color: '#7d5a5a', fontSize: '1.2rem' }}>現在の合計点数（目安）</h2>
                    <div style={{ fontSize: '4rem', fontWeight: 'bold', color: '#ff8ba7', lineHeight: 1 }}>
                        {totalScore} <span style={{ fontSize: '1.5rem' }}>点</span>
                    </div>
                </div>

                {/* Father's Status */}
                <Section title="父の状況">
                    <SelectGroup
                        label="就労状況"
                        value={fatherWork}
                        onChange={(e) => setFatherWork(e.target.value)}
                        options={[
                            { value: 'fulltime_long', label: 'フルタイム (週40時間以上) - 50点' },
                            { value: 'fulltime_short', label: 'フルタイム (週35時間以上) - 48点' },
                            { value: 'parttime_long', label: 'パート・時短 (週30時間以上) - 40点' },
                            { value: 'parttime_short', label: 'パート・時短 (週20時間以上) - 30点' },
                            { value: 'unemployed', label: '求職中・無職 - 0点' },
                        ]}
                    />
                </Section>

                {/* Mother's Status */}
                <Section title="母の状況">
                    <SelectGroup
                        label="就労状況"
                        value={motherWork}
                        onChange={(e) => setMotherWork(e.target.value)}
                        options={[
                            { value: 'fulltime_long', label: 'フルタイム (週40時間以上) - 50点' },
                            { value: 'fulltime_short', label: 'フルタイム (週35時間以上) - 48点' },
                            { value: 'parttime_long', label: 'パート・時短 (週30時間以上) - 40点' },
                            { value: 'parttime_short', label: 'パート・時短 (週20時間以上) - 30点' },
                            { value: 'unemployed', label: '求職中・無職 - 0点' },
                        ]}
                    />
                </Section>

                {/* Adjustments */}
                <Section title="調整指数">
                    <div style={{ display: 'grid', gap: '1rem' }}>
                        <Checkbox
                            name="singleParent"
                            checked={adjustments.singleParent}
                            onChange={handleAdjustmentChange}
                            label="ひとり親世帯 (+10点)"
                        />
                        <Checkbox
                            name="siblingInCare"
                            checked={adjustments.siblingInCare}
                            onChange={handleAdjustmentChange}
                            label="兄弟姉妹が在園中 (+5点)"
                        />
                        <Checkbox
                            name="grandparentsNearby"
                            checked={adjustments.grandparentsNearby}
                            onChange={handleAdjustmentChange}
                            label="祖父母が同居・近居 (-5点)"
                        />
                    </div>
                </Section>

                <div style={{
                    backgroundColor: '#f9f9f9',
                    padding: '1rem',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.9rem',
                    color: '#666',
                    display: 'flex',
                    gap: '0.5rem'
                }}>
                    <Info size={20} style={{ minWidth: '20px' }} />
                    <p style={{ margin: 0 }}>
                        このシミュレーション結果はあくまで目安です。実際の選考基準や点数は自治体によって異なります。
                        詳細は各自治体の保育課にお問い合わせください。
                    </p>
                </div>

            </div>
        </div>
    );
};

const Section = ({ title, children }) => (
    <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: 'var(--radius-sm)', boxShadow: 'var(--shadow-sm)' }}>
        <h3 style={{ marginTop: 0, marginBottom: '1rem', borderLeft: '4px solid #a2e8dd', paddingLeft: '0.8rem', color: '#333' }}>
            {title}
        </h3>
        {children}
    </div>
);

const SelectGroup = ({ label, value, onChange, options }) => (
    <div>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#555' }}>{label}</label>
        <select
            value={value}
            onChange={onChange}
            style={{
                width: '100%',
                padding: '0.8rem',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid #ddd',
                backgroundColor: '#fff',
                fontSize: '1rem'
            }}
        >
            {options.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
        </select>
    </div>
);

const Checkbox = ({ name, checked, onChange, label }) => (
    <label style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', cursor: 'pointer' }}>
        <input
            type="checkbox"
            name={name}
            checked={checked}
            onChange={onChange}
            style={{ width: '20px', height: '20px', accentColor: '#ffb7b2' }}
        />
        <span style={{ fontSize: '1rem' }}>{label}</span>
    </label>
);

export default PointsCalculationPage;
