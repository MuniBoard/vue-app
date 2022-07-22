<template>
  <div v-if="!!error" :class="{ color: red }">
      {{error}}
  </div>
  <div class="hello">
    <div id="postCreationContainer" class="subjectcreation">
        <div>
            <label for="newPostTitle">Title :</label> <input id="newPostTitle" type="text" v-model="newPostTitle"/>
        </div>
        <div>
            <label for="newPostContent">Content : </label> <input id="newPostContent" type="text" v-model="newPostContent"/>
        </div>
        <button @click="createPost">
            Create Post
        </button>
    </div>
    <div class="subject">
      <h1>{{ municipality.name }}</h1>
      <h2>{{ municipality.coordinates.lat }} {{ municipality.coordinates.long }}</h2>
      <h2>{{ municipality.website }}</h2>
    </div>
    <div class="subsubject"> 
      <div class="subsubjectentry" v-for="(post, postIndex) in posts" :key="postIndex">
        <span>{{post.title}}</span>
        <span>{{post.content}}</span>
        <button @click="GoToPostPage(post.id)" >View post</button>
      </div>
    </div>
  </div>
</template>

<script>
import { getSpecificMunicipality } from '../api/municipality';
import { createPost, getAllPosts } from '../api/post';

export default {
  name: 'app-municipality',
  data: () => {
    return {
      error: undefined,
      municipality : {
        id: "",
        name: "",
        coordinates : {
          lat: 0,
          long: 0
        },
        website: ""
      },
      posts : [],
      newPostTitle : "",
      newPostContent : "",
    }
  },
  async mounted() {
    this.resetPage();
  },
  methods: {
    createPost: async function() {
      this.error = undefined;
      try {
        await createPost(this.municipality.id, {
          title: this.newPostTitle,
          content: this.newPostContent
        });
      }
      catch (e) {
        this.error = e;
      }
      this.resetPage();
    },
    GoToPostPage: async function(id) {
      this.$router.push({name: "Post", params: { municipalityId: this.municipality.id, postId: id }});
    },
    resetPage: async function () {
      this.error = undefined;
      try {
        const municipalityId = this.$route.params.municipalityId;
        this.municipality = await getSpecificMunicipality(municipalityId);
        const response = await getAllPosts(municipalityId);
        this.posts = await response.posts;
      }
      catch (e) {
        this.error = e;
      }
    }
  }
}
</script>