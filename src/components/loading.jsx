function Load(){
    return(
        <div className="flex flex-col justify-center items-center min-h-screen text-white">
      <div className="flex flex-col items-center">
        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-t-transparent border-green-600 rounded-full animate-spin"></div>

        {/* Text */}
        <h1 className="mt-4 text-2xl font-bold text-green-600 tracking-wider">
          LOADING...
        </h1>
      </div>
    </div>
    )

}
export default Load;