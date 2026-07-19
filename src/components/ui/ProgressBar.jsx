'use client';

export default function ProgressBar({ value = 0, max = 100, variant = 'default', size = 'md', label }) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));

  const variantClass = variant === 'success'
    ? 'progress-bar--success'
    : variant === 'danger'
      ? 'progress-bar--danger'
      : '';

  const heightMap = { sm: '4px', md: '8px', lg: '12px' };

  return (
    <div>
      {label && (
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '6px',
          fontSize: '0.85rem',
        }}>
          <span style={{ fontWeight: 500, color: 'var(--text-secondary)' }}>{label}</span>
          <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{Math.round(percentage)}%</span>
        </div>
      )}
      <div
        className={`progress-bar ${variantClass}`}
        style={{ height: heightMap[size] }}
        role="progressbar"
        aria-valuenow={percentage}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="progress-bar__fill"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
