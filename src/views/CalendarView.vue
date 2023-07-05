<script setup>

</script>

<template>
  <section class="bg-white dark:bg-gray-900">
<div class="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-20">
<div class="mx-auto pl-3">
        <div className="mx-auto py-8 w-full max-w-7xl bg-white">
          <div className="mx-auto max-w-4xl">

            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm text-gray-300 font-bold uppercase tracking-widest">Persönlicher Kalender</p>
              <h2 className="mt-3 text-2xl sm:text-4xl font-extrabold tracking-wide">
                <span className="text-gray-700">Willkommen  </span>
                <span className="text-yellow-500">Name</span>
              </h2>
            </div>


            {/* :SCHEDULE */}
            <div className="mt-5 sm:mt-10 flex flex-col">
              {schedule.map(day => (
              <div key={day.day}>
                {/* ::Day */}
                <span className="flex items-center py-3 px-5 bg-gray-800 text-gray-50">
                <CalendarIcon className="mr-4 w-6 h-6"/>
                <h3 className="text-sm font-semibold uppercase tracking-wide">{day.day}</h3>
              </span>
                {/* ::Events */}
                <ul className="py-1 flex flex-col">
                  {day.events.map(event => (
                  <li key={event.id} className="group py-3 px-2 sm:px-5 flex items-center">
                    {/* :::time container */}
                    <div className="flex-shrink-0 mr-5 sm:mr-20 px-2 flex flex-col bg-yellow-50">
                      <span className="text-sm sm:text-base text-yellow-500 font-bold">{event.time}</span>
                    </div>
                    {/* :::details container */}
                    <div className="col-span-7 sm:col-span-6 px-3">
                      <p className="text-base text-gray-700 font-bold uppercase">{event.name}</p>
                      <p className="mt-2 text-xs sm:text-sm text-gray-500">{event.details}</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="absolute inset-y-25 brightness-20 w-40 pr-2">
                <VCalendar show-weeknumbers/>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">

</style>