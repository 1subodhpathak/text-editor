import React from 'react'

interface ToolbarButtonProps {
  active?: boolean
  disabled?: boolean
  onClick: () => void
  title: string
  children: React.ReactNode
  shortcutKeys?: string[]
  className?: string
}

export const ToolbarButton: React.FC<ToolbarButtonProps> = ({
  active,
  disabled,
  onClick,
  title,
  children,
  shortcutKeys,
  className,
}) => {
  const shortcutText = shortcutKeys ? `(${shortcutKeys.join('+')})` : ''
  const tooltipText = shortcutText ? `${title} ${shortcutText}` : title

  return (
    <button
      type="button"
      className={`
        p-2 rounded-lg 
        ${active ? 'bg-gray-200 dark:bg-gray-700' : ''} 
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}
        ${className || ''}
      `}
      onClick={onClick}
      disabled={disabled}
      title={tooltipText}
    >
      {children}
    </button>
  )
}