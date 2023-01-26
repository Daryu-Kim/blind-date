// TypeScript + Vue General Setting.
import { defineComponent } from "vue";
import router from "@/router";

export default defineComponent({
  name: "SplashView",
  components: {},
});

setTimeout(() => {
  router.push("home");
}, 7500);

// Variable Define.
// Function Call.
// Function Define.
