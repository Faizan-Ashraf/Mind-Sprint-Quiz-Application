
let myCarousel = document.getElementById("myCarousel");
var carousel = new bootstrap.Carousel(myCarousel, {
    wrap: false,
    interval: false
});

let prevButton = document.getElementById('prevButton');
let nextButton = document.getElementById('nextButton');
let submit = document.getElementById('submitbtn');

var updateCarouselButtons = () => {

    let activeItem = myCarousel.querySelector('.carousel-item.active');
    let isFirstItem = activeItem === myCarousel.querySelector('.carousel-item:first-child');
    let isLastItem = activeItem === myCarousel.querySelector('.carousel-item:last-child');

    prevButton.style.opacity = isFirstItem ? '0.5' : '1';
    nextButton.style.display = isLastItem ? 'none' : 'inline-block';
    submit.style.display = isLastItem ? 'inline-block' : 'none';

};

myCarousel.addEventListener('slid.bs.carousel', () => {
    updateCarouselButtons();
});

updateCarouselButtons();

let abc = 1;
submit.addEventListener("click", () => {
    let validate = confirm("Do You Really Want to Submit Your Quiz?");

    if (validate == true) {



        let result = new bootstrap.Modal(document.getElementById('result'), {
            keyboard: false
        });

        let answers = document.querySelectorAll(".answer");

        let count = 0;

        answers.forEach(radio => {

            if (radio.checked === true) {
                count++;
            }

        })

        document.querySelector(".obt-marks").innerText = count;
        let feedback = document.querySelector(".feedback");
        if (count < 5) {
            feedback.innerText = "POOR";
            feedback.style.color = "red";
        }
        else if (count > 5 && count < 9) {
            feedback.innerText = "Good";
            feedback.style.color = "yellow";
        }
        else {
            feedback.innerText = "Excellence";
            feedback.style.color = "green";
        }

        result.show();
    }
})



