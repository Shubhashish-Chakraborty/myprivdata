export default function App() {
    return (
        <div className="h-screen text-custom-6 bg-custom-1">

            <div className="flex justify-center mt-10">
                <img
                    src="myPrivData_Logo.png"
                    className="w-28 text-white md:w-36 lg:w-48"
                    alt="TheShortLinkLogo"
                />
            </div>

            <div className="md:text-4xl text-xl cursor-progress hover:underline animate-bounce mt-28 transition-all duration-500 flex justify-center items-center">
                Launching Veryy Soon!!
            </div>
            <div className="md:text-4xl text-xl cursor-progress hover:underline animate-bounce transition-all duration-500 flex justify-center items-center">
                Working on It!!
            </div>
            <div className="flex justify-center gap-5 mt-10">
                <div className="flex md:flex-row flex-col justify-center gap-5">
                    <h1 className="hover:underline cursor-pointer" onClick={() => { window.open("https://github.com/Shubhashish-Chakraborty/myprivdata") }}>Frontend</h1>
                    <h1 className="hover:underline cursor-pointer" onClick={() => { window.open("https://github.com/Shubhashish-Chakraborty/myprivdata-api") }}>Backend</h1>
                </div>
            </div>

        </div>
    )
}