interface Props {
  isOpen: boolean
  onToggle: () => void
}

const GridIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
    <rect x="0" y="0" width="5" height="5" />
    <rect x="9" y="0" width="5" height="5" />
    <rect x="0" y="9" width="5" height="5" />
    <rect x="9" y="9" width="5" height="5" />
  </svg>
)

const CloseIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
    <line x1="2" y1="2" x2="12" y2="12" />
    <line x1="12" y1="2" x2="2" y2="12" />
  </svg>
)

function MenuButton({ isOpen, onToggle }: Props) {
  return (
    <button
      className={`menu-btn${isOpen ? ' menu-btn--open' : ''}`}
      onClick={onToggle}
      aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
      aria-expanded={isOpen}
    >
      <span className="menu-btn__icon">
        {isOpen ? <CloseIcon /> : <GridIcon />}
      </span>
    </button>
  )
}

export default MenuButton
