// src/calendar.js
// src/calendar.js
import { events } from './events.js';
import { renderEventDetails } from './renderEventDetails.js';

document.addEventListener('DOMContentLoaded', function () {
  const openBtn = document.getElementById('open-calendar-btn');
  const calendarSection = document.getElementById('calendar-section');
  const eventContent = document.getElementById('event-content');

  const availableDates = events.map(event => event.date);
  

  openBtn.addEventListener('click', function () {
    calendarSection.classList.toggle('hidden');
  });

  // src/calendar.js (add this after your DOMContentLoaded block)

window.downloadICS = function (title, date, time) {
    const startDateTime = new Date(`${date}T${time}`);
    const endDateTime = new Date(startDateTime.getTime() + 60 * 60 * 1000); // 1-hour duration
  
    const pad = (n) => String(n).padStart(2, '0');
    const formatDate = (dt) =>
      `${dt.getUTCFullYear()}${pad(dt.getUTCMonth() + 1)}${pad(dt.getUTCDate())}T${pad(dt.getUTCHours())}${pad(dt.getUTCMinutes())}00Z`;
  
    const icsContent = `BEGIN:VCALENDAR
  VERSION:2.0
  BEGIN:VEVENT
  SUMMARY:${title}
  DTSTART:${formatDate(startDateTime)}
  DTEND:${formatDate(endDateTime)}
  DESCRIPTION:Scheduled via Event Booking App
  LOCATION:Online
  END:VEVENT
  END:VCALENDAR`;
  
    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${title}.ics`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

 //  flatpickr initialization

  flatpickr("#event-calendar", {
    inline: true,
    dateFormat: "Y-m-d",

    // ✅ Allow full calendar navigation (remove strict min/max)
    defaultDate: "2025-04-22",

     // Add static calendar size
     static: true,

    // ✅ Don't disable any dates — we handle them via styling instead
    disable: [],

    onDayCreate: function(dObj, dStr, fp, dayElem) {
      const dateString = dayElem.dateObj.toLocaleDateString('sv-SE');

      // Hover styling for all days
      dayElem.classList.add(
        'cursor-pointer',
        'hover:bg-blue-200',
        'transition',
        'duration-200',
        'ease-in-out' ,     
       
      );

      // Styling for event types
      if (availableDates.includes(dateString)) {
        // 🔴 Red for booked (event already scheduled)
        dayElem.classList.add('bg-red-500', 'text-white', 'rounded');
      } else {
        // 🟢 Green for free (no event scheduled — user can book)
        dayElem.classList.add('bg-green-500', 'text-white', 'rounded');
      }
      
    },

    onChange: function(selectedDates, dateStr) {
      const event = events.find(ev => ev.date === dateStr);
      if (event) {
        eventContent.innerHTML = renderEventDetails(event);
      } else {
        eventContent.innerHTML = `
          <div class="space-y-3">
            <p class="text-gray-400 text-lg">No event scheduled for this date.</p>
            <p class="text-green-500 text-base font-medium">Create your own event by clicking the 'Book Now' button below.</p>
             <a href="#booking-form"
             onclick='showBookingForm({ date: "${dateStr}", name: "Custom Event", location: "TBD", attendees: "TBD" })'
              class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg transition">
              Book Now
            </a> 
          </div>
        `;
      }

    }


    
    
  });
});




