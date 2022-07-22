<template>
  <div class="hello subject">
    <h1>{{ post.title }}</h1>
    <h2>{{ post.content }} </h2>
  </div>
</template>

<script>
import { getSpecificPost } from '../api/post';
export default {
  name: 'app-post',
  data: () => {
    return {
      post : {
        title: "",
        content: ""
      }
    }
  },
  async mounted() {
    const postId = this.$route.params.postId;
    const municipalityId = this.$route.params.municipalityId;
    this.post = await getSpecificPost(municipalityId, postId);
  }
}
</script>