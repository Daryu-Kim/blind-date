// TypeScript + Vue General Setting.
import { defineComponent } from "vue";
import router from "@/router";
import HeaderBar from "@/components/HeaderBar.vue";
import FooterBar from "@/components/FooterBar.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    HeaderBar,
    FooterBar,
  },
});

// Variable Define.
const recommend_list = document.querySelector(
  ".home-recommend-list"
) as HTMLElement;
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
            <p class="home-recommend-item-text-name">${name[0]}</p>
            <p class="home-recommend-item-text-age">Age</p>
          </div>
          <p class="home-recommend-item-text-address">Address</p>
        </div>
      </div>
`;

// AddEventListener

// Function Call.
Recommend(item);

// Function Define.
function Recommend(item: string) {
  for (let i = 0; i < 10; i++) {
    if (recommend_list instanceof Element) {
      recommend_list.innerHTML = item;
    }
  }
}
