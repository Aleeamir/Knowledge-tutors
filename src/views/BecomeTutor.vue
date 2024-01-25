<template>
    <div class="bt-page">
        <div class="bt-first">
            <div class="bt-first-text">
                <h3>Every tutor lives for that lightbulb moment</h3>
                <p>We believe 1:1 tutoring can change the trajectory of a student's future — and we're always looking for
                    tutors
                    who share that belief. Join our tutor community to support the hundreds of thousands of students already
                    using TutorMe.</p>
                <div class="btn">
                    <!-- <router-link to="/"><button @click="makePhoneCall" class="button-2" style="margin-left: 0%;">Book A Call</button></router-link> -->
                    <router-link to="/" @click="makePhoneCall">
                        <button class="button-2">Book A Call</button>
                    </router-link>
                </div>
            </div>
            <div class="bt-first-img" style="background-color: #1c8754; margin-top: 30px;">
                <img src="https://media.istockphoto.com/id/1206877888/photo/laptop-computer-education-mother-children-daughter-girl-familiy-childhood.jpg?s=612x612&w=0&k=20&c=sZSKN20CWRuSl3vZchOen1IrKLXFntulRn5RMLyV_xo="
                    alt="">
            </div>
        </div>
        <div class="bt-second">
            <div class="bt-2-upper">
                <h3>Why join our community <br> of online tutors?</h3>
                <div class="bt-p">
                    <p>TutorMe enables tutors to build connections with learners who can benefit most from their experience.
                        Human connection is at the heart of what we do, who we are, and how we help students thrive.</p>
                    <p>We take the behind-the-scenes scheduling and administration off your plate – all while empowering you
                        with award-winning technology – so you can focus on helping students grow and succeed.</p>
                </div>
            </div>
            <div class="bt-2-lower">
                <div class="grid-item" v-for="(desc, index) in desc" :key="index">
                    <h4>{{ desc.heading }}</h4>
                    <p>{{ desc.paragraph }}</p>
                </div>
            </div>
            <div class="bt-third">
                <div class="bt-3-upper" style="background-color:#cfeeff ;">
                    <h3 style="background-color: #cfeeff;">Experienced. Passionate. <br> Knowledgeable.</h3>
                    <p style="background-color: #cfeeff;">Sound like you? Apply to join our community of virtual tutors if
                        you
                        meet <br> this minimum requirements:
                    </p>
                    <ul>
                        <li v-for="item in items" :key="item.id">
                            {{ item.name }}
                        </li>
                    </ul>
                </div>
                <div class="bt-3-lower">
                    <img src="https://assets-global.website-files.com/636278799c5de66b6357762e/63d98b1c4f5a2577c74b136b_virtual-tutor-girl-p-1080.webp"
                        alt="">
                </div>
            </div>
            <div class="bt-forth">
                <img src="https://assets-global.website-files.com/636278799c5de66b6357762e/63afbdb8917c0c673951d3bb_Group%20202753.svg"
                    alt="">
                <div class="six-text">
                    <h1 style="align-items: center; margin: 0% 10% 10% 10%;">Join our tutor community to build student
                        confidence and create better outcomes.
                    </h1>
                    <!-- <router-link to="/" style="align-items: center;margin-top: 100px;"><button class="button-2">Book A
                            Call</button></router-link> -->
                    <router-link to="/" @click="makePhoneCall">
                        <button class="button-2">Book A Call</button>
                    </router-link>
                </div>
                <img src="https://assets-global.website-files.com/636278799c5de66b6357762e/63afbdb8917c0c673951d3bb_Group%20202753.svg"
                    alt="">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            desc: [
                { heading: 'Earn steady income', paragraph: 'Thousands of learners log into TutorMe daily, ready to connect 1:1 with a tutor like you. We pay tutors weekly and do not require invoicing or paperwork, so you can focus on what you do best: tutoring students!' },
                { heading: 'Set your own, flexible schedule', paragraph: 'As a TutorMe tutor, you’ll have the flexibility to work whenever you want, from wherever you want. We’re a 24/7, fully remote tutoring platform –  that means limitless flexibility and opportunity for our tutors.' },
                { heading: 'Use best-in-class technology', paragraph: 'Both tutors and students love the way our award-winning platform facilitates online collaboration. It has everything you need to help your students succeed, like live audio/video chat, virtual whiteboards, and screen sharing.' },
            ],
            items: [
                { id: 1, name: 'Have at least two years of tutoring or teaching experience' },
                { id: 2, name: 'Can demonstrate mastery of the subjects you want to tutor' },
                { id: 3, name: 'Speak fluent, easy-to-understand English' },
                { id: 4, name: 'Hold a degree or are currently enrolled at an accredited university' },
                { id: 5, name: 'Are at least 18 years old' },
                { id: 6, name: 'Live in the U.S. or one of the approved countries listed in the FAQ below' },
                { id: 7, name: 'Are dedicated to successful learning outcomes' },
            ],
        };
    },
    methods: {
        makePhoneCall() {
            const phoneNumber = '+923236314550'; 
            const phoneCallLink = `tel:${phoneNumber}`;

            window.open(phoneCallLink, '_blank');
        },
    },
};

</script>
<style scoped>
.bt-forth {
    display: flex;
    flex-direction: row;
    margin-top: 80px;
}

.bt-3-upper {
    display: flex;
    flex-direction: column;
    padding: 80px 40px 40px 40px;
}

.bt-3-lower {
    background-color: #cfeeff;
}

.bt-3-lower img {
    width: 600px;
    height: 600px;
    padding-right: 0%;
    margin-top: 30px;
    border-radius: 170px 0px 0px 0px;
}

.bt-third li {
    font-family: Ivartext, sans-serif;
    margin-bottom: 0.4rem;
    background-color: #cfeeff;
}

.bt-third ul {
    background-color: #cfeeff;

}

.bt-third {
    background-color: #cfeeff;
    /* padding: 30px; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* gap: 125px; */
}

.bt-2-lower {
    display: flex;
    flex-direction: row;
    gap: 40px;
    margin-top: 50px;
    border-bottom: 1px solid green;
    padding: 20px;
    padding-bottom: 40px;
    margin-bottom: 40px;
}

.bt-2-lower h4 {
    margin-bottom: 1rem;
    font-size: 1.375rem;
    line-height: 1.25;
}

.btn {
    background-color: #1c8754;

}

.bt-2-upper {
    border-bottom: 1px solid green;
}

.bt-2-upper h3 {
    color: white;
}

.bt-p {
    display: flex;
    flex-direction: row;
    gap: 100px;
    padding: 30px;

}

.bt-p p {
    font-size: 1.5rem;
    color: white;
}

.bt-first {
    gap: 80px;
    background-color: #1c8754;
}

.bt-first-text h3 {
    background-color: #1c8754;
    color: white;
}

.bt-first-text p {
    background-color: #1c8754;
    color: white;
}

.bt-first-img img {
    /* box-shadow: #0c0101; */
    border-radius: 20%;
}

.bt-first-text {
    /* align-items: center; */
    display: flex;
    flex-direction: column;
    /* text-align: center; */
    background-color: #1c8754;
    padding: 20px;

}

h3 {
    margin-bottom: 1rem;
    font-family: Ivartext, sans-serif;
    font-size: 3.375rem;
    font-weight: 700;
    /* line-height: 1.25; */
}

p {
    font-family: Ivartext, sans-serif;
    line-height: 30px;
}

.bt-first-text p {
    margin-bottom: 1em;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.3;

}

.bt-first {
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

.grid-item h4 {
    color: white;
}

.grid-item p {
    color: white;
}</style>