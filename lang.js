const langEl = document.querySelector('.lang-wrapper')
const link = document.querySelectorAll('a.lang')
const greetingsEl = document.querySelector('.greetings')
const contactEl = document.querySelector('.contact-me')
const themeEl = document.querySelector('.theme-pers')
const themeMsgEl = document.querySelector('.theme-msg')
const infoEl = document.querySelector('.info-header')
const infoMsgEl = document.querySelector('.info-msg')

const aboutMeTitle = document.querySelector('.about-me-title')
const aboutMeOne = document.querySelector('.about-me-one')
const aboutMeTwo = document.querySelector('.about-me-two')
const education = document.querySelector('.education')
const university = document.querySelector('.university')
const expertise = document.querySelector('.expertise')
const jsAng = document.querySelector('.js-ang')

const sourceLink = document.querySelectorAll('.source-link')
console.log(sourceLink)

link.forEach(el => {
    el.addEventListener('click', () => {
        langEl.querySelector('.active').classList.remove('active')
        el.classList.add('active')
        const attr = el.getAttribute('language')
        
        greetingsEl.textContent = data[attr].greetings
        contactEl.textContent = data[attr].contact
        themeEl.textContent = data[attr].theme
        themeMsgEl.textContent = data[attr].themeMsg
        infoEl.textContent = data[attr].info
        infoMsgEl.textContent = data[attr].infoMsg

        aboutMeTitle.textContent = data[attr].aboutMeTitle
        aboutMeOne.textContent = data[attr].aboutMeOne
        aboutMeTwo.textContent = data[attr].aboutMeTwo
        education.textContent = data[attr].education
        university.textContent = data[attr].university
        expertise.textContent = data[attr].expertise
        jsAng.textContent = data[attr].jsAng
        
        sourceLink.forEach(source => {
            source.textContent= data[attr].sourceLink
        });
        
    });
});
