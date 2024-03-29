import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble } from "react-icons/bs";

export default function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl
                 font-semibold dark:text-white"
            >
              <span
                className="px-2 py-1 bg-gradient-to-r from-indigo-500
                 via-purple-500 to-pink-500 rounded-lg text-white"
              >
                CmCi
              </span>
              <span className="text-lg">app</span>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 mt-4 sm:gap-6">

            <div className="">
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link 
                  href="https://www.cmcimedia.com" 
                  target="_blank" 
                  rel =  "noopener noreferrer"
                >  
                    100 JESUS Projects
                </Footer.Link>
                <Footer.Link 
                  href="/about" 
                  target="_blank" 
                  rel =  "noopener noreferrer"
                >  
                  CmCi-App 
                </Footer.Link>
              </Footer.LinkGroup>
            </div>

            <div className="">
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link 
                  href="https://www.github.com" 
                  target="_blank" 
                  rel =  "noopener noreferrer"
                >  
                    GitHub
                </Footer.Link>
                <Footer.Link  href="#">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>

            <div className="">
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">   
                    Privacy Policy
                </Footer.Link>
                <Footer.Link  href="#">
                    Terms &amp; Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>

          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href="#" by="CmCi App by Ary_Exper"
                year={new Date().getFullYear()}
            /> 
            <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
                <Footer.Icon className="text-teal-700 hover:text-blue-500" href="https://www.facebook.com/cmcimontreal" 
                  icon={BsFacebook} 
                />
                <Footer.Icon href="#" icon={BsInstagram} className="text-teal-700 hover:text-blue-500" />
                <Footer.Icon href="#" icon={BsTwitter} className="text-teal-700 hover:text-blue-500" />
                <Footer.Icon href="https://github.com/aryexpert" icon={BsGithub} className="text-teal-700 hover:text-blue-500" />
                <Footer.Icon href="#" icon={BsDribbble} className="text-teal-700 hover:text-blue-500" />
            </div>
        </div>
      </div>
    </Footer>
  );
}
