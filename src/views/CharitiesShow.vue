<template>
  <div class="posts-show">
  <div v-bind:key="contact.id" v-for="contact in contacts">
    <h1>id: {{ post.id }}</h1></p>
    <h1>title: {{ post.title }}</h1>
    <h1>body: {{ post.body }}</h1></p>
    <h1>image: {{ post.image}}</h1></p>
  </div>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios"

export default {
  data: function() {
    return {
      message: "Welcome to the Show",
      post: {}
    };
  },
  created: function() {
    axios.get('/api/posts/' + this.$route.params.id).then(response => {
      console.log(response.data)
      this.post = response.data
    })
  },
  methods: {}
};
</script>
create_table "charities", force: :cascade do |t|
    t.string "charityName"
    t.string "url"
    t.string "donationUrl"
    t.string "city"
    t.string "state"
    t.integer "zipCode"
    t.integer "score"
    t.string "acceptingDonations"
    t.string "category"
    t.string "deductibilityCd"
    t.string "missionStatement"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "chosen_ones", force: :cascade do |t|
    t.integer "user_id"
    t.integer "charity_id"
    t.integer "donated_amount"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "password_digest"
  end

end
