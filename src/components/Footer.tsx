// components/Footer.js
import { faFacebookF, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-darkBackground text-darkText py-8 px-4 md:px-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h2 className="text-2xl font-bold">Music School</h2>
          <p className="mt-2">123 Music Ave, Melody City, TuneLand</p>
          <p>Email: contact@musicschool.com</p>
          <p>Phone: +1 234 567 890</p>
        </div>
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="mt-2">
            <li className="mt-1"><Link href="#" className="hover:text-accent transition-colors">About Us</Link></li>
            <li className="mt-1"><Link href="#" className="hover:text-accent transition-colors">Courses</Link></li>
            <li className="mt-1"><Link href="#" className="hover:text-accent transition-colors">Events</Link></li>
            <li className="mt-1"><Link href="#" className="hover:text-accent transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div className="flex justify-center md:justify-end space-x-6">
          <a href="#" className="text-darkText hover:text-accent transition-colors">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#" className="text-darkText hover:text-accent transition-colors">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" className="text-darkText hover:text-accent transition-colors">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" className="text-darkText hover:text-accent transition-colors">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
      </div>
      <div className="mt-8 text-center border-t border-darkText pt-4">
        <p>&copy; {new Date().getFullYear()} Music School. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
