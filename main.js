// Feedback Scroller
const scrollers = document.querySelectorAll('.scroller');

if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
}

function addAnimation() {
    scrollers.forEach(scroller => {
        scroller.setAttribute('data-animated', true);

        const scrollerInner = scroller.querySelector('.scroller__inner');
        const scrollerContent = Array.from(scrollerInner.children);
        
        scrollerContent.forEach(item => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
        });
    });
}

// Header scroll
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 115) {
    document.querySelector(".header").style.background = "#0C1011"; 
  } else {
    document.querySelector(".header").style.background = "url('./assets/images/banner-bg.png')";
  }
}

//Toggle faqs
document.addEventListener("DOMContentLoaded", function() {
    const toggleBtns = document.querySelectorAll(".toggle-btn");
    const contents = document.querySelectorAll(".faq-item-content");
    const faqItemsTitles = document.querySelectorAll(".faq-item-title");
  
    toggleBtns.forEach(function(btn, index) {
      btn.addEventListener("click", function() {
        toggleContent(index);
        toggleSVG(btn, index);
      });
    });
  
    function toggleContent(index) {
        const content = contents[index];
        const title = faqItemsTitles[index];
        const toggleBtn = toggleBtns[index];
        if (content.style.display === "none" || content.style.display === "") {
            content.style.display = "block";
            title.style.color= "#04B14E";
            toggleBtn.style.background = "linear-gradient(47deg, #028E3E 19.8%, #23F07B 90.38%)";
            setTimeout(function() {
                content.style.opacity = "1";
            }, 0);
        }
        else {
            content.style.opacity = "0";
            title.style.color= "white";
            toggleBtn.style.background = "rgba(20, 160, 80, 0.21)";
            content.style.display = "none";
        }
    }
    function toggleSVG(btn, index) {
        const content = contents[index];
        const activeSVG = btn.querySelector(".active");
        const inActiveSVGs = btn.querySelectorAll(".in-active");
        
        if (content.style.display === "none" || content.style.display === "") {
            activeSVG.classList.add("hidden");
            inActiveSVGs.forEach(function(svg) {
                svg.classList.remove("hidden");
            });
        } else {
            activeSVG.classList.remove("hidden");
            inActiveSVGs.forEach(function(svg) {
                svg.classList.add("hidden");
            });
        }
    }
}); 

// Header menu
    const menuToggle = document.querySelector(".menu-toggle");
    const menuBtn = document.querySelector(".menu-btn");
    const cancelBtn = document.querySelector(".cancel-btn");
    const dropdownMenu = document.querySelector(".dropdown-menu");

    menuToggle.onclick = function() {
        dropdownMenu.classList.toggle("open");
        const isOpen = dropdownMenu.classList.contains("open");

        if(isOpen) {
            menuBtn.classList.add("hidden");
            cancelBtn.classList.remove("hidden");
        } else {
            menuBtn.classList.remove("hidden");
            cancelBtn.classList.add("hidden");
        }
    }

// Footer icon hover
let phoneISvg = document.querySelector('.phone-svg');
let phoneSvgActive = document.querySelector('.phone-svg-active');
let emailSvg = document.querySelector('.email-svg');
let emailSvgActive = document.querySelector('.email-svg-active');
let linkSvg = document.querySelector('.link-svg');
let linkSvgActive = document.querySelector('.link-svg-active');
let phoneInfo = document.querySelector('.phone-info');
let emailInfo = document.querySelector('.email-info');
let linkInfo = document.querySelector('.link-info');

phoneInfo.addEventListener('mouseover', function() {
    phoneISvg.classList.add('hidden');
    phoneSvgActive.classList.remove('hidden');
});
phoneInfo.addEventListener('mouseout', function() {
    phoneISvg.classList.remove('hidden');
    phoneSvgActive.classList.add('hidden');
});
emailInfo.addEventListener('mouseover', function() {
    emailSvg.classList.add('hidden');
    emailSvgActive.classList.remove('hidden');
});
emailInfo.addEventListener('mouseout', function() {
    emailSvg.classList.remove('hidden');
    emailSvgActive.classList.add('hidden');
});
linkInfo.addEventListener('mouseover', function() {
    linkSvg.classList.add('hidden');
    linkSvgActive.classList.remove('hidden');
});
linkInfo.addEventListener('mouseout', function() {
    linkSvg.classList.remove('hidden');
    linkSvgActive.classList.add('hidden');
});
