<template>
  <div class="home">
    <div class="home-first">
      <div class="home-text-cont">
        <h1> Every student needs a </h1>
        <p>{{ replacementWord }}.</p>
        <router-link to="/About"><button class="button-2">Why KT?</button></router-link>
        <div class="banner-1"><img
            src="https://assets-global.website-files.com/636278799c5de66b6357762e/6425b8ac662f566f966232d4_superhero.png"
            alt="">
        </div>
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
      <div class="banner-fourth-2">
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
          src="https://www.verywellfamily.com/thmb/oRqHvsqZX4qmPV0iam1A0PMoy4k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1218752364-331f29a3c73f465f87dc3cd63daf6df1.jpg"
          alt="">
      </div>
    </div>
    <div class="home-six">
      <img
        src="https://assets-global.website-files.com/636278799c5de66b6357762e/63afbdb8917c0c673951d3bb_Group%20202753.svg"
        alt="">
      <div class="six-text">
        <h1 style="text-align: center;">Start providing better support to your students and educators today.</h1>
        <router-link to="/About" style="align-items: center;margin-top: 100px;"><button class="button-2">About
            Us</button></router-link>
      </div>
      <img
        src="https://assets-global.website-files.com/636278799c5de66b6357762e/63afbdb8917c0c673951d3bb_Group%20202753.svg"
        alt="">
    </div>
  </div>
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
.home {
  margin-top: -60px;
}

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

.home {
  box-sizing: border-box;
  overflow-x: hidden;
}

.lower-image img {
  width: 1504px;
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
  font-size: 1.00rem;
  font-weight: 400;
  line-height: 1.3;
  text-align: center;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 30px;
  /* color: white; */

}

.home-text-cont h1 {
  text-align: center;
  font-family: Ttcommons, sans-serif;
  font-size: 5.375rem;
  font-weight: 500;
  line-height: 1;
  background: transparent;
  color: white;
  padding-top: 3%;

}

.home-first {
  position: relative;
  background-image: url('/src/assets/Images/bg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.home-first::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
}

.home-text-cont {
  position: relative;
  z-index: 1;
  background: transparent;
}



.home-text-cont p {
  text-align: center;
  font-family: Ttcommons, sans-serif;
  font-size: 6.375rem;
  font-weight: 600;
  line-height: 0;
  font-style: italic;
  overflow: visible !important;
  color: white;
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
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  margin-left: 45%;
  background-color: #d4f559;


}


.banner-1 img {
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  max-width: 1500px;
  max-height: 500px;
  margin: 80px 0px 80px 0px;
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

.home-fifth .this-image img {
  width: 400px;
  height: 400px;
}

.home-fifth .this-image {
  background-color: #b6ad90;
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
  padding-top: 11%;
  padding-left: 5%;

}

.home-third img {
  background-color: #a2d3ff;
  max-width: 427px;
  max-height: 413px;
  display: inline-block;
  padding-top: 9%;
  padding-left: 5%;
  padding-right: 10%;
}

.home-fourth {
  display: flex;
  flex-direction: column;
}

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
}

.banner-fourth {
  display: flex;
  flex-direction: row;
}

.banner-fourth-2 {
  display: flex;
  flex-direction: row-reverse;
}

.banner-1 {
  margin-top: 3%;
}

.this-image {
  padding: 70px;
  margin-top: 70px;
}

.home-fifth {
  display: flex;
  flex-direction: row;
  background-color: #b6ad90;
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

}
</style>