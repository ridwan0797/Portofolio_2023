
function Header() {
  const menu = [
    'Works',
    'Profile',
    'Contact',

  ]
  return (
    <div className="w-full bgcolor text-white shadow-xl border-4 border-black h-8">
      <div className='flex flex-row h-full w-full'>
        <div className='flex-none' style={{width: '80%'}}>
          <div className="flex items-center h-full">
            <div className="text-left mx-12 bg-transparent font-bold text-black cursor-pointer hover:bg-blue-600 hover:text-white px-6">
              Ridwan Maulana
            </div>

            <div className="flex flex-row gap-5 my-12 text-sm">
              {menu.map((x) => 
                <div className="text-bar">{x}</div>
              )}
            </div>
          </div>
        </div>

        <div className='flex-grow bg-green-300'>

        </div>
      </div>
    </div>
  );
}

export default Header;