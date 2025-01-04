<template>
  <div>
    <section class="pt-32 px-4 md:px-8">
      <div class="max-w-4xl mx-auto text-center">
        <h2
          class="font-newsreader italic text-white-shadow text-center text-4xl"
        >
          {{ $t("contact.content") }}
        </h2>
        <p class="text-lg text-gray-600 mb-12">
          {{ $t("contact.sub_content") }}
        </p>
      </div>
    </section>

    <section class="py-10 px-4 md:px-8 max-w-[50rem] mx-auto">
      <form
        @submit.prevent="handleSubmit"
        class="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg"
      >
        <div class="space-y-6">
          <!-- Name Input -->
          <div>
            <label
              class="block text-sm font-medium text-gray-700 dark:text-gray-200"
              >Name</label
            >
            <input
              v-model="form.name"
              type="text"
              required
              class="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-900 dark:text-gray-100 dark:bg-gray-800 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
              :disabled="isSubmitting"
            />
          </div>

          <!-- Email Input -->
          <div>
            <label
              class="block text-sm font-medium text-gray-700 dark:text-gray-200"
              >Email</label
            >
            <input
              v-model="form.email"
              type="email"
              required
              class="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-900 dark:text-gray-100 dark:bg-gray-800 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
              :disabled="isSubmitting"
            />
          </div>

          <!-- Subject Input -->
          <div>
            <label
              class="block text-sm font-medium text-gray-700 dark:text-gray-200"
              >Subject</label
            >
            <input
              v-model="form.subject"
              type="text"
              required
              class="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-900 dark:text-gray-100 dark:bg-gray-800 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
              :disabled="isSubmitting"
            />
          </div>

          <!-- Message Input -->
          <div>
            <label
              class="block text-sm font-medium text-gray-700 dark:text-gray-200"
              >Message</label
            >
            <textarea
              v-model="form.message"
              rows="4"
              required
              class="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-900 dark:text-gray-100 dark:bg-gray-800 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
              :disabled="isSubmitting"
            ></textarea>
          </div>

          <!-- Submit Button -->
          <Button
            variant="secondary"
            type="submit"
            :disabled="isSubmitting"
            class="border dark:border-gray-600 w-full flex justify-center py-3 px-4 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span v-if="isSubmitting">
              <svg
                class="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </span>
            <span v-else>Send Message</span>
          </Button>
        </div>
      </form>
    </section>

    <section>
      <div class="flex justify-center space-x-6 py-10">
        <NuxtLink
          :to="`mailto:${env.public.email}`"
          class="text-gray-600 hover:text-indigo-600 transition duration-300"
        >
          <span class="sr-only">Email</span>
          <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
            ></path>
            <path
              d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
            ></path>
          </svg>
        </NuxtLink>
        <NuxtLink
          to="https://www.linkedin.com/in/ridho-aulia-rahman-767994206/"
          target="_blank"
          class="text-gray-600 hover:text-indigo-600 transition duration-300"
        >
          <span class="sr-only">LinkedIn</span>
          <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
            ></path>
          </svg>
        </NuxtLink>
        <NuxtLink
          to="https://github.com/edoaurahman"
          target="_blank"
          class="text-gray-600 hover:text-indigo-600 transition duration-300"
        >
          <span class="sr-only">GitHub</span>
          <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z"
            ></path>
          </svg>
        </NuxtLink>
      </div>
    </section>

    <!-- Alert untuk notifikasi -->
    <div
      v-if="showAlert"
      class="fixed top-4 right-4 px-4 py-3 rounded-lg shadow-lg z-50 md:bottom-4 md:top-auto"
      :class="[
        alertType === 'success' ? 'bg-green-500' : 'bg-red-500',
        'text-white',
      ]"
    >
      {{ alertMessage }}
    </div>
  </div>
</template>

<script lang="ts" setup>
const env = useRuntimeConfig();
const mail = useMail();
const { t } = useI18n();
useSeoMeta({
  title: t("contact.title"),
  description: "Welcome to my portfolio",
});

const form = ref<Email>({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const isSubmitting = ref(false);
const showAlert = ref(false);
const alertType = ref<"success" | "error">("success");
const alertMessage = ref("");

// Function untuk menampilkan alert
const showNotification = (
  message: string,
  type: "success" | "error" = "success"
) => {
  alertMessage.value = message;
  alertType.value = type;
  showAlert.value = true;
  setTimeout(() => {
    showAlert.value = false;
  }, 3000);
};

const handleSubmit = async () => {
  try {
    isSubmitting.value = true;

    // Kirim email
    await mail.send({
      from: `${form.value.name} <${form.value.email}>`,
      subject: `New Contact From: ${form.value.email}, ${form.value.subject}`,
      text: form.value.message,
    });

    showNotification("Message sent successfully!");

    // Reset form
    form.value = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
  } catch (error) {
    showNotification("Failed to send message. Please try again.", "error");
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style></style>
