import { useRef } from 'react';
import DrawingBox from './components/DrawingBox'
import Toolbar from './components/Toolbar';
import PostButton from './components/PostButton';

function App() {
  const canvasRef = useRef(null);
  return (
    <>
      <DrawingBox width={345} height={345} canvasRef={canvasRef} />
      <Toolbar canvasRef={canvasRef} />
      <PostButton canvasRef={canvasRef} />
    </>
  )
}

export default App;