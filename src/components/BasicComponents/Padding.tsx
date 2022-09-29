type PaddingProps = {
  padding?: string
  children: JSX.Element
}

const Padding = ({ padding = '8px', children }: PaddingProps) => (
  <div style={{ padding }}>{children}</div>
)

export default Padding
