import { useEffect, useState } from 'react';
import { ProgressBar } from 'react95';
import '../Loading.css';

export function Loading() {
  const [percent, setPercent] = useState(0);
   useEffect(() => {
    const timer = setInterval(() => {
      setPercent(previousPercent => {
        if (previousPercent === 100) {
          return 100;
        }
        const diff = Math.random() * 10;
        return Math.min(previousPercent + diff, 100);
      });
    }, 300);
    return () => {
      clearInterval(timer);
    };
   }, []);
  
  return (
    <div className='w-full h-screen bgcolor'>
        <div class="w-full h-full flex justify-center">
        <div className='h-full flex items-center'>
          <div className='flex flex-col'>
            <div className='container'>
              <div class="dinosaur">
                <div class="layer layer-1">
                  <div class="row">
                    <div class="pixel pixel-8 push-12"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                  </div>
                  <div class="row">
                    <div class="pixel pixel-2 push-11"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                    <div class="pixel pixel-7 push-1"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                  </div>
                  <div class="row">
                    <div class="pixel pixel-10 push-11"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                  </div>
                  <div class="row">
                    <div class="pixel pixel-10 push-11"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                  </div>
                  <div class="row">
                    <div class="pixel pixel-10 push-11"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                  </div>
                  <div class="row">
                    <div class="pixel pixel-5 push-11"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                  </div>
                  <div class="row">
                    <div class="pixel pixel-8 push-11"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                  </div>
                  <div class="row">
                    <div class="pixel"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                    <div class="pixel pixel-5 push-9"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                  </div>
                  <div class="row">
                    <div class="pixel"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                    <div class="pixel pixel-7 push-7"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                  </div>
                  <div class="row">
                    <div class="pixel pixel-2"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                    <div class="pixel pixel-11 push-4"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                  </div>
                  <div class="row">
                    <div class="pixel pixel-3"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                    <div class="pixel pixel-11 push-1"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                    <div class="pixel push-1"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                  </div>
                  <div class="row">
                    <div class="pixel pixel-15"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                  </div>
                  <div class="row">
                    <div class="pixel pixel-14 push-1"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                  </div>
                  <div class="row">
                    <div class="pixel pixel-12 push-2"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                  </div>
                  <div class="row">
                    <div class="pixel pixel-11 push-3"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                  </div>
                  <div class="row">
                    <div class="pixel pixel-9 push-4"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                  </div>
                  <div class="row">
                    <div class="pixel pixel-7 push-5"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                  </div>
                  {/* <!-- ANIMATED START REAR --> */}
                  <div class="row">
                    <div class="pixel push-10 legs-2"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                    <div class="pixel"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                    <div class="pixel pixel legs-1"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                  </div>
                  <div class="row">
                    <div class="pixel push-11 legs-2"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                  </div>
                  <div class="row">
                    <div class="pixel push-11 legs-2"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                  </div>
                  <div class="row">
                    <div class="pixel pixel-2 push-11 legs-2"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                  </div>
                  {/* <!-- ANIMATED END REAR --> */}
                </div>
                <div class="layer layer-2">
                  <div class="row">
                    <div class="pixel pixel-8 push-12"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                  </div>
                  <div class="row">
                    <div class="pixel pixel-2 push-11"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                    <div class="pixel pixel-7 push-1"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                  </div>
                  <div class="row">
                    <div class="pixel pixel-10 push-11"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                  </div>
                  <div class="row">
                    <div class="pixel pixel-10 push-11"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                  </div>
                  <div class="row">
                    <div class="pixel pixel-10 push-11"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                  </div>
                  <div class="row">
                    <div class="pixel pixel-5 push-11"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                  </div>
                  <div class="row">
                    <div class="pixel pixel-8 push-11"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                  </div>
                  <div class="row">
                    <div class="pixel"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                    <div class="pixel pixel-5 push-9"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                  </div>
                  <div class="row">
                    <div class="pixel"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                    <div class="pixel pixel-7 push-7"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                  </div>
                  <div class="row">
                    <div class="pixel pixel-2"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                    <div class="pixel pixel-9 push-4"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                  </div>
                  <div class="row">
                    <div class="pixel pixel-3"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                    <div class="pixel pixel-11 push-1"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                  </div>
                  <div class="row">
                    <div class="pixel pixel-15"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                  </div>
                  <div class="row">
                    <div class="pixel pixel-14 push-1"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                  </div>
                  <div class="row">
                    <div class="pixel pixel-12 push-2"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                  </div>
                  <div class="row">
                    <div class="pixel pixel-11 push-3"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                  </div>
                  <div class="row">
                    <div class="pixel pixel-9 push-4"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                  </div>
                  <div class="row">
                    <div class="pixel pixel-7 push-5"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                  </div>
                </div>
                <div class="layer layer-3">
                  <div class="row">
                    <div class="pixel pixel-8 push-12"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                  </div>
                  <div class="row">
                    <div class="pixel pixel-2 push-11"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                    <div class="pixel pixel-7 push-1"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                  </div>
                  <div class="row">
                    <div class="pixel pixel-10 push-11"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                  </div>
                  <div class="row">
                    <div class="pixel pixel-10 push-11"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                  </div>
                  <div class="row">
                    <div class="pixel pixel-10 push-11"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                  </div>
                  <div class="row">
                    <div class="pixel pixel-5 push-11"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                  </div>
                  <div class="row">
                    <div class="pixel pixel-8 push-11"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                  </div>
                  <div class="row">
                    <div class="pixel"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                    <div class="pixel pixel-5 push-9"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                  </div>
                  <div class="row">
                    <div class="pixel"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                    <div class="pixel pixel-7 push-7"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                  </div>
                  <div class="row">
                    <div class="pixel pixel-2"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                    <div class="pixel pixel-11 push-4"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                  </div>
                  <div class="row">
                    <div class="pixel pixel-3"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                    <div class="pixel pixel-11 push-1"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                    <div class="pixel push-1"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                  </div>
                  <div class="row">
                    <div class="pixel pixel-15"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                  </div>
                  <div class="row">
                    <div class="pixel pixel-14 push-1"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                  </div>
                  <div class="row">
                    <div class="pixel pixel-12 push-2"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                  </div>
                  <div class="row">
                    <div class="pixel pixel-11 push-3"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                  </div>
                  <div class="row">
                    <div class="pixel pixel-9 push-4"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                  </div>
                  <div class="row">
                    <div class="pixel pixel-7 push-5"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                  </div>
                  {/* <!-- ANIMATED START FRONT --> */}
                  <div class="row">
                    <div class="pixel pixel-2 push-6"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                    <div class="pixel legs-1"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                  </div>
                  <div class="row">
                    <div class="pixel push-6 legs-1"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                    <div class="pixel"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                    <div class="pixel legs-2"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                  </div>
                  <div class="row">
                    <div class="pixel push-6 legs-1"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                  </div>
                  <div class="row">
                    <div class="pixel pixel-2 push-6 legs-1"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                  </div>
                  {/* <!-- ANIMATED END FRONT --> */}
                </div>
              </div>
            </div>

            <div className='mt-5 w-96 font-windows'>
              <div className='font-semibold text-2xl my-4 font-window'>Welcome to Ridawn97 OS</div>
              <ProgressBar color='#1c0af2' variant='tile' value={Math.floor(percent)} />
              <div className=''>Dino Markono is Loading {Math.floor(percent)}%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}