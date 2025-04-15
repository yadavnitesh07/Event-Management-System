// src/renderEventDetails.js

/// src/renderEventDetails.js

export function renderEventDetails(event) {
  return `
    <div class="space-y-2">
      <h3 class="text-xl font-semibold">${event.name}</h3>
      <p class="text-gray-300">${event.description || 'No description provided.'}</p>
      <p class="text-gray-400"><strong>Location:</strong> ${event.location}</p>
      <p class="text-gray-400"><strong>Date:</strong> ${event.date}</p>
      <p class="text-gray-400"><strong>Time:</strong> ${event.time || 'TBD'}</p>
      <p class="text-gray-400"><strong>Attendees:</strong> ${event.attendees}</p>

      <div class="mt-4 flex flex-wrap gap-3">
        <a href="/book-now.html" 
           class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg transition">
          Get tickets
        </a>

        <button 
          onclick="downloadICS('${event.name}', '${event.date}', '${event.time || "12:00"}')"
          class="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-lg transition">
          Add to Calendar
        </button>
      </div>
    </div>
  `;
}

