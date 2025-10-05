import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
function Footer(){
    return (<div className="bg-gray-900 text-white py-10 px-6 flex flex-wrap justify-between items-start gap-10 mt-10" id="f" >
      
      
      <div className="max-w-sm ">
        <h1 className="text-4xl lg:text-3xl font-bold text-green-600 mb-3">NEWS-APP</h1>
        <p className="text-lg leading-relaxed">
          We bring you latest news at any corner of the globe. Our mission is to update you with correct awareness. 
        </p>
        <div className="flex gap-4 mt-5 text-2xl">
          <a href="#"><FaFacebookF className="hover:text-green-600 cursor-pointer" /></a>
          <a href="#"><FaInstagram className="hover:text-green-600 cursor-pointer" /></a>
          <a href="#"><FaTwitter className="hover:text-green-600 cursor-pointer" /></a>
          <a href="#"><FaYoutube className="hover:text-green-600 cursor-pointer" /></a>
        </div>
      </div>

      
      <div className="max-w-sm">
        <h2 className="text-3xl  font-semibold text-green-600 mb-3">Subscribe to Our Newsletter</h2>
        <p className="text-lg leading-relaxed mb-4">
          Sign up to receive breaking news, latest  updates, and important current affairs.
        </p>
        <div className="flex items-center flex-wrap">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 rounded-4xl text-white text-sm border-2 mr-3 border-green-600 text-black w-64"
            
          />
          <button className="bg-green-500 text-gray-900 px-4 py-2 rounded-4xl font-bold hover:bg-green-400 mt-5 md:mt-0 lg:mt-0">
            Subscribe
          </button>
        </div>
      </div>

      
      <div className="max-w-sm">
        <h2 className="text-3xl font-semibold text-green-600 mb-3">Contact Us</h2>
        <p className="flex items-center text-lg mb-2" id="c">
          <FaPhoneAlt className="mr-3 text-green-600" /> 9956xxxxxx
        </p>
        <p className="flex items-center text-lg">
          <MdEmail className="mr-3 text-green-600" /> support@news-paper.com
        </p>
      </div>
    </div>
  );

}
export default Footer;