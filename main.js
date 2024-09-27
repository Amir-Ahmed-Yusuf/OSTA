const menuBtns = document.querySelectorAll(".nav_2_menu__btn");
const navLinks = document.querySelectorAll(".nav__links");

menuBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    navLinks.forEach((links, i) => {
      if (i !== index) {
        links.classList.remove("open");
      }
    });
    navLinks[index].classList.toggle("open");
  });
});

function changeText() {
  const h1Element = document.getElementById("changeable-h1");
  const textArray = [
      "Sagantaa Walhubannoo hojii waliin hojjachuu ATSTO ,WDMSH fi MMDWSSH walii mallatteessuu",
      "Agarsiisni Tekinoloojii fi Kalaqa Kaaffee Saayinsii, giddu gala Kaaffee Saayinsii Adaamaatti baname.",
      "Conformity Assessment activities testing inspection and certification",
      "Daayirektoreetiin Qabeenya kalaqa Sammuu Abbaa Taayitichaa giddu gala dandeetti kalaqaa fi leenjii Magaalaa Buraayyuutti hundeeffame",
      "Pirojektii deggarsa sheedii harka-qalleeyyii, kutaa 6(jaha)qabu eebbifame", "Sagantaan agarsiisaa hojii kalaqaalee naannoo Oromiyaa Galmaa Giddugalaa aadaa Oromootti gaggeeffamaa jira"
  ];
  let index = 0;
  setInterval(() => {
      h1Element.textContent = textArray[index];
      index = (index + 1) % textArray.length;
  }, 3000); // Change text every 3000 milliseconds (3 seconds)
}
// Call the function to start changing text
changeText();


document.querySelectorAll('.slider_button_trigger').forEach(button => {
  button.addEventListener('click', function() {
      const slider = this.getAttribute('data-slider');

      document.querySelectorAll('.slider_imgContainer').forEach(container => {
          container.style.left = getSliderPosition(slider);
      });

      document.querySelectorAll('.slider_img').forEach(img => {
          img.style.width = '240px';
          img.style.height = '150px';
          img.style.filter = 'saturate(100%)';
      });

      document.querySelectorAll('.slider_button').forEach(btn => {
          btn.style.width = '240px';
          btn.style.height = '150px';
          img.style.filter = 'saturate(100%)';
      });
  });
});

// Add this part to change width and height when the image is clicked
document.querySelectorAll('.slider_img').forEach(img => {
  img.addEventListener('click', function() {
      this.style.width = '390px';
      this.style.height = '220px';
  });
});

function getSliderPosition(sliderId) {
  switch(sliderId) {
      case 'slider1': return '60%';
      case 'slider2': return '40%';
      case 'slider3': return '20%';
      case 'slider4': return '0%';
      case 'slider5': return '-20%';
      case 'slider6': return '-40%';
      case 'slider7': return '-60%';
  }
}
