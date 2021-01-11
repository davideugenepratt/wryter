<template>
  <div class="modal fade" id="titleModal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-body">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <div v-if="errors != null" class="errors alert alert-danger" role="alert">
            <p>
              Please correct the following errors:
            </p>
            <ul>
              <li :key="error" v-for="error in errors">{{ error }}</li>
            </ul>
          </div>
          <div class="form-group">
            <label for="inputUsername" class="">Give your writing a title!</label>
            <input
              type="text"
              v-model="title"
              id="inputTitle"
              class="form-control"
              required
              autofocus
            />
          </div>

          <div class="form-group form-signin" id="Save Button">
            <a href class="btn btn-lg btn-light btn-block mt-3" @click="handleInput">
              Submit
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TitleModal',
  data() {
    return {
      title: null,
      errors: null,
    };
  },
  methods: {
    handleInput(e) {
      e.preventDefault();
      console.log(this.title);
      console.log(this.errors);

      if (this.title !== null) {
        return this.$emit('updateTitle', this.title);
      }
      return this.errors.push('Must fill in the title field.');
    },
  },
};
</script>

<style lang="scss"></style>
