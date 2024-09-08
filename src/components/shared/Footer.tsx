import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#F9F9FB] py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        
        {/* Logo and Description */}
        <div>
          <div className="mb-4">
            <img src="/logo.png" alt="Logo" className="h-10" /> {/* Replace with your logo */}
          </div>
          <p className="text-sm text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat ut wisi enim ad minim.
          </p>
          <div className="flex space-x-3">
            <a href="#" aria-label="Facebook" className="text-gray-500 hover:text-purple-600">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter" className="text-gray-500 hover:text-purple-600">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Instagram" className="text-gray-500 hover:text-purple-600">
              <FaInstagram />
            </a>
          </div>
        </div>
        
        {/* Product Column */}
        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-4">Product</h4>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#" className="hover:text-purple-600">Connections</a></li>
            <li><a href="#" className="hover:text-purple-600">Protocols</a></li>
            <li><a href="#" className="hover:text-purple-600">Personas</a></li>
            <li><a href="#" className="hover:text-purple-600">Integrations</a></li>
            <li><a href="#" className="hover:text-purple-600">Catalog</a></li>
            <li><a href="#" className="hover:text-purple-600">Pricing</a></li>
            <li><a href="#" className="hover:text-purple-600">Security</a></li>
            <li><a href="#" className="hover:text-purple-600">GDPR</a></li>
          </ul>
        </div>
        
        {/* For Developers Column */}
        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-4">For Developers</h4>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#" className="hover:text-purple-600">Docs</a></li>
            <li><a href="#" className="hover:text-purple-600">API</a></li>
            <li><a href="#" className="hover:text-purple-600">Open Source</a></li>
            <li><a href="#" className="hover:text-purple-600">Engineering Team</a></li>
          </ul>
        </div>
        
        {/* Company Column */}
        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-4">Company</h4>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#" className="hover:text-purple-600">Careers</a></li>
            <li><a href="#" className="hover:text-purple-600">Blog</a></li>
            <li><a href="#" className="hover:text-purple-600">Press</a></li>
          </ul>
        </div>
        
        {/* Support Column */}
        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-4">Support</h4>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#" className="hover:text-purple-600">Help Center</a></li>
            <li><a href="#" className="hover:text-purple-600">Contact Us</a></li>
            <li><a href="#" className="hover:text-purple-600">Security</a></li>
            <li><a href="#" className="hover:text-purple-600">Bulletins</a></li>
            <li><a href="#" className="hover:text-purple-600">Documentation</a></li>
            <li><a href="#" className="hover:text-purple-600">Partner</a></li>
            <li><a href="#" className="hover:text-purple-600">Portal</a></li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-4">Newsletter</h4>
          <form className="flex space-x-2">
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full focus:outline-none"
            />
            <button className="btn bg-purple-600 text-white hover:bg-purple-700 px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 10l7-7m0 0l7 7M12 3v18"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="text-center mt-8 text-gray-500">
        <p className="text-sm">© Rahul Rao</p>
      </div>
    </footer>
  );
};

export default Footer;
