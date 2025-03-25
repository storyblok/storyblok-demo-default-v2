<template>
  <form action="">
    <div class="flex flex-col space-y-6">
      <div>
        <label for="email" class="sr-only">Your name</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Your name"
          class="rounded-lg bg-white px-6 py-4 text-primary-dark transition-all focus:outline-none"
          required
        />
      </div>
      <div>
        <label for="email" class="sr-only">Your email</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="enjoy@storyblok.com"
          class="rounded-lg bg-white px-6 py-4 text-primary-dark transition-all focus:outline-none"
          required
        />
      </div>
      <div>
        <label for="message" class="sr-only">Your message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Your message"
          class="resize-none rounded-lg bg-white px-6 py-4 text-primary-dark transition-all focus:outline-none"
          required
        ></textarea>
      </div>
    </div>
  </form>
</template>
