const boxes = document.querySelectorAll(".box");
const sounds = document.querySelectorAll("audio");

boxes.forEach(box => {
    box.addEventListener("click", () => {
        removeClassPlaying(boxes);

        let pet = box.classList[1];
        let audio = document.querySelector(`audio[data-key="${pet}"]`);

        box.classList.add("playing");

        audio.currentTime = 0;
        audio.play();

        box.addEventListener("transitionend", e => {
            if (e.propertyName !== "outline-width") return;
            box.classList.remove("playing");
        });
    });
});

function removeClassPlaying(boxes) {
    boxes.forEach(item => item.classList.remove("playing"));
    sounds.forEach(sound => sound.pause());
}
