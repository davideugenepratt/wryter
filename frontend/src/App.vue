<template>
  <div>
    <header>
      <div class="navbar navbar-dark bg-dark box-shadow">
        <div class="container d-flex justify-content-between">
          <a href="/" class="navbar-brand d-flex align-items-center">
            <strong>Wryter</strong>
          </a>
          <a href="/login" class="text-white">Login</a>
        </div>
      </div>
    </header>

    <main role="main">
      <div id="#app" class="d-flex justify-content-center flex-column h-100">
        <router-view/>
      </div>
    </main>
  </div>
</template>
