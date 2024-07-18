import { useEffect } from "react";
const tg = (window as any).Telegram.WebApp;

function App() {
  useEffect(() => {
     tg.ready()
  }, []);
  const oneClose = ()=>{
      tg.close()
  }
  return (
    <>
      work
      <button onClick={oneClose}>Закрыть</button>
    </>
  )
}

export default App
