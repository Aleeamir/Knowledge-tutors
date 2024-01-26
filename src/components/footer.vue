<template>
    <div class="footer">
        <div class="f-first">
            <img src="@/assets/Images/logo2.png" alt="">
        </div>
        <div class="f-second">
            <h4>Who We Serve</h4>
            <router-link to="/"><p>K-12 School or District</p></router-link>
            <router-link to="/"><p>College or Universityt</p></router-link>
            <router-link to="/"><p>Resources</p></router-link>
            <router-link to="/"><p>Visit Resource Hub</p></router-link>
        </div>
        <div class="f-third">
            <h4>About</h4>
            <router-link to="/"><p>Company</p></router-link>
            <router-link to="/"><p>Newsroom</p></router-link>
            <router-link to="/"><p>Privacy and Trust</p></router-link>
            <!-- <div class="location">
            <router-link to="/"><p>My Location</p></router-link>
            <iframe
      width="600"
      height="450"
      frameborder="0"
      style="border:0"
      allowfullscreen
      loading="lazy"
      :src="googleMapLink"
    ></iframe>
        </div> -->
        </div>
        <div class="f-fourth">
            <h4>Support</h4>
            <router-link to="/"><p>Become a Tutor</p></router-link>
            <router-link to="/"><p>Contact Us</p></router-link>
            <router-link to="/"><p>Code of Conduct</p></router-link>
        </div>
    </div>
</template>
<!-- <script>
export default {
  data() {
    return {
      // Replace this link with your own Google Maps link
      googleMapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1234.5678!2dlongitude!3dlatitude!..."
    };
  }
};
</script> -->

<style scoped>
* {
    background-color: #151d34;
    /* padding: 30px; */
}
.f-second a {
    text-decoration: none;
}
.f-third a {
    text-decoration: none;
}
.f-fourth a {
    text-decoration: none;
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