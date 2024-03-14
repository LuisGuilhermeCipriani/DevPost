<template>
    <header id="header_component">
        <router-link to="/" class="a">ProjetoPost</router-link>
        <button><router-link to="/dashboard" class="router">Dashboard</router-link></button>
    </header>
</template>

<script>
export default {
    name: 'Header_component'
}
</script>

<style scoped>
#header_component {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 60px;
    background-color: #202225;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.a {
    text-decoration: none;
    font-size: 30px;
    color: #FFF;
    cursor: pointer;
    font-weight: bold;
}

.router {
    text-decoration: none;
    color: #FFF;
    cursor: pointer;
    font-weight: bold;
}

button {
    cursor: pointer;
    border: 0;
    color: #FFF;
    background: transparent;
    padding: 5px 15px;
    outline: none;
    font-weight: bold;
}
</style>