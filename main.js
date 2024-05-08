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
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop >80) {
    document.querySelector(".header").style.position = "fixed";
    document.querySelector(".header").style.background = "#0B1F17"; 
    document.querySelector(".section-banner").style.marginTop = "79px";
  } else {
    document.querySelector(".header").style.background = "inherit";
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


//Footer sub menu
function toggleFirstSubMenu() {
    var subMenu = document.getElementById('footerFirstSubMenu');
    subMenu.classList.toggle('show');
}
function toggleSecondSubMenu() {
    var subMenu = document.getElementById('footerSecondSubMenu');
    subMenu.classList.toggle('show');
}
function toggleEndSubMenu() {
    var subMenu = document.getElementById('footerEndSubMenu');
    subMenu.classList.toggle('show');
}