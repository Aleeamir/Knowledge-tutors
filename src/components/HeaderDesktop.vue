<template>
    <nav>
        <div class="navigation-bar">
            <div class="logo">
                <router-link to="/" class="logo-link">
                    <img src="@/assets/Images/logo2.png" alt="Logo">
                </router-link>
            </div>
            <div class="inner-nav">
                <RouterLink to="/">Who We Serve</RouterLink>
                <RouterLink to="/BecomeTutor">Become A Tutor</RouterLink>
                <RouterLink to="/About">About</RouterLink>
            </div>
            <div class="sidenav">
                <button class="button-1" @click="openWhatsAppChat">WhatsApp</button>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    data() {
        return {
            phoneNumber: '+923092015567',
            message: 'Hello, I\'d like to chat!',
        };
    },
    computed: {
        whatsappUrl() {
            return `https://wa.me/${this.phoneNumber}?text=${encodeURIComponent(this.message)}`;
        },
    },
    methods: {
        openWhatsAppChat() {
            window.open(this.whatsappUrl, '_blank');
        },
    },
};

</script>
<style scoped>
.inner-nav a {
    text-decoration: none;
    /* color: rgb(232, 220, 220); */
    font-size: 24px;
    font-family: 'Roboto', sans-serif;
    color: rgb(245, 239, 239);
}

.sidenav {
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}


nav .navigation-bar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: auto;
    padding: 0% 7% 0% 7%;
}

.nav {
    margin-top: 20px;
}

.logo-link img {
    width: 150px;
    height: 120px;
    padding-left: 30px;
}

.nav .navigation-bar {
    background-color: #7874;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
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
    color: rgb(249, 247, 247);
    font-size: 18px;
    font-family: 'Roboto', sans-serif;
    margin-left: 40px;
}

.inner-nav {
    border-right: black;
    /* padding: 3% 0% 0% 0%; */
}

.sidenav a {
    text-decoration: none;
    color: black;
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
}

.button-1 {
    appearance: button;
    background-color: #7874;
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
    padding: 10px;
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
}
</style> 