<template>
  <div v-if="!!error" :class="{ color: red }">
    {{error}}
  </div>
  <div class="hello">
    <div id="municipalityCreationContainer" class="subjectcreation">
        <div>
            <label for="newMunicipalityName">Name :</label> <input id="newMunicipalityName" type="text" v-model="newMunicipalityName"/>
        </div>
        <div>
            <label for="newMunicipalityCoordinates">Coordinates : </label> <div id="newMunicipalityCoordinates"><input type="number" v-model="newMunicipalityLat"/><input type="number" v-model="newMunicipalityLong"/></div>
        </div>
        <div>
            <label for="newMunicipalityWebsite">Website : </label> <input id="newMunicipalityWebsite" type="text" v-model="newMunicipalityWebsite"/>
        </div>
        <button @click="createMunicipality">
            Create Municipality
        </button>
    </div>
    <div class="subject">
      <h1>{{homeTitle}}</h1>
      <p>{{homeDescription}}</p>
    </div>
    <div class="subsubject">
      <div id="municipalityListContainer" v-for="(municipality, municipalityIndex) in municipalityList" :key="municipalityIndex" class="card subsubjectentry">
        <span>{{ municipality.name }}</span>
        <span>{{ municipality.coordinates.lat }} {{municipality.coordinates.long}}</span>
        <a :href="municipality.website">{{ municipality.website }}</a>
        <button @click="GoToMunicipalityPage(municipality.id)" >View municipality</button>
      </div>
    </div>
  </div>
</template>

<script>
import { getAllMunicipalities, createMunicipality } from '../api/municipality';

export default {
  name: 'municipality-list',
  data: () => {
    return {
        municipalityList : [],
        newMunicipalityName : "",
        newMunicipalityLat : 0,
        newMunicipalityLong : 0,
        newMunicipalityWebsite : "",
        homeTitle: "Welcome",
        homeDescription: "Create a municipality or participate in an existing municipality's discussions.",
        error : undefined,
    }
  },
  methods: {
    resetPage: async function () {
        this.error = undefined;
        try {
          const response = await getAllMunicipalities();
          this.municipalityList = response.municipalities;
        }
        catch (e) {
          this.error = e;
        }
    },
    createMunicipality: async function () {
        let municipality = {
            name: this.newMunicipalityName,
            coordinates: {
                lat: this.newMunicipalityLat,
                long: this.newMunicipalityLong
            }
        };
        if(this.newMunicipalityWebsite) {
          municipality = {
            name: this.newMunicipalityName,
            coordinates: {
              lat: this.newMunicipalityLat,
              long: this.newMunicipalityLong
            },
            website: this.newMunicipalityWebsite
          }
        }

        this.error = undefined;
        try {
          await createMunicipality(municipality);
          await this.resetPage();
        }
        catch (e) {
          this.error = e;
        }
    },
    GoToMunicipalityPage: async function (id) {
      this.$router.push({name: 'Municipality', params: { municipalityId : id }})
    }

  },
  async mounted() {
    await this.resetPage();
  },
}
</script>
