import { useState } from 'react'

export interface CollapsibleProps {
  title: string
  description: string
}

export const useCollapsible = (props: CollapsibleProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen)
  }

  return {
    ...props,
    isOpen,
    toggle,
  }
}
