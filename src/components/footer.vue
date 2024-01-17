<template>
    <div class="footer">
        <div class="f-first">
            <img src="@/assets/Images/logo2.png" alt="">
        </div>
        <div class="f-second">
            <h4>Who We Serve</h4>
            <p>K-12 School or District</p>
            <p>College or University</p>
            <h4>Resources</h4>
            <p>Visit Resource Hub</p>
            <p>Articles</p>
        </div>
        <div class="f-third">
            <h4>About</h4>
            <p>Company</p>
            <p>Newsroom</p>
            <p>Privacy and Trust</p>
        </div>
        <div class="f-fourth">
            <h4>Support</h4>
            <p>Become a Tutor</p>
            <p>Contact Us</p>
            <p>Code of Conduct</p>
        </div>
    </div>
</template>

<style scoped>
* {
    background-color: #151d34;
    /* padding: 30px; */
}

h4 {
    margin-top: 0;
    margin-bottom: 1rem;
    font-family: Ivartext, sans-serif;
    font-size: 1.375rem;
    font-weight: 700;
    line-height: 1.25;
    color: white;
}
.footer p {
    color: white;
}
.footer {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    justify-content: space-around;
    margin-top: 40px;
    padding: 30px;
}
</style>