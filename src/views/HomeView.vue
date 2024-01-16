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

/* .button-2:hover {
  background-image: linear-gradient(#B384C9, #391F5B 50%);
} */

/* @media (min-width: 768px) {
  .button-72 {
    font-size: 21px;
    padding: 18px 34px;
  }
} */</style>
