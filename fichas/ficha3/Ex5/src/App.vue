<template>
  <FAQSection :faqs="faqs"/>
</template>

<script>
import FAQSection from './component/FAQSection.vue';

  export default {
    name: "App",
    components: {
      FAQSection
    },
    data() {
      return {
        faqs: [
          {
              id: self.crypto.randomUUID(),
              title: "How do I create an account?",
              subtitle: "Simple step-by-step",
              body: "To create an account, click on register, fill in your details, and confirm your email."
          },
          {
              id: self.crypto.randomUUID(),
              title: "I forgot my password",
              subtitle: "Account recovery",
              body: "Click on 'Forgot password', enter your email, and follow the instructions you receive."
          },
          {
              id: self.crypto.randomUUID(),
              title: "How do I edit my profile?",
              subtitle: "User settings",
              body: "Go to your profile menu and click 'Edit profile' to change personal information."
          },
          {
              id: self.crypto.randomUUID(),
              title: "Notifications aren’t showing",
              subtitle: "Troubleshooting",
              body: "Check if notifications are enabled in both your device settings and the app settings."
          },
          {
              id: self.crypto.randomUUID(),
              title: "How do I delete my account?",
              subtitle: "Permanently removing your account",
              body: "Contact support through the help form to request account deletion."
          }
        ]
      }
    }
  }
</script>