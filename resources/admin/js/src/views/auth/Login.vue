<template>
  <div class="h-screen flex w-full bg-img vx-row no-gutter items-center justify-center" id="page-login">
    <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4">
      <vx-card>
        <div slot="no-body" class="full-page-bg-color">
          <div class="vx-row no-gutter justify-center items-center">
            <div class="vx-col hidden lg:block lg:w-1/2">
              <img src="@assets/images/pages/login.png" alt="login" class="mx-auto">
            </div>
            <div class="vx-col sm:w-full md:w-full lg:w-1/2 d-theme-dark-bg">
              <div class="px-8 pt-8 login-tabs-container">
                <div class="vx-card__title mt-8 mb-4">
                  <h4 class="mb-4 h1 text-center text-cyan-dark">Login</h4>
                  <p>Welcome back, please login to your account.</p>
                </div>
                <div class="flex items-center h-full w-full justify-center mt-8">
                  <login-jwt class="w-full"></login-jwt>
                </div>
              </div>
            </div>
          </div>
        </div>
      </vx-card>
    </div>
  </div>
</template>


<script>
import LoginJwt from './LoginJWT.vue'

export default {
  props: {
  },
  components: {
    LoginJwt
  }
}
</script>

<style lang="scss">
#page-login {
  background: url('/images/home-background.png');
  background-size: 100vw 100vh;
}
.login-tabs-container {
  min-height: 505px;

  .con-tab {
    padding-bottom: 14px;
  }

  .con-slot-tabs {
    margin-top: 1rem;
  }
}
</style>
