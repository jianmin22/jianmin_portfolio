import { GalleryCarousel } from "~/component/gallery-carousel";
import NavBar from "~/component/navbar";
export default function Timeline() {
    return (
        <main className="flex min-h-screen flex-col items-center bg-gray-900">
            <NavBar />
            <div className="container flex flex-col items-center gap-12 px-4 py-16 ">
                <h1 className="text-5xl font-extrabold tracking-tight text-center pt-10 text-white sm:text-[5rem]">
                    <span className="text-red-200">M</span>y <span className="text-blue-200">Ti</span>m<span className="text-emerald-100">e</span>l<span className="text-violet-200">i</span>n<span className="text-yellow-100">e</span>
                </h1>
                <div className="container mx-auto w-full h-full">
                    <div className="relative wrap overflow-hidden p-10 h-full">
                        <div className="border-2-2 absolute border-opacity-20 border-gray-300 h-full border" style={{ left: '50%' }}></div>

                        {/* <!-- right timeline --> */}
                        <div className="mb-8 flex justify-between items-center w-full right-timeline">
                            <div className="order-1 w-5/12"></div>
                            <div className="z-20 flex items-center order-1 bg-white shadow-xl w-8 h-8 rounded-full">
                            </div>
                            <div className="order-1 bg-gray-200 rounded-lg shadow-xl w-5/12 px-6 py-4">
                                <h3 className="mb-3 font-bold text-gray-800 text-xl">MY BIRTHDAY</h3>
                                <h3 className="mb-3 font-gray text-gray-700 text-m">15 November 2003</h3>
                                <div className="h-36 w-full m-5 relative">
                                    <img src="../../images/sleep.png" alt="Linkedin" className="absolute inset-0 w-full h-full object-contain" />
                                </div>
                                <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </div>

                        {/* <!-- left timeline --> */}
                        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                            <div className="order-1 w-5/12"></div>
                            <div className="z-20 flex items-center order-1 bg-white shadow-xl w-8 h-8 rounded-full">
                            </div>
                            <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                                <h3 className="mb-3 font-bold text-white text-xl">Lorem Ipsum</h3>
                                <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </div>

                        {/* <!-- right timeline --> */}
                        <div className="mb-8 flex justify-between items-center w-full right-timeline">
                            <div className="order-1 w-5/12"></div>
                            <div className="z-20 flex items-center order-1 bg-white shadow-xl w-8 h-8 rounded-full">
                            </div>
                            <div className="order-1 bg-gray-200 rounded-lg shadow-xl w-5/12 px-6 py-4">
                                <h3 className="mb-3 font-bold text-gray-800 text-xl">Lorem Ipsum</h3>
                                <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </div>

                        {/* <!-- left timeline --> */}
                        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                            <div className="order-1 w-5/12"></div>
                            <div className="z-20 flex items-center order-1 bg-white shadow-xl w-8 h-8 rounded-full">
                            </div>
                            <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                                <h3 className="mb-3 font-bold text-white text-xl">Lorem Ipsum</h3>
                                <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
