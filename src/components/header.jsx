function Head(){
    return <div className="m-20">
        <div className="flex justify-center items-center flex-wrap">
            <div className="text-gray-600 capitalize w-180">
                <h1 className=" text-2xl md:text-6xl lg:text-6xl xl:text-6xl">Global Headlines at Your Fingertips at Anytime, Anywhere</h1>
                <p className="text-green-600 text-sm  md:text-3xl mt-5 lg:text-3xl xl:text-3xl">Get the latest breaking news, trending stories, and in-depth analysis from around the world — all in one place. Our news app keeps you connected to what matters most, with real-time updates and personalized content tailored to your interests.</p>
                <button className="mt-5 bg-green-600 p-3 rounded-4xl text-white hover:bg-green-500">GET NEWS </button>
            </div>
            <div>
                <img className="w-100 blur-none"  src="download.png" alt="news-app"/>
            </div>
            
        </div>
    </div>

}
export default Head;