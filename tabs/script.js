const tabOneBtn = document.getElementById('tab1');
const tabTwoBtn = document.getElementById('tab2');
const tabThreeBtn = document.getElementById('tab3');
const tabFourBtn = document.getElementById('tab4');

const tabOneContent = document.getElementById('content1');
const tabTwoContent = document.getElementById('content2');
const tabThreeContent = document.getElementById('content3');
const tabFourContent = document.getElementById('content4');

window.onload = () => {
    tabOneBtn.style.backgroundColor = 'green';
    tabTwoContent.style.display = 'none';
    tabThreeContent.style.display = 'none';
    tabFourContent.style.display = 'none';
};

tabOneBtn.addEventListener('click', () => {
    tabOneBtn.style.backgroundColor = 'green';
    tabTwoBtn.style.backgroundColor = 'white';
    tabThreeBtn.style.backgroundColor = 'white';
    tabFourBtn.style.backgroundColor = 'white';
    tabOneContent.style.display = 'block';
    tabTwoContent.style.display = 'none';
    tabThreeContent.style.display = 'none';
    tabFourContent.style.display = 'none';
});

tabTwoBtn.addEventListener('click', () => {
    tabOneBtn.style.backgroundColor = 'white';
    tabTwoBtn.style.backgroundColor = 'green';
    tabThreeBtn.style.backgroundColor = 'white';
    tabFourBtn.style.backgroundColor = 'white';
    tabOneContent.style.display = 'none';
    tabTwoContent.style.display = 'block';
    tabThreeContent.style.display = 'none';
    tabFourContent.style.display = 'none';
});

tabThreeBtn.addEventListener('click', () => {
    tabOneBtn.style.backgroundColor = 'white';
    tabTwoBtn.style.backgroundColor = 'white';
    tabThreeBtn.style.backgroundColor = 'green';
    tabFourBtn.style.backgroundColor = 'white';
    tabOneContent.style.display = 'none';
    tabTwoContent.style.display = 'none';
    tabThreeContent.style.display = 'block';
    tabFourContent.style.display = 'none';
});

tabFourBtn.addEventListener('click', () => {
    tabOneBtn.style.backgroundColor = 'white';
    tabTwoBtn.style.backgroundColor = 'white';
    tabThreeBtn.style.backgroundColor = 'white';
    tabFourBtn.style.backgroundColor = 'green';
    tabOneContent.style.display = 'none';
    tabTwoContent.style.display = 'none';
    tabThreeContent.style.display = 'none';
    tabFourContent.style.display = 'block';
});