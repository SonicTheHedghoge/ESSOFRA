import React from 'react';
import { MapPin, Phone, Clock, Facebook, Instagram } from 'lucide-react';
import { ADDRESS, APP_NAME, PHONE_NUMBER } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-charcoal text-cream pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h3 className="font-serif text-4xl text-white mb-8">{APP_NAME}</h3>
              <p className="text-gray-400 font-light max-w-md text-lg">
                Authentic Tunisian cuisine in the heart of Houmt Souk. 
                Experience the tradition.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                    <div className="flex items-start gap-4">
                        <MapPin className="text-terracotta mt-1 shrink-0" />
                        <div>
                            <h4 className="font-bold uppercase tracking-widest text-sm mb-2 text-sand">Location</h4>
                            <p className="text-gray-400 font-light">{ADDRESS}</p>
                            <p className="text-gray-500 text-sm mt-1">VVH5+JQC</p>
                        </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                        <Phone className="text-terracotta mt-1 shrink-0" />
                        <div>
                            <h4 className="font-bold uppercase tracking-widest text-sm mb-2 text-sand">Contact</h4>
                            <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} className="text-gray-400 font-light hover:text-white transition-colors">
                                {PHONE_NUMBER}
                            </a>
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                     <div className="flex items-start gap-4">
                        <Clock className="text-terracotta mt-1 shrink-0" />
                        <div>
                            <h4 className="font-bold uppercase tracking-widest text-sm mb-2 text-sand">Opening Hours</h4>
                            <ul className="text-gray-400 font-light space-y-1 text-sm">
                                <li className="flex justify-between w-full gap-4"><span>Tue - Sun:</span> <span>12:30 - 15:30</span></li>
                                <li className="flex justify-between w-full gap-4 pl-[72px]"><span>19:00 - 22:00</span></li>
                                <li className="text-terracotta mt-2">Closed on Mondays</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex gap-4">
                <a href="#" className="w-10 h-10 border border-gray-600 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-charcoal transition-all duration-300 rounded-full">
                    <Facebook size={18} />
                </a>
                <a href="#" className="w-10 h-10 border border-gray-600 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-charcoal transition-all duration-300 rounded-full">
                    <Instagram size={18} />
                </a>
            </div>
          </div>

          {/* Map Representation */}
          <div className="h-full min-h-[400px] w-full bg-gray-800 relative rounded-sm overflow-hidden group">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.483783471016!2d10.8576!3d33.8765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa52d00000001%3A0x123456789abc!2sEssofra!5e0!3m2!1sen!2stn!4v1600000000000!5m2!1sen!2stn" 
                width="100%" 
                height="100%" 
                style={{border:0, filter: 'grayscale(100%) invert(92%) contrast(83%)'}} 
                allowFullScreen={true} 
                loading="lazy"
                title="Essofra Map"
                className="opacity-70 group-hover:opacity-100 transition-opacity duration-500"
            ></iframe>
            <div className="absolute top-4 right-4 bg-white text-charcoal px-4 py-2 text-xs font-bold shadow-lg pointer-events-none">
                HOUMT SOUK
            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
            <p>&copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Designed for Excellence.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;