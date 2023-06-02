<template>

  <!--Test Home View-->
  <!--Container-->
  <div class="container max-w-6xl min-h-full mx-auto">

    <!--Top-Jumbo-->
    <section class="mb-12">

      <div
          class="bigImage relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center"
          style="height: 400px">
        <div
            class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
            style="background-color: rgba(0, 0, 0, 0.5)">
          <div class="flex h-full items-center justify-center">
            <div class="text-white">
              <h2 class="mb-4 text-4xl bg-primary px-2 font-semibold text-white">nachhilfe.wien</h2>
              <h4 class="mb-6 text-xl font-semibold text-lightPrimary">Wir bringen dich auf Zack!</h4>
              <button
                  type="button"
                  class="rounded bg-accent text-white p-4 py-2"
                  data-te-ripple-init
                  data-te-ripple-color="light">
                Termin vereinbaren
              </button>
            </div>
          </div>
        </div>
      </div>


    </section>

    <!--Feature-Block-->
    <section class="mb-12 md:mx-10 text-center">

      <div class="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
        <div class="mb-12 md:mb-0">
          <div class="mb-6 inline-block rounded-md bg-primary-100 p-4 text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                 stroke="currentColor" class="h-6 w-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"/>
            </svg>
          </div>
          <h5 class="mb-4 text-lg text-darkPrimary font-bold">Hilfe 24/7</h5>
          <p class="text-primary dark:text-neutral-300">
            Unsere Trainer stehen dir sieben Tage die Woche, rund um die Uhr zur Verfügung.
            Über die Suchfunktion findest du Nachhilfe-Lehrer in ganz Wien – da ist garantiert
            ein Experte für deine Bedürfnisse dabei.
          </p>
        </div>

        <div class="mb-12 md:mb-0">
          <div class="mb-6 inline-block rounded-md bg-primary-100 p-4 text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                 stroke="currentColor" class="h-6 w-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"/>
            </svg>
          </div>
          <h5 class="mb-4 text-lg text-darkPrimary font-bold">Sicher und erprobt</h5>
          <p class="text-primary dark:text-neutral-300">
            Unser erfahrenes Team arbeitet mit Experten aus dem Bildungsbereich und in der
            Cyber-Security zusammen, um dir ein sicheres und pädagogisch wertvolles
            Angebot zu gewährleisten.
          </p>
        </div>

        <div class="mb-12 md:mb-0">
          <div class="mb-6 inline-block rounded-md bg-primary-100 p-4 text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                 stroke="currentColor" class="h-6 w-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"/>
            </svg>
          </div>
          <h5 class="mb-4 text-lg text-darkPrimary font-bold">Extrem schnell</h5>
          <p class="text-primary dark:text-neutral-300">
            Lehrer finden, anschreiben, Termin vereinbaren – noch nie war
            Nachhilfe so einfach! Melde dich jetzt an und erhalte binnen Minuten
            eine Termin bei einem Lehrer deiner Wahl.
          </p>
        </div>
      </div>
    </section>

    <!--Lehrer und Schüler Cards-->
    <section class="mb-12">

      <div class="flex flex-col md:flex-row gap-4 md:gap-10">


        <CardNormal title="Nachhilfe finden" class="text-center md:text-left md:w1/2"
                    content="Melde dich jetzt an, um einen Nachhilfelehrer in deiner Umgebung zu finden."
                    button-text="anmelden" button-bg="bg-accent"/>

        <CardNormal title="Lehrer werden" class="text-center md:text-right md:w-1/2"
                    content="Du möchtest dein Wissen weitergeben und selbst Lehrer werden? Kontaktiere uns über das Kontaktformular."
                    button-text="Kontakt" button-bg="bg-darkPrimary"/>
      </div>
    </section>

    <!--Timeline-->
    <section class="mb-12">
      <ol class="border-l border-neutral-300 dark:border-neutral-500">
        <!--First item-->
        <li>
          <div class="flex-start flex items-center pt-3">
            <div
                class="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
            <p class="text-sm text-neutral-500 dark:text-neutral-300">
              01.07.2021
            </p>
          </div>
          <div class="mb-6 ml-4 mt-2">
            <h4 class="mb-1.5 text-xl font-semibold text-primary">Unsere erste App-Version</h4>
            <p class="mb-3 text-neutral-500 dark:text-neutral-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              scelerisque diam non nisi semper, et elementum lorem ornare.
              Maecenas placerat facilisis mollis. Duis sagittis ligula in
              sodales vehicula.
            </p>
          </div>
        </li>

        <!--Second item-->
        <li>
          <div class="flex-start flex items-center pt-2">
            <div
                class="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
            <p class="text-sm text-neutral-500 dark:text-neutral-300">
              13.09.2021
            </p>
          </div>
          <div class="mb-6 ml-4 mt-2">
            <h4 class="mb-1.5 text-xl font-semibold text-primary">Beta-Phase begonnen</h4>
            <p class="mb-3 text-neutral-500 dark:text-neutral-300">
              Libero expedita explicabo eius fugiat quia aspernatur autem
              laudantium error architecto recusandae natus sapiente sit nam
              eaque, consectetur porro molestiae ipsam an deleniti.
            </p>
          </div>
        </li>

        <!--Third item-->
        <li>
          <div class="flex-start flex items-center pt-2">
            <div
                class="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
            <p class="text-sm text-neutral-500 dark:text-neutral-300">
              25.11.2021
            </p>
          </div>
          <div class="ml-4 mt-2 pb-5">
            <h4 class="mb-1.5 text-xl font-semibold text-accent">Wir sind live!</h4>
            <p class="mb-3 text-neutral-500 dark:text-neutral-300">
              Voluptatibus temporibus esse illum eum aspernatur, fugiat suscipit
              natus! Eum corporis illum nihil officiis tempore. Excepturi illo
              natus libero sit doloremque, laborum molestias rerum pariatur quam
              ipsam necessitatibus incidunt, explicabo.
            </p>
          </div>
        </li>
      </ol>

    </section>

    <!--Footer-->
    <section>
      <!-- Footer container -->
      <footer
          class="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
        <div
            class="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
          <div class="mr-12 hidden lg:block">
            <span>Schreib uns jetzt auf Social Media an!</span>
          </div>
          <!-- Social network icons container -->
          <div class="flex justify-center">
            <a href="#!" class="mr-6 text-neutral-600 dark:text-neutral-200">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                <path
                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
            </a>
            <a href="#!" class="mr-6 text-neutral-600 dark:text-neutral-200">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                <path
                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="#!" class="mr-6 text-neutral-600 dark:text-neutral-200">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                <path
                    d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                    fill-rule="evenodd"
                    clip-rule="evenodd"/>
              </svg>
            </a>
            <a href="#!" class="mr-6 text-neutral-600 dark:text-neutral-200">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#!" class="mr-6 text-neutral-600 dark:text-neutral-200">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                <path
                    d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
              </svg>
            </a>
            <a href="#!" class="text-neutral-600 dark:text-neutral-200">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Main container div: holds the entire content of the footer, including four sections (Tailwind Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. -->
        <div class="mx-6 py-10 text-center md:text-left">
          <div class="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <!-- Tailwind Elements section -->
            <div class="">
              <h6
                  class="mb-4 text-accent flex items-center justify-center font-semibold uppercase md:justify-start">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="mr-3 h-4 w-4">
                  <path
                      d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z"/>
                </svg>
                NACHHILFE WIEN
              </h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque dolor magni mollitia qui, quidem sint
                tempore unde! Dicta maiores, quis! Lorem ipsum dolor sit amet.
              </p>
            </div>
            <!-- Products section -->
            <div class="">
              <h6
                  class="mb-4 text-primary flex justify-center font-semibold uppercase md:justify-start">
                Products
              </h6>
              <p class="mb-4">
                <a href="#!" class="text-neutral-600 dark:text-neutral-200"
                >Angular</a
                >
              </p>
              <p class="mb-4">
                <a href="#!" class="text-neutral-600 dark:text-neutral-200"
                >React</a
                >
              </p>
              <p class="mb-4">
                <a href="#!" class="text-neutral-600 dark:text-neutral-200"
                >Vue</a
                >
              </p>
              <p>
                <a href="#!" class="text-neutral-600 dark:text-neutral-200"
                >Laravel</a
                >
              </p>
            </div>
            <!-- Useful links section -->
            <div class="">
              <h6
                  class="mb-4 text-primary flex justify-center font-semibold uppercase md:justify-start">
                Useful links
              </h6>
              <p class="mb-4">
                <a href="#!" class="text-neutral-600 dark:text-neutral-200"
                >Pricing</a
                >
              </p>
              <p class="mb-4">
                <a href="#!" class="text-neutral-600 dark:text-neutral-200"
                >Settings</a
                >
              </p>
              <p class="mb-4">
                <a href="#!" class="text-neutral-600 dark:text-neutral-200"
                >Orders</a
                >
              </p>
              <p>
                <a href="#!" class="text-neutral-600 dark:text-neutral-200"
                >Help</a
                >
              </p>
            </div>
            <!-- Contact section -->
            <div>
              <h6
                  class="mb-4 text-primary flex justify-center font-semibold uppercase md:justify-start">
                Contact
              </h6>
              <p class="mb-4 flex items-center justify-center md:justify-start">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="mr-3 h-5 w-5">
                  <path
                      d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"/>
                  <path
                      d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"/>
                </svg>
                New York, NY 10012, US
              </p>
              <p class="mb-4 flex items-center justify-center md:justify-start">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="mr-3 h-5 w-5">
                  <path
                      d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"/>
                  <path
                      d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"/>
                </svg>
                info@example.com
              </p>
              <p class="mb-4 flex items-center justify-center md:justify-start">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="mr-3 h-5 w-5">
                  <path
                      fill-rule="evenodd"
                      d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                      clip-rule="evenodd"/>
                </svg>
                + 01 234 567 88
              </p>
              <p class="flex items-center justify-center md:justify-start">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="mr-3 h-5 w-5">
                  <path
                      fill-rule="evenodd"
                      d="M7.875 1.5C6.839 1.5 6 2.34 6 3.375v2.99c-.426.053-.851.11-1.274.174-1.454.218-2.476 1.483-2.476 2.917v6.294a3 3 0 003 3h.27l-.155 1.705A1.875 1.875 0 007.232 22.5h9.536a1.875 1.875 0 001.867-2.045l-.155-1.705h.27a3 3 0 003-3V9.456c0-1.434-1.022-2.7-2.476-2.917A48.716 48.716 0 0018 6.366V3.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM16.5 6.205v-2.83A.375.375 0 0016.125 3h-8.25a.375.375 0 00-.375.375v2.83a49.353 49.353 0 019 0zm-.217 8.265c.178.018.317.16.333.337l.526 5.784a.375.375 0 01-.374.409H7.232a.375.375 0 01-.374-.409l.526-5.784a.373.373 0 01.333-.337 41.741 41.741 0 018.566 0zm.967-3.97a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H18a.75.75 0 01-.75-.75V10.5zM15 9.75a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V10.5a.75.75 0 00-.75-.75H15z"
                      clip-rule="evenodd"/>
                </svg>
                + 01 234 567 89
              </p>
            </div>
          </div>
        </div>

        <!--Copyright section-->
        <div class="bg-neutral-200 p-6 text-center text-secondary">
          <span>© 2023 Copyright: </span>
          <a
              class="font-semibold text-secondary"
              href="https://tailwind-elements.com/"
          >Nachhilfe.wien</a
          >
        </div>
      </footer>

    </section>

  </div>

<div class="dnone">


  <!--    Test Components-->
  <div class="container max-w-md min-h-screen flex flex-col mx-auto justify-center items-center space-y-4">

    <!--    Normale Cards-->
    <CardNormal title="Hello Container!" content="Ich versuche jetzt einfach mal, einen Card-Text zu erstellen."
                button-text="Click me" button-bg="bg-primary"/>

    <CardNormal title="Hello Container!" content="Ich versuche jetzt einfach mal, einen Card-Text zu erstellen."
                button-text="Click me" button-bg="bg-secondary"/>

    <CardNormal title="Hello Container!" content="Ich versuche jetzt einfach mal, einen Card-Text zu erstellen."
                button-text="Click me" button-bg="bg-accent"/>

    <!--    Image-Cards-->
    <CardImage title="Das ist eine Bild-Card"
               content="Schaut ganz gut aus, oder? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur atque delectus, deleniti doloremque enim labore molestiae nemo porro quia quidem"
               button-bg="bg-primary" button-text="Image-Click"/>

    <CardImage title="Das ist eine Bild-Card"
               content="Schaut ganz gut aus, oder? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur atque delectus, deleniti doloremque enim labore molestiae nemo porro quia quidem"
               button-bg="bg-secondary" button-text="Image-Click"/>

    <CardImage title="Das ist eine Bild-Card"
               content="Schaut ganz gut aus, oder? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur atque delectus, deleniti doloremque enim labore molestiae nemo porro quia quidem"
               button-bg="bg-accent" button-text="Image-Click"/>

    <!--Spinners-->
    <div
        class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status">
  <span
      class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
  >Loading...</span
  >
    </div>
    <div
        class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-secondary motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status">
  <span
      class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
  >Loading...</span
  >
    </div>
    <div
        class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-accent motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status">
  <span
      class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
  >Loading...</span
  >
    </div>

  </div>

  <!--stepper-->
  <ul
      data-te-stepper-init
      class="relative m-0 flex list-none justify-between overflow-hidden p-0 transition-[height] duration-200 ease-in-out">
    <!--First item-->
    <li
        data-te-stepper-step-ref
        data-te-stepper-step-active
        class="w-[4.5rem] flex-auto">
      <div
          data-te-stepper-head-ref
          class="flex cursor-pointer items-center pl-2 leading-[1.3rem] no-underline after:ml-2 after:h-px after:w-full after:flex-1 after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
      <span
          data-te-stepper-head-icon-ref
          class="my-6 mr-2 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">
        1
      </span>
        <span
            data-te-stepper-head-text-ref
            class="font-medium text-neutral-500 after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300">
        step1
      </span>
      </div>
      <div
          data-te-stepper-content-ref
          class="absolute w-full p-4 transition-all duration-500 ease-in-out">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </div>
    </li>

    <!--Second item-->
    <li data-te-stepper-step-ref class="w-[4.5rem] flex-auto">
      <div
          data-te-stepper-head-ref
          class="flex cursor-pointer items-center leading-[1.3rem] no-underline before:mr-2 before:h-px before:w-full before:flex-1 before:bg-[#e0e0e0] before:content-[''] after:ml-2 after:h-px after:w-full after:flex-1 after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:before:bg-neutral-600 dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
      <span
          data-te-stepper-head-icon-ref
          class="my-6 mr-2 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">
        2
      </span>
        <span
            data-te-stepper-head-text-ref
            class="text-neutral-500 after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300">
        step2
      </span>
      </div>
      <div
          data-te-stepper-content-ref
          class="absolute left-0 w-full translate-x-[150%] p-4 transition-all duration-500 ease-in-out">
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat.
      </div>
    </li>

    <!--Third item-->
    <li data-te-stepper-step-ref class="w-[4.5rem] flex-auto">
      <div
          data-te-stepper-head-ref
          class="flex cursor-pointer items-center pr-2 leading-[1.3rem] no-underline before:mr-2 before:h-px before:w-full before:flex-1 before:bg-[#e0e0e0] before:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:before:bg-neutral-600 dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
      <span
          data-te-stepper-head-icon-ref
          class="my-6 mr-2 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">
        3
      </span>
        <span
            data-te-stepper-head-text-ref
            class="text-neutral-500 after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300">
        step3
      </span>
      </div>
      <div
          data-te-stepper-content-ref
          class="absolute left-0 w-full translate-x-[150%] p-4 transition-all duration-500 ease-in-out">
        Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur.
      </div>
    </li>
  </ul>

  <!--Jumbotron-->
  <div
      class="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center"
      style="background-image: url('https://tecdn.b-cdn.net/img/new/slides/041.webp'); height: 400px">
    <div
        class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
        style="background-color: rgba(0, 0, 0, 0.6)">
      <div class="flex h-full items-center justify-center">
        <div class="text-white">
          <h2 class="mb-4 text-4xl font-semibold text-accent">Heading</h2>
          <h4 class="mb-6 text-xl font-semibold text-lightPrimary">Subheading</h4>
          <button
              type="button"
              class="rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
              data-te-ripple-init
              data-te-ripple-color="light">
            Call to action
          </button>
        </div>
      </div>
    </div>
  </div>

</div>
</template>

<script setup>


import CardNormal from "@/components/util/elements/CardNormal.vue";
import CardImage from "@/components/util/elements/CardImage.vue";

import {
  Stepper,
  initTE,
} from "tw-elements";
import {onMounted} from "vue";

onMounted(() => initTE({Stepper}));
</script>

<style lang="scss" scoped>

.bigImage {
  background-image: url("@/assets/images/home/title-desktop5.jpg");
}

.dnone {
  display: none;
}

</style>