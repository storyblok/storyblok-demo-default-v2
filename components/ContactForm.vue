<template>
  <form action="">
    <div class="flex flex-col space-y-6">
      <label for="email" class="sr-only">Your name</label>
      <input
        id="name"
        name="name"
        type="text"
        placeholder="Your name"
        class="rounded-lg bg-white px-6 py-4 text-dark transition-all focus:outline-none"
        required
      />
      <label for="email" class="sr-only">Your email</label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="Your email"
        class="rounded-lg bg-white px-6 py-4 text-dark transition-all focus:outline-none"
        required
      />
      <label for="message" class="sr-only">Your message</label>
      <textarea
        id="message"
        name="message"
        placeholder="Your message"
        class="resize-none rounded-lg bg-white px-6 py-4 text-dark transition-all focus:outline-none"
        required
      ></textarea>
    </div>
  </form>
</template>
