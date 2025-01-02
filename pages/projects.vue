<template>
  <div class="flex flex-col items-center justify-center pt-32">
    <span class="font-newsreader italic text-white-shadow text-center text-4xl">Projects</span>
    <span class=" text-lg font-geist italic text-gray-500">A list of projects I've worked on</span>
  </div>
  <section class="py-20 px-4 md:px-8">
    <div class="max-w-6xl mx-auto">
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- {/* Project Card 1 */} -->
        <div class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
          <div class="relative">
            <img src="https://placehold.co/300x400" alt="Project 1" class="w-full h-48 object-cover" />
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Project Name</h3>
            <p class="text-gray-600 mb-4">Deskripsi singkat project Anda dan teknologi yang digunakan.</p>
            <div class="flex justify-between items-center">
              <button class="text-indigo-600 hover:text-indigo-500">
                Lihat Detail
              </button>
              <div class="flex space-x-2">
                <a href="#" class="text-gray-400 hover:text-gray-500">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z">
                    </path>
                  </svg>
                </a>
                <a href="#" class="text-gray-400 hover:text-gray-500">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h4.636a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H1.5a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5v-1z M10 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-3.45 3.45A.5.5 0 0 1 10 4.5v-4z">
                    </path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
          <div class="relative">
            <img src="https://placehold.co/300x400" alt="Project 1" class="w-full h-48 object-cover" />
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Project Name</h3>
            <p class="text-gray-600 mb-4">Deskripsi singkat project Anda dan teknologi yang digunakan.</p>
            <div class="flex justify-between items-center">
              <button class="text-indigo-600 hover:text-indigo-500">
                Lihat Detail
              </button>
              <div class="flex space-x-2">
                <a href="#" class="text-gray-400 hover:text-gray-500">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z">
                    </path>
                  </svg>
                </a>
                <a href="#" class="text-gray-400 hover:text-gray-500">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h4.636a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H1.5a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5v-1z M10 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-3.45 3.45A.5.5 0 0 1 10 4.5v-4z">
                    </path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
          <div class="relative">
            <img src="https://placehold.co/300x400" alt="Project 1" class="w-full h-48 object-cover" />
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Project Name</h3>
            <p class="text-gray-600 mb-4">Deskripsi singkat project Anda dan teknologi yang digunakan.</p>
            <div class="flex justify-between items-center">
              <button class="text-indigo-600 hover:text-indigo-500">
                Lihat Detail
              </button>
              <div class="flex space-x-2">
                <a href="#" class="text-gray-400 hover:text-gray-500">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z">
                    </path>
                  </svg>
                </a>
                <a href="#" class="text-gray-400 hover:text-gray-500">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h4.636a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H1.5a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5v-1z M10 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-3.45 3.45A.5.5 0 0 1 10 4.5v-4z">
                    </path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
          <div class="relative">
            <img src="https://placehold.co/300x400" alt="Project 1" class="w-full h-48 object-cover" />
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Project Name</h3>
            <p class="text-gray-600 mb-4">Deskripsi singkat project Anda dan teknologi yang digunakan.</p>
            <div class="flex justify-between items-center">
              <button class="text-indigo-600 hover:text-indigo-500">
                Lihat Detail
              </button>
              <div class="flex space-x-2">
                <a href="#" class="text-gray-400 hover:text-gray-500">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z">
                    </path>
                  </svg>
                </a>
                <a href="#" class="text-gray-400 hover:text-gray-500">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h4.636a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H1.5a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5v-1z M10 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-3.45 3.45A.5.5 0 0 1 10 4.5v-4z">
                    </path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
          <div class="relative">
            <img src="https://placehold.co/300x400" alt="Project 1" class="w-full h-48 object-cover" />
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Project Name</h3>
            <p class="text-gray-600 mb-4">Deskripsi singkat project Anda dan teknologi yang digunakan.</p>
            <div class="flex justify-between items-center">
              <button class="text-indigo-600 hover:text-indigo-500">
                Lihat Detail
              </button>
              <div class="flex space-x-2">
                <a href="#" class="text-gray-400 hover:text-gray-500">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z">
                    </path>
                  </svg>
                </a>
                <a href="#" class="text-gray-400 hover:text-gray-500">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h4.636a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H1.5a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5v-1z M10 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-3.45 3.45A.5.5 0 0 1 10 4.5v-4z">
                    </path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- {/* Project Card 2 & 3 - Similar structure as Card 1 */} -->
      </div>
    </div>
  </section>

</template>

<script lang="ts" setup>
useSeoMeta({
  title: 'Projects',
  description: 'A list of projects I\'ve worked on',
})
</script>

<style></style>