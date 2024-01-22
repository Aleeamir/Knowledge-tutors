<template>
    <div class="about">
        <div class="about-1">
            <div class="about-text">
                <h5>Supporting students <br> and educators with <br> 1:1 online tutoring</h5>
                <p>TutorMe helps schools, districts, colleges, and universities improve the way they deliver personalized
                    learning experiences. We connect learners with the right tutors at the right time, creating better
                    outcomes for everyone.</p>
                <!-- <img src="https://assets-global.website-files.com/636278799c…63d7e4e1d5d1eda3b3114bac_about-us-hero-image.webp"
                    alt=""> -->
            </div>
            <div class="about-img">
                <img src="https://assets-global.website-files.com/636278799c5de66b6357762e/63d7e4e1d5d1eda3b3114bac_about-us-hero-image.webp"
                    alt="">
            </div>
        </div>
        <div class="about-2">
            <div class="about-text-2">
                <h5>Who is Knowledge tutor?</h5>
                <p>TutorMe was built on the belief that no student should ever feel alone in their learning journey. Since
                    our founding in 2015, we've become one of the fastest growing online tutoring providers, working
                    alongside hundreds of educational partners to help their students thrive.</p>
                <p>We joined GoGuardian in 2022, propelling us along on our journey of equipping all students with equitable
                    access to high-quality tutoring.</p>
            </div>
            <div class="about-img-2" style="background-color: #a2d3ff; border-radius: 50px 0px 0px 50px solid white;">
                <img src="@/assets/Images/about-banner.jpg" alt="">
            </div>
        </div>
        <!-- <div class="about-3">
            <h5>Life at Knowledge Tutor</h5>
            <p>As part GoGuardian, we create solutions that foster educational equity and engagement, all while helping
                learners feel inspired and ready to solve the world’s greatest challenges. We’re always looking for
                passionate, driven individuals to join our team.</p>

        </div> -->
        <div class="bt-forth">
            <img src="https://assets-global.website-files.com/636278799c5de66b6357762e/63afbdb8917c0c673951d3bb_Group%20202753.svg"
                alt="">
            <div class="six-text">
                <h1 style="text-align: center; margin: 30px; line-height: 50px;font-family: Ivartext,sans-serif;">Sound like a good fit?
Check out our open roles, and find the one that's right for you.
                </h1>
                <router-link to="/" style="align-items: center;margin-top: 100px;"><button class="button-2">Book A
                        Call</button></router-link>
            </div>
            <img src="https://assets-global.website-files.com/636278799c5de66b6357762e/63afbdb8917c0c673951d3bb_Group%20202753.svg"
                alt="">
        </div>
    </div>
</template>

<style scoped>
.about-1 {
    background-color: #781403;
    display: flex;
    flex-direction: row;
}

.about-text h5 {
    background-color: #781403;
    margin-top: 0;
    margin-bottom: 1rem;
    font-family: Ivartext, sans-serif;
    font-size: 3.375rem;
    font-weight: 700;
    line-height: 1.25;
    color: white;
}

.about-text {
    background-color: #781403;
    padding: 50px;

}

.about-text p {
    margin-bottom: 1em;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.3;
    background-color: #781403;
    color: white;
    margin: 10% 30% 0 0;
}

.about-img img {
    widows: 628px;
    height: 551px;
    background-color: #781403;
}

.about-img {
    background-color: #781403;
}

.about-2 {
    background-color: #a2d3ff;
    display: flex;
    flex-direction: row;
    flex-direction: row-reverse;

}

.about-2 h5 {
    margin-top: 0;
    margin-bottom: 1rem;
    font-family: Ivartext, sans-serif;
    font-size: 2.75rem;
    font-weight: 700;
    line-height: 1.25;
    background-color: #a2d3ff;
}

.about-2 p {
    background-color: #a2d3ff;
    font-size: 1.5rem;
}

.about-img-2 img {
    background-color: #a2d3ff;
    height: 594px;
    width: 465px;
    border-radius: 0px 180px 180px 0px;
}

.about-img-2 {
    background-color: #a2d3ff;

}

.about-text-2 {
    background-color: #a2d3ff;
    padding: 50px;
}

.about-text-2 p {
    margin: 10% 30% 0 0;
}

.about-3 {
    margin-top: 10%;
    background-color: #195e44;
}

.about-3 h5 {
    background-color: #195e44;
    margin-top: 0;
    margin-bottom: 1rem;
    font-family: Ivartext, sans-serif;
    font-size: 2.125rem;
    font-weight: 700;
    line-height: 1.25;
    color: white;

}

.about-3 p {
    background-color: #195e44;
    font-size: 1.5rem;
    color: white;
}
.bt-forth {
    display: flex;
    flex-direction: row;
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
</style>