// TypeScript + Vue General Setting.
import { defineComponent } from "vue";
import router from "@/router";
import HeaderBar from "@/components/HeaderBar.vue";
import FooterBar from "@/components/FooterBar.vue";
import RecommendItem from "@/components/RecommendItem.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    HeaderBar,
    FooterBar,
    RecommendItem,
  },
});

// Variable Define.
const recommend_list = document.getElementsByClassName("home-recommend-list");
const name = [
  "김민수",
  "name",
  "name",
  "name",
  "name",
  "name",
  "name",
  "name",
  "name",
  "name",
];

const item = `
  <div class="home-recommend-item">
    <img src="https://picsum.photos/150" alt="recommend-photos" />
    <div class="home-recommend-item-textbox">
      <div class="home-recommend-item-text-top">
        <p class="home-recommend-item-text-name">Name</p>
        <p class="home-recommend-item-text-age">Age</p>
      </div>
      <p class="home-recommend-item-text-address">Address</p>
    </div>
  </div>
`;

// AddEventListener

// Function Call.

// Function Define.
