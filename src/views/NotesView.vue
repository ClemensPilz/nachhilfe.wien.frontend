<template>
  <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css">
  <link rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css">

  <main class="profile-page">
    <section class="relative block h-500-px">
      <div class="absolute top-0 w-full h-full bg-center bg-cover" style="
            background-image: url('https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80');
          ">
        <span id="blackOverlay" class="w-full h-full absolute opacity-50 bg-black"></span>
      </div>
      <div class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
           style="transform: translateZ(0px)">
        <svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
             version="1.1" viewBox="0 0 2560 100" x="0" y="0">
          <polygon class="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
    </section>
    <section class="relative py-16 bg-blueGray-200">
      <div class="container mx-auto px-4">
        <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
          <div class="px-6">
            <div class="flex flex-wrap justify-center">
              <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                <div class="relative">
                  <img alt="..."
                       src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=634&q=80"
                       class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
      <div class="mx-auto container py-20 px-6">
        <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6">
          <div class="rounded">
            <div
                class="w-full h-64 flex flex-col justify-between dark:bg-gray-800 bg-white dark:border-gray-700 rounded-lg border border-gray-400 mb-6 py-5 px-4">
              <div>
                <h4 class="text-gray-800 dark:text-gray-100 font-bold mb-3">13 things to work on</h4>
                <p class="text-gray-800 dark:text-gray-100 text-sm">Our interior design experts work with you to
                  create the
                  space that you have been dreaming about.</p>
              </div>
              <div>
                <div class="flex items-center justify-between text-gray-800 dark:text-gray-100">
                  <p class="text-sm">March 28, 2020</p>
                  <button
                      class="w-8 h-8 rounded-full bg-gray-800 dark:bg-gray-100 dark:text-gray-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-black"
                      aria-label="edit note" role="button">
                    <img class="dark:hidden"
                         src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-3-multiple-styled-cards-svg1.svg"
                         alt="edit"/>
                    <img class="dark:block hidden"
                         src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-3-multiple-styled-cards-svg1dark.svg"
                         alt="edit"/>
                  </button>
                </div>
              </div>
            </div>
            <div
                class="w-full h-64 flex flex-col justify-between bg-pink-300 rounded-lg border border-pink-300 mb-6 py-5 px-4">
              <div>
                <h4 class="text-gray-800 font-bold mb-3">13 things to work on</h4>
                <p class="text-gray-800 text-sm">Our interior design experts work with you to create the space
                  that you have
                  been dreaming about.</p>
              </div>
              <div>
                <div class="flex items-center justify-between text-gray-800">
                  <p class="text-sm">March 28, 2020</p>
                  <button
                      class="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-pink-300   focus:ring-black"
                      aria-label="edit note" role="button">
                    <img class="dark:hidden"
                         src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-3-multiple-styled-cards-svg1.svg"
                         alt="edit"/>
                    <img class="dark:block hidden"
                         src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-3-multiple-styled-cards-svg1dark.svg"
                         alt="edit"/>
                  </button>
                </div>
              </div>
            </div>
            <div
                class="w-full h-64 flex flex-col justify-between items-start bg-blue-300 rounded-lg border border-blue-300 mb-6 py-5 px-4">
              <div>
                <h4 class="text-gray-800 font-bold mb-3">13 things to work on</h4>
                <p class="text-gray-800 text-sm">Probabo, inquit, sic agam, ut labore et voluptatem sequi
                  nesciunt, neque
                  porro
                  quisquam est, quid malum, sensu iudicari</p>
              </div>
              <div class="w-full flex flex-col items-start">
                <div
                    class="mb-3 border border-gray-800 rounded-full px-3 py-1 text-gray-800 text-xs flex items-center"
                    aria-label="Due on" role="contentinfo">
                  <img src="../svgs/4-by-3-multiple-styled-cards-svg2.svg" alt="clock"/>
                  <p class="ml-2">7 Sept, 23:00</p>
                </div>
                <div class="flex items-center justify-between text-gray-800 w-full">
                  <p class="text-sm">March 28, 2020</p>
                  <button
                      class="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-blue-300  focus:ring-black"
                      aria-label="edit note" role="button">
                    <img class="dark:hidden"
                         src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-3-multiple-styled-cards-svg1.svg"
                         alt="edit"/>
                    <img class="dark:block hidden"
                         src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-3-multiple-styled-cards-svg1dark.svg"
                         alt="edit"/>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="rounded">
            <div
                class="w-full h-64 flex flex-col justify-between dark:bg-gray-800 bg-white dark:border-gray-700 rounded-lg border border-gray-400 mb-6 py-5 px-4">
              <div>
                <h3 class="text-gray-800 dark:text-gray-100 leading-7 font-semibold w-11/12">What does success
                  as a UX
                  designer
                  look like and how to get there systematically</h3>
              </div>
              <div>
                <div class="flex items-center justify-between text-gray-800">
                  <p class="dark:text-gray-100 text-sm">March 28, 2020</p>
                  <button
                      class="w-8 h-8 rounded-full dark:bg-gray-100 dark:text-gray-800 bg-gray-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-black"
                      aria-label="edit note" role="button">
                    <img class="dark:hidden"
                         src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-3-multiple-styled-cards-svg1.svg"
                         alt="edit"/>
                    <img class="dark:block hidden"
                         src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-3-multiple-styled-cards-svg1dark.svg"
                         alt="edit"/>
                  </button>
                </div>
              </div>
            </div>
            <div
                class="w-full h-64 flex flex-col justify-between dark:bg-gray-800 bg-white dark:border-gray-700 rounded-lg border border-gray-400 mb-6 py-5 px-4">
              <div>
                <h3 class="text-gray-800 dark:text-gray-100 leading-7 font-semibold w-11/12">What does success
                  as a UX
                  designer
                  look like and how to get there systematically</h3>
              </div>
              <div>
                <div class="mb-3 flex items-center">
                  <div
                      class="border border-gray-300 dark:border-gray-700 rounded-full px-3 py-1 dark:text-gray-400 text-gray-600 text-xs flex items-center"
                      aria-label="due on" role="contentinfo">
                    <img
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-3-multiple-styled-cards-svg2.svg"
                        alt="clock"/>
                    <p class="ml-2 dark:text-gray-400">7 Sept, 23:00</p>
                  </div>
                  <button
                      class="p-1 bg-gray-800 dark:bg-gray-100 rounded-full ml-2 text-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-black"
                      aria-label="save in starred items" role="button">
                    <img
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-3-multiple-styled-cards-svg3.svg"
                        alt="star"/>
                  </button>
                </div>
                <div class="flex items-center justify-between text-gray-800">
                  <p class="dark:text-gray-100 text-sm">March 28, 2020</p>
                  <button
                      class="w-8 h-8 rounded-full dark:bg-gray-100 dark:text-gray-800 bg-gray-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-black"
                      aria-label="edit note" role="button">
                    <img class="dark:hidden"
                         src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-3-multiple-styled-cards-svg1.svg"
                         alt="edit"/>
                    <img class="dark:block hidden"
                         src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-3-multiple-styled-cards-svg1dark.svg"
                         alt="edit"/>
                  </button>
                </div>
              </div>
            </div>
            <div
                class="w-full h-64 flex flex-col justify-between dark:bg-gray-800 bg-white dark:border-gray-700 rounded-lg border border-gray-400 mb-6 py-5 px-4">
              <div>
                <h3 class="text-gray-800 dark:text-gray-100 leading-7 font-semibold w-11/12">What does success
                  as a UX
                  designer
                  look like and how to get there systematically</h3>
              </div>
              <div>
                <div class="mb-3 flex items-center flex-no-wrap">
                  <div class="w-6 h-6 bg-cover bg-center rounded-md">
                    <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_0.png"
                         alt="read by Alia"
                         class="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white dark:border-gray-700 shadow"/>
                  </div>
                  <div class="w-6 h-6 bg-cover rounded-md -ml-2">
                    <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_1.png"
                         alt="read by jason"
                         class="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white dark:border-gray-700 shadow"/>
                  </div>
                  <div class="w-6 h-6 bg-cover rounded-md bg-center -ml-2">
                    <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_2.png"
                         alt="read by Kane"
                         class="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white dark:border-gray-700 shadow"/>
                  </div>
                </div>
                <div class="flex items-center justify-between text-gray-800">
                  <p class="dark:text-gray-100 text-sm">March 28, 2020</p>
                  <button
                      class="w-8 h-8 rounded-full dark:bg-gray-100 dark:text-gray-800 bg-gray-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-black"
                      aria-label="edit note" role="button">
                    <img class="dark:hidden"
                         src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-3-multiple-styled-cards-svg1.svg"
                         alt="edit"/>
                    <img class="dark:block hidden"
                         src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-3-multiple-styled-cards-svg1dark.svg"
                         alt="edit"/>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="rounded">
            <div
                class="w-full h-64 flex flex-col justify-between items-start dark:bg-gray-800 bg-white dark:border-gray-700 rounded-lg border border-gray-400 mb-6 py-5 px-4">
              <div>
                <h4 class="text-gray-800 dark:text-gray-100 font-bold mb-3">13 things to work on</h4>
                <p class="text-gray-800 dark:text-gray-100 text-sm">Probabo, inquit, sic agam, ut labore et
                  voluptatem sequi
                  nesciunt, neque porro quisquam est, quid malum, sensu iudicari</p>
              </div>
              <div class="w-full flex flex-col items-start">
                <div aria-label="time" role="contentinfo"
                     class="mb-3 border border-gray-800 rounded-full px-3 py-1 text-gray-800 dark:text-gray-400 dark:border-gray-700 text-xs flex items-center">
                  <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-3-multiple-styled-cards-svg2.svg"
                       alt="clock"/>
                  <p class="ml-2">7 Sept, 23:00</p>
                </div>
                <div class="flex items-center justify-between text-gray-800 dark:text-gray-100 w-full">
                  <p class="text-sm">March 28, 2020</p>
                  <button
                      class="w-8 h-8 rounded-full bg-gray-800 dark:text-gray-800 dark:bg-gray-100 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-black"
                      aria-label="edit note" role="button">
                    <img class="dark:hidden"
                         src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-3-multiple-styled-cards-svg1.svg"
                         alt="edit"/>
                    <img class="dark:block hidden"
                         src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-3-multiple-styled-cards-svg1dark.svg"
                         alt="edit"/>
                  </button>
                </div>
              </div>
            </div>
            <div
                class="w-full h-64 flex flex-col justify-between bg-gray-300 dark:bg-gray-700 dark:border-gray-700 rounded-lg border border-gray-300 mb-6 py-5 px-4">
              <div>
                <h4 class="text-gray-800 dark:text-gray-100 font-bold mb-3">13 things to work on</h4>
                <p class="text-gray-800 dark:text-gray-100 text-sm">Our interior design experts work with you to
                  create the
                  space that you have been dreaming about.</p>
              </div>
              <div>
                <div class="flex items-center justify-between text-gray-800 dark:text-gray-100">
                  <p class="text-sm">March 28, 2020</p>
                  <button
                      class="w-8 h-8 rounded-full bg-gray-800 text-white dark:bg-gray-100 dark:text-gray-800 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-gray-300  focus:ring-black"
                      aria-label="edit note" role="button">
                    <img class="dark:hidden"
                         src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-3-multiple-styled-cards-svg1.svg"
                         alt="edit"/>
                    <img class="dark:block hidden"
                         src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-3-multiple-styled-cards-svg1dark.svg"
                         alt="edit"/>
                  </button>
                </div>
              </div>
            </div>
            <div
                class="w-full h-64 flex flex-col justify-between bg-yellow-400 rounded-lg border border-yellow-400 mb-6 py-5 px-4">
              <div>
                <h4 class="text-gray-800 font-bold mb-3">13 things to work on</h4>
                <p class="text-gray-800 text-sm">Our interior design experts work with you to create the space
                  that you have
                  been dreaming about.</p>
              </div>
              <div>
                <div class="flex items-center justify-between text-gray-800">
                  <p class="text-sm">March 28, 2020</p>
                  <button
                      class="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-yellow-400  focus:ring-black"
                      aria-label="edit note" role="button">
                    <img class="dark:hidden"
                         src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-3-multiple-styled-cards-svg1.svg"
                         alt="edit"/>
                    <img class="dark:block hidden"
                         src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-3-multiple-styled-cards-svg1dark.svg"
                         alt="edit"/>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="rounded">
            <div
                class="w-full h-64 flex flex-col justify-between dark:bg-gray-800 bg-white dark:border-gray-700 rounded-lg border border-gray-400 mb-6 py-5 px-4">
              <div>
                <h3 class="text-gray-800 dark:text-gray-100 leading-7 font-semibold w-11/12">What does success
                  as a UX
                  designer
                  look like and how to get there systematically</h3>
              </div>
              <div>
                <div class="mb-3 flex items-center">
                  <button
                      class="p-1 bg-gray-800 dark:bg-gray-100 rounded-full text-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-black"
                      aria-label="save in starred messages" role="button">
                    <img
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-3-multiple-styled-cards-svg3.svg"
                        alt="star"/>
                  </button>
                </div>
                <div class="flex items-center justify-between text-gray-800 dark:text-gray-100">
                  <p class="text-sm">March 28, 2020</p>
                  <button
                      class="w-8 h-8 rounded-full bg-gray-800 text-white dark:bg-gray-100 dark:text-gray-800 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-black"
                      aria-label="edit note" role="button">
                    <img class="dark:hidden"
                         src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-3-multiple-styled-cards-svg1.svg"
                         alt="edit"/>
                    <img class="dark:block hidden"
                         src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-3-multiple-styled-cards-svg1dark.svg"
                         alt="edit"/>
                  </button>
                </div>
              </div>
            </div>
            <div
                class="w-full h-64 flex flex-col justify-between dark:bg-gray-800 bg-white dark:border-gray-700 rounded-lg border border-gray-400 mb-6 py-5 px-4">
              <div>
                <h3 class="text-gray-800 dark:text-gray-100 leading-7 font-semibold w-11/12">What does success
                  as a UX
                  designer
                  look like and how to get there systematically</h3>
              </div>
              <div>
                <div class="mb-3 flex items-center flex-no-wrap">
                  <div class="w-6 h-6 bg-cover bg-center rounded-md">
                    <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_0.png"
                         alt="read by Alia"
                         class="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white dark:border-gray-700 shadow"/>
                  </div>
                  <div class="w-6 h-6 bg-cover rounded-md -ml-2">
                    <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_1.png"
                         alt="read by jason"
                         class="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white dark:border-gray-700 shadow"/>
                  </div>
                  <div class="w-6 h-6 bg-cover rounded-md bg-center -ml-2">
                    <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_2.png"
                         alt="read by Kane"
                         class="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white dark:border-gray-700 shadow"/>
                  </div>
                </div>
                <div class="flex items-center justify-between text-gray-800 dark:text-gray-100">
                  <p class="text-sm">March 28, 2020</p>
                  <button
                      class="w-8 h-8 rounded-full bg-gray-800 text-white dark:bg-gray-100 dark:text-gray-800 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-black"
                      aria-label="edit note" role="button">
                    <img class="dark:hidden"
                         src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-3-multiple-styled-cards-svg1.svg"
                         alt="edit"/>
                    <img class="dark:block hidden"
                         src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-3-multiple-styled-cards-svg1dark.svg"
                         alt="edit"/>
                  </button>
                </div>
              </div>
            </div>
            <div
                class="w-full h-64 flex flex-col justify-between bg-red-300 rounded-lg border border-red-300 mb-6 py-5 px-4">
              <div>
                <h3 class="text-gray-800 leading-7 font-semibold w-11/12">What does success as a UX designer
                  look like and how
                  to get there systematically</h3>
              </div>
              <div>
                <div class="flex items-center justify-between text-gray-800">
                  <p class="text-sm">March 28, 2020</p>
                  <button
                      class="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-red-300 focus:ring-black"
                      aria-label="edit note" role="button">
                    <img class="dark:hidden"
                         src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-3-multiple-styled-cards-svg1.svg"
                         alt="edit"/>
                    <img class="dark:block hidden"
                         src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-3-multiple-styled-cards-svg1dark.svg"
                         alt="edit"/>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>
<script setup>
</script>