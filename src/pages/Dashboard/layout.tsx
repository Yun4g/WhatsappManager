import { Outlet } from "react-router-dom";

function Layout() {
    return (
          <section className="max-w-3xl mx-auto" >
            <header className="flex justify-between items-center py-[22px] ">
                <div className="flex items-center gap-[24px]">
                    <div className="flex items-center gap-2">
                        <span>
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.19971 3.19971H15.9997C23.069 3.19971 28.7997 8.93046 28.7997 15.9997H15.9997C8.93046 15.9997 3.19971 10.269 3.19971 3.19971Z" fill="#181925" />
                                    <path d="M3.19971 16H15.9997C23.069 16 28.7997 21.7308 28.7997 28.8H15.9997C8.93046 28.8 3.19971 23.0692 3.19971 16Z" fill="#181925" />
                                </svg>

                            </span>
                        <div>
                            

                            <p className="text-[12px] text-[#242424] font-bold">Braide Shekinah</p>
                            <p className="text-[#B5B5B5] text-[10px] font-medium">0812 407 6934</p>

                        </div>
                      
                    </div>
                      <button>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_184_589)">
                                    <path d="M4 9.5L8 13.5L12 9.5" stroke="#999999" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M4 6.5L8 2.5L12 6.5" stroke="#999999" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_184_589">
                                        <rect width="16" height="16" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                        </button>
                </div>

                <div>
                    <img src={'/placeholderManjaer.jpg'} alt="user profile" className="h-[30px] w-[30px] rounded-full" />
                </div>
            </header>


            <main>
                  <section>
                      <div>

                      </div>
                      <div>
                        <Outlet/>
                      </div>
                  </section>
            </main>

            
        </section>
    );
}

export default Layout;