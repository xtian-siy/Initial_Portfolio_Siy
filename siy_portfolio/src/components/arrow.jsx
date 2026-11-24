function Arrow({ direction = 'up-right', className = '' }) {
  return (
    <svg className={`arrow-icon ${className}`} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {direction === 'up' ? <path d="M12 19V5m-6 6 6-6 6 6" /> : <path d="M5 19 19 5M5 5h14v14" />}
    </svg>
  )
}
export default Arrow
