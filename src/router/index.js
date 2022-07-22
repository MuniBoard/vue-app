import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/Home.vue";
import APIDown from "../components/APIDown.vue";
import Municipality from "../components/Municipality.vue";
import Post from "../components/Post.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: "/apidown",
        name: "APIDown",
        component: APIDown,
      },
      {
        path: "/",
        name: "Home",
        component: Home,
      },
      {
        path: "/municipality/:municipalityId",
        name: "Municipality",
        component: Municipality
      },
      {
        path: "/municipality/:municipalityId/post/:postId",
        name: "Post",
        component: Post
      }
    ],
  });

export default router;
