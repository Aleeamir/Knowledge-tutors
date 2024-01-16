<template>
    <nav>
        <div class="nav-inner">
            <div class="logo">
                <router-link to="/" class="logo-link">
                    <!-- <img
                        src="@/assets/Images/logo.png" /> -->
                        <h1>KNOWLEDGE <br> TUTORS</h1>
                </router-link>
            </div>
            <div class="inner-nav">
                <RouterLink to="/">Who We Serve
                </RouterLink>
                <RouterLink to="/Accessories">
                    Become A Tutor</RouterLink>
                <RouterLink to="/Women">
                    Resources
                </RouterLink>
                <RouterLink to="/Men">About
                </RouterLink>
            </div>
            <div class="sidenav">
                <RouterLink to="/About">Login</RouterLink>
                <router-link to="/Accessories"><button class="button-1">Shop Now</button></router-link>
            </div>
        </div>
    </nav>
</template>
<style scoped>
.logo-link {
    text-decoration-line: none;
}
.logo-link h1 {
    color: #1c8754;
}
.inner-nav a {
    text-decoration: none;
    color: black;
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
}

.sidenav {
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

/* .nav-inner {
    background-color: rgb(10, 10, 114);
} */
nav .nav-inner {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: auto;
}

.logo {
    padding: 20px;
}

.nav .nav-inner {
    background-color: white;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 80px;
    display: flex;
    align-items: center;
    cursor: pointer;
}

* {
    padding: 0;
    box-sizing: border-box;
}

.inner-nav a {
    text-decoration: none;
    color: black;
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
    padding: 0 15px;
}

.inner-nav {
    border-right: black;
}

.sidenav a {
    text-decoration: none;
    color: black;
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
    padding-right: 35px;
}

.button-1 {
    appearance: button;
    background-color: #ecf0f1;
    border: solid transparent;
    border-radius: 16px;
    border-width: 0 0 4px;
    box-sizing: border-box;
    color: #FFFFFF;
    cursor: pointer;
    display: inline-block;
    font-family: din-round, sans-serif;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: .8px;
    line-height: 20px;
    margin: 0;
    outline: none;
    overflow: visible;
    padding: 13px 1px;
    text-align: center;
    text-transform: uppercase;
    touch-action: manipulation;
    transform: translateZ(0);
    transition: filter .2s;
    user-select: none;
    -webkit-user-select: none;
    vertical-align: middle;
    white-space: nowrap;
    width: 100%;
}

.button-1:after {
    background-clip: padding-box;
    background-color: #81f188;
    border: solid transparent;
    border-radius: 6px;
    border-width: 0 0 4px;
    bottom: -4px;
    content: "";
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
}

.button-1:main,
.button-1:focus {
    user-select: auto;
}

.button-1:hover:not(:disabled) {
    filter: brightness(1.1);
    -webkit-filter: brightness(1.1);
}

.button-1:disabled {
    cursor: auto;
}

.button-1:active {
    border-width: 4px 0 0;
    background: none;
}</style>  