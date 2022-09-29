import { useEffect, useRef } from 'react'

type OutsideClickProps = {
  children: JSX.Element
  onClickOutside: () => void
}

const OutsideClick = ({ children, onClickOutside }: OutsideClickProps) => {
  const component = useRef<HTMLDivElement>(null)

  function listener({ target }: MouseEvent) {
    if (!target || !component.current) return

    if (target instanceof Node && !component.current?.contains(target)) {
      onClickOutside()
    }
  }

  useEffect(() => {
    document.addEventListener('click', listener)
    return () => {
      document.removeEventListener('click', listener)
    }
  })

  return <div ref={component}>{children}</div>
}

export default OutsideClick
