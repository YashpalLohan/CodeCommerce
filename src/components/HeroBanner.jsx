export default function HeroBanner() {
    return (
        <section className="flex flex-col md:flex-row w-full h-[500px] border border-gray-500 mx-auto max-w-screen-xl mt-[20.5px]">
            {/* Left side - text */}
            <div className="flex flex-col justify-center items-start w-full md:w-1/2 bg-white px-10">
                <p className="text-sm text-gray-500 uppercase mb-2 relative">
                    <span className="inline-block w-10 h-[1px] bg-gray-400 mr-3 align-middle"></span>
                    Our Bestsellers
                </p>
                <h1 className="text-5xl font-light text-gray-800 mb-4">Latest Arrivals</h1>
                <button className="flex items-center space-x-2 text-sm font-semibold text-gray-800 hover:text-black">
                    <span>Shop Now</span>
                    <span className="inline-block w-10 h-[1px] bg-gray-600 ml-2 align-middle"></span>
                </button>
            </div>

            {/* Right side - image */}
            <div className="w-full md:w-1/2  flex items-center justify-center bg-black">
                <img
                    src="/assets/model.png"
                    alt="Model"
                    className="w-full h-full object-cover"
                />
            </div>
        </section>
    );
}