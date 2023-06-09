import { Html, useProgress } from '@react-three/drei'

const CanvasLoader = () => {
  const { progress } = useProgress()
  return (
    <Html
      as='div'
      center
      style={{
        display: 'flex',
        justifyContent: 'right',
        alignItems: 'center',
        flexDirection: 'column',
      }}>
      <div className='radial-progress' style={{ '--value': String(progress.toFixed(2)), '--size': '12rem', '--thickness': '2px' } as any}>
        {progress.toFixed(2)}%
      </div>
    </Html>
  )
}

export default CanvasLoader
