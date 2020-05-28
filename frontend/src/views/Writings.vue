<template>
  <div id="writings-container">
    <div class="container">
      <div class="row mt-3">
        <div class="card mb-3" v-for="writing in writings" :key="writing.title">
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src="https://dummyimage.com/500x500/ddd/fff" class="card-img" alt="...">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{{ writing.title }}</h5>
                <p class="card-text">
                  {{ writing.excerpt }}
                </p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Writings',
  data() {
    return {
      writings: [],
    };
  },
  beforeMount() {
    this.writings.push({
      title: 'Title',
      excerpt: 'Lorem ipsizzle dolor sit amizzle, sheezy shizzle my nizzle '
                + 'crocodizzle elit. Nullizzle sapien ghetto, aliquet tellivizzle, '
                + 'dawg black, gravida vizzle, the bizzle. Pellentesque get down get '
                + 'down gizzle. Sed eros. Fusce fo shizzle dolizzle doggy we gonna '
                + 'chung tempizzle check it out. Maurizzle uhuh ... yih! nibh izzle '
                + 'turpizzle. Bow wow wow things fo. Shizzle my nizzle crocodizzle gizzle '
                + 'rhoncizzle black. In sizzle boom shackalack platea dictumst. Donec '
                + 'dapibizzle. Curabitizzle tellus urna, pretium eu, its fo rizzle mammasay '
                + 'mammasa mamma oo sa, eleifend vitae, nunc. Gizzle suscipit. Sheezy semper '
                + 'velit sizzle black.',
    });
  },
};
</script>

<style scoped lang="scss">
</style>
