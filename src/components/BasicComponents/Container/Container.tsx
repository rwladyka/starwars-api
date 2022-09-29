import { CSSProperties } from 'react'
import './Container.css'

type ContainerProps = {
  children: JSX.Element
  style?: CSSProperties
}

const Container = ({ children, style }: ContainerProps) => (
  <div className="container" style={style}>
    {children}
  </div>
)

export default Container
