import './App.css'
import img from "../src/assets/image-qr-code.png";

function App() {

  return (
    <main className='h-dvh bg-slate-300 grid place-content-center'>
      <div className='w-72 bg-white text-center p-3 rounded-2xl'>
        <div>
          <img
            src={img}
            alt="QR"
            className="w-full rounded-lg"
          />
        </div>
        <h1 className='text-slate-900 text-[22px] leading-[1.2] font-extrabold mt-4'>
          Improve your front-end skills by building projects
        </h1>
        <p className='text-slate-500 text-body leading-[1.4] tracking-[0.2] mt-3 mb-5'>scan the QR code visit Frontend Mentor and take your coding skills to the next level</p>
      </div>
    </main>
  )
}

export default App;
