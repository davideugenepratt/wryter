<template>
<div>
  <div class="text-center">
    <form class="form-signin">
      <h1 class="mb-3"></h1>
      <label for="inputEmail" class="sr-only">Email Address</label>
      <input type="email" id="inputEmail" class="form-control"
      placeholder="Email address" required autofocus>
      <label for="inputPassword" class="sr-only ">Password</label>
      <input type="password" id="inputPassword" class="form-control" placeholder="Password">
    </form>
  </div>

</div>

</template>

<script>

export default {
  name: 'Register',
};
</script>
