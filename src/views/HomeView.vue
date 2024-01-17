<template>
  <div class="home">
    <div class="home-first">
      <h1> Every student needs a </h1>
      <p>{{ replacementWord }}.</p>
      <router-link to="/"><button class="button-2">Why TutorMe?</button></router-link>
      <div class="banner-1"><img
          src="https://assets-global.website-files.com/636278799c5de66b6357762e/6425b8ac662f566f966232d4_superhero.png"
          alt="">
      </div>
    </div>
    <div class="home-second">
      <h1>We take tutoring personally</h1>
      <p>Every student’s success starts with a meaningful connection. We connect learners with the right tutors at the
        right time, creating a ripple effect of better outcomes for the entire community.</p>
      <div class="review">
        <div class="grid-item" v-for="(item, index) in items" :key="index">
          <h2>{{ item.heading }}</h2>
          <p>{{ item.paragraph }}</p>
        </div>
      </div>
      <div class="lower-image"><img
          src="https://img.freepik.com/free-photo/teacher-helping-girl-learning-english_52683-86638.jpg" alt="">
      </div>
    </div>
    <div class="home-third">
      <h1>TutorMe connects students with highly qualified tutors for 1:1 support, whenever and wherever they need it the
        most.</h1>
      <img src="@/assets/Images/ground.webp" alt="">
    </div>
    <div class="home-fourth">
      <div class="banner-fourth">
        <div class="this-portion">
          <h1>For schools and districts</h1>
          <p>Offer K-12 students additional 1:1 support, without placing more burden on your teachers and staff.</p>
          <router-link to="/"><button class="button-2">Learn more</button></router-link>
        </div>
        <div class="this-image">
          <img src="@/assets/Images/banner1.webp" alt="">
        </div>
      </div>
      <div class="banner-fourth">
        <div class="this-portion">
          <h1>For colleges and universities</h1>
          <p>Reimagine how your students access tutoring with around-the-clock availability of high quality tutors.</p>
          <router-link to="/"><button class="button-2">Learn more</button></router-link>
        </div>
        <div class="this-image">
          <img src="@/assets/Images/banner2.webp" alt="">
        </div>
      </div>
    </div>
    <div class="home-fifth">
      <div class="inside-fifth">
        <h1>It’s time to put your zone of genius to work</h1>
        <p>Somewhere there's a student who could use your 1:1 support. TutorMe is recreating the way students access and
          receive high-quality, personalized tutoring. Join our community of tutors to make a real difference in the lives
          of students and educators nationwide.</p>
      </div>
      <div class="this-image">
        <img
          src="data:image/jpeg;base64,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"
          alt="">
      </div>
    </div>
    <div class="home-six">
      <img
        src="https://assets-global.website-files.com/636278799c5de66b6357762e/63afbdb8917c0c673951d3bb_Group%20202753.svg"
        alt="">
      <div class="six-text">
        <h1 style="text-align: center;">Start providing better support to your students and educators today.</h1>
        <router-link to="/" style="align-items: center;margin-top: 100px;"><button class="button-2">Book A
            Call</button></router-link>
      </div>
      <img
        src="https://assets-global.website-files.com/636278799c5de66b6357762e/63afbdb8917c0c673951d3bb_Group%20202753.svg"
        alt="">
    </div>
  </div>

  <!-- <main>
    <TheWelcome />
  </main> -->
</template>
<script>
export default {
  data() {
    return {
      replacementWord: 'mentor',
      replacements: ['tutor', 'sidekick', 'cheerleader'],
      currentIndex: 0,
      items: [
        { heading: '1.3M+', paragraph: 'Live sessions and Writing Lab submissions' },
        { heading: '705K+', paragraph: 'Hours of live, one-on-one connection' },
        { heading: '4.8/5', paragraph: 'Average rating students given their tutors' },
      ],
    };
  },
  mounted() {
    this.startReplacementLoop();
  },
  beforeDestroy() {
    clearInterval(this.intervalId);
  },
  methods: {
    startReplacementLoop() {
      this.intervalId = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.replacements.length;
        this.replacementWord = this.replacements[this.currentIndex];
      }, 2000);
    },
  },
};


</script>

<style scoped>
.home-six {
  display: flex;
  flex-direction: row;
  margin-top: 40px;
}

.six-text {
  display: flex;
  flex-direction: column;
}

.six-text a {
  margin-right: 20px;
}

.lower-image {
  width: 100vw;
  height: 40vw;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  flex-direction: column;
  justify-content: center;
  margin-top: 3rem;
  display: flex;
  position: relative;
  overflow: hidden;
}

.review {
  display: flex;
  flex-direction: row;
  background-color: #1c8754;
  justify-content: space-around;
  padding-bottom: 200px;
  padding-top: 100px;
}

.grid-item {
  background-color: #1c8754;
  display: flex;
  flex-direction: column;
  /* border: 2px solid; */
  border-right: 1px solid white;
}

.grid-item h2 {
  background-color: #1c8754;
  margin-bottom: 1rem;
  font-family: Ivartext, sans-serif;
  font-size: 3.375rem;
  font-weight: 700;
  line-height: 1.25;
  text-align: center;
  color: #c4951b;
}

.grid-item p {
  background-color: #1c8754;
  margin-bottom: 1em;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.3;
  text-align: center;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 30px;

}

.home-first h1 {
  text-align: center;
  margin-top: 100px;
  font-family: Ttcommons, sans-serif;
  font-size: 6.375rem;
  font-weight: 500;
  line-height: 1;

}

.home-first p {
  text-align: center;
  /* margin-top: 20px; */
  font-family: Ttcommons, sans-serif;
  font-size: 6.375rem;
  font-weight: 600;
  line-height: 0;
  font-style: italic;
  /* padding: 30px; */
}

.button-2 {
  align-items: center;
  background-color: initial;
  background-color: #d4f559;
  border-radius: 7px;
  border-width: 0;
  color: #0c0101;
  cursor: pointer;
  display: flex;
  font-family: Quicksand, sans-serif;
  font-size: 18px;
  font-weight: 700;
  justify-content: center;
  letter-spacing: .04em;
  line-height: 16px;
  margin: 0;
  padding: 18px 18px;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  margin-left: 45%;
}

.banner-1 img {
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  max-width: 1500px;
  max-height: 500px;
  margin-top: 80px;
}

.home-second {
  display: flex;
  flex-direction: column;
  background-color: #1c8754;
}

.home-second h1 {
  margin-bottom: 1rem;
  font-family: Ivartext, sans-serif;
  font-size: 3.375rem;
  font-weight: 700;
  line-height: 1.25;
  text-align: center;
  background-color: #1c8754;
  color: white;
}


.home-second p {
  margin-bottom: 1em;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.3;
  text-align: center;
  background-color: #1c8754;
  color: white;
}

.home-third {
  background-color: #a2d3ff;
  display: flex;
  flex-direction: row;
  /* flex-wrap: wrap; */
  justify-content: space-between;
  padding-bottom: 5%;
}

.home-third h1 {
  background-color: #a2d3ff;
  margin-top: 0;
  margin-bottom: 1rem;
  font-family: Ivartext, sans-serif;
  font-size: 2.75rem;
  font-weight: 700;
  line-height: 1.25;
  /* margin-top: 200px;
    margin-right: 40px; */
  padding-top: 11%;
  /* padding-right: 17%; */
  padding-left: 5%;

}

.home-third img {
  background-color: #a2d3ff;
  max-width: 427px;
  max-height: 413px;
  display: inline-block;
  padding-top: 9%;
  /* padding-right: 17%; */
  padding-left: 5%;
  padding-right: 10%;
}

.home-fourth {
  display: flex;
  flex-direction: column;
}

/* .home-fourth .banner-fourth {
  flex-direction: row-reverse;
} */

.home-fourth h1 {
  margin-top: 0;
  margin-bottom: 1rem;
  font-family: Ivartext, sans-serif;
  font-size: 2.75rem;
  font-weight: 700;
  line-height: 1.25;
}

.home-fourth P {
  margin-bottom: 1em;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.3;
}

.this-portion {
  display: flex;
  flex-direction: column;
  padding-top: 15%;
  text-align: center;
  /* align-items: center; */
}

.banner-fourth {
  display: flex;
  flex-direction: row;
}

.this-image {
  padding: 70px;
  margin-top: 70px;
}

.home-fifth {
  display: flex;
  flex-direction: row;
  background-color: #b6ad90;
  /* padding: 40px; */
}

.home-fifth h1 {
  margin-top: 0;
  margin-bottom: 1rem;
  font-family: Ivartext, sans-serif;
  font-size: 2.125rem;
  font-weight: 700;
  line-height: 1.25;
  background-color: #b6ad90;

}

.home-fifth P {
  margin-bottom: 1em;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.3;
  background-color: #b6ad90;

}

.inside-fifth {
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  background-color: #b6ad90;

}

.inside-fifth .this-image {
  width: 100%;
  height: auto;
  display: block;
  background-color: #b6ad90;

  /* background-image: image('@/assets/Images/banner1.webp'); */
}

/* .this-image {
  background-color: #b6ad90;
} */</style>
