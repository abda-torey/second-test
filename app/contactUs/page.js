import React from "react";
import { FaWhatsapp,FaPhoneAlt } from "react-icons/fa";

function ContactUsPage() {
  return (
    <section class="bg-gray-100 px-40 h-screen">
      <div class="container px-6 py-12 ">
        <div>
          <p class="font-medium text-blue-500 dark:text-blue-400">Contact us</p>

          <h1 class="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">
            Tell Us About Your Project.
          </h1>

          <p class="mt-3 text-gray-500 dark:text-gray-400">
            We’d love to hear from you. Please fill out this form or contact us directly.
          </p>
        </div>

        <div class="grid grid-cols-1  mt-8 lg:grid-cols-2 ">
          <div class="grid grid-cols-2 md:grid-cols-2">
            <div>
              <span class="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </span>

              <h2 class="mt-4 text-base font-medium text-gray-800 dark:text-white">
                Email
              </h2>
              
              <p class="mt-2 text-sm text-blue-500 dark:text-blue-400">
                hello@merakiui.com
              </p>
            </div>

            <div>
              <span class="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </span>

              <h2 class="mt-4 text-base font-medium text-gray-800 dark:text-white">
                Live chat
              </h2>
              <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Our friendly team is here to help.
              </p>
              
            </div>

            <div>
              <a
                href="https://wa.me/+254722364119"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="inline-block p-3 text-gray-100 rounded-full bg-green-500 dark:bg-gray-800">
                  <FaWhatsapp className="w-5 h-5" color="currentColor"/>
                </span>
              </a>

              <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
                Whatsapp
              </h2>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Chat With us Directly
              </p>
            </div>

           
            <div>
              <a href="tel:+15550000000">
                <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                  <FaPhoneAlt className="w-5 h-5" />
                </span>
              </a>

              <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
                Phone
              </h2>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Mon-Fri from 8am to 5pm.
              </p>
             
            </div>
          </div>

          <div class="pb-10  ml-8 rounded-lg bg-gray-50 dark:bg-gray-800 md:p-8 max-w-lg mb-20  -mt-40">
          <h1 class="mt-2 mb-3 text-xl font-semibold text-gray-800 md:text-xl dark:text-white">
            Describe Your Project.
          </h1>
            <form>
              <div class="-mx-2 md:items-center md:flex">
                <div class="flex-1 px-2">
                  <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="John "
                    class="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div class="flex-1 px-2 mt-4 md:mt-0">
                  <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    class="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
              </div>

              <div class="mt-4">
                <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="johndoe@example.com"
                  class="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div class="w-full mt-4">
                <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Message
                </label>
                <textarea
                  class="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Message" 
                ></textarea>
              </div>

              <button class="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUsPage;
