function SkillCard({ name, index }) {
  return (
    <div className="skill-card">
      <span>{String(index + 1).padStart(2, '0')}</span>
      <p>{name}</p>
    </div>
  )
}

export default SkillCard