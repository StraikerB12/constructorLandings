<template>
    <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
    </nav>
    <div
        class="test-form-vue-post-info"
        style="padding: 30px; border-radius: 10px; border: 1px solid #ccc"
    >
        <el-button type="primary">Default</el-button>
    </div>

    <router-view />
</template>

<style lang="scss">
#app {
    overflow: auto;
    display: block;
    margin: 5px;
    padding: 5px;
    text-align: center;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: #2c3e50;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

nav {
    padding: 30px;

    a {
        color: #2c3e50;
        font-weight: bold;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
