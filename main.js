// Feedback Scroller
const scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);

    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

// Header scroll
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 80) {
    document.querySelector(".header").style.position = "sticky";
    document.querySelector(".header").style.background = "#0B1F17";
    document.querySelector(".section-banner").style.marginTop = "79px";
  } else {
    document.querySelector(".header").style.background = "transparent";
  }
}

//Toggle faqs
document.addEventListener("DOMContentLoaded", function () {
  const toggleBtns = document.querySelectorAll(".toggle-btn");
  const contents = document.querySelectorAll(".faq-item-content");
  const faqItemsTitles = document.querySelectorAll(".faq-item-title");

  toggleBtns.forEach(function (btn, index) {
    btn.addEventListener("click", function () {
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
      title.style.color = "#04B14E";
      toggleBtn.style.background =
        "linear-gradient(47deg, #028E3E 19.8%, #23F07B 90.38%)";
      setTimeout(function () {
        content.style.opacity = "1";
      }, 0);
    } else {
      content.style.opacity = "0";
      title.style.color = "white";
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
      inActiveSVGs.forEach(function (svg) {
        svg.classList.remove("hidden");
      });
    } else {
      activeSVG.classList.remove("hidden");
      inActiveSVGs.forEach(function (svg) {
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

menuToggle.onclick = function () {
  dropdownMenu.classList.toggle("open");
  const isOpen = dropdownMenu.classList.contains("open");

  if (isOpen) {
    menuBtn.classList.add("hidden");
    cancelBtn.classList.remove("hidden");
    document.querySelector(".navbar").style.background = "#0C1011";
  } else {
    menuBtn.classList.remove("hidden");
    cancelBtn.classList.add("hidden");
    document.querySelector(".navbar").style.background = "unset";
  }
};

//Footer sub menu
function toggleFirstSubMenu() {
  var subMenu = document.getElementById("footerFirstSubMenu");
  subMenu.classList.toggle("show");
}
function toggleSecondSubMenu() {
  var subMenu = document.getElementById("footerSecondSubMenu");
  subMenu.classList.toggle("show");
}
function toggleEndSubMenu() {
  var subMenu = document.getElementById("footerEndSubMenu");
  subMenu.classList.toggle("show");
}

// Stack Scroll
(function (o, i) {
  typeof exports == "object" && typeof module < "u"
    ? i(exports)
    : typeof define == "function" && define.amd
    ? define(["exports"], i)
    : ((o = typeof globalThis < "u" ? globalThis : o || self), i((o.aat = {})));
})(this, function (o) {
  "use strict";
  function i(s, e, t) {
    return Math.min(Math.max(s, e), t);
  }
  function l({ from: s, to: e, percentage: t, unit: n }) {
    return s + (e - s) * t + (n || "");
  }
  const a = {
    offsetBottom: 0,
    offsetTop: 0,
    offsetRight: 0,
    offsetLeft: 0,
    addWrapper: !1,
    wrapperClass: "",
    container: document.documentElement,
  };
  class c {
    static Container(e = document.documentElement) {
      return new h(e);
    }
    static Element(e, t) {
      return new d(e, { ...a, ...t });
    }
    onScroll(e) {
      (this._handler = e), this._onScroll();
    }
  }
  class h extends c {
    constructor(e) {
      super(),
        (this._container = e),
        (e === document.documentElement ? window : e).addEventListener(
          "scroll",
          this._onScroll.bind(this)
        );
    }
    _onScroll() {
      const e = this._container.scrollTop,
        t = this._container.scrollHeight - this._container.clientHeight,
        n = i(e / t, 0, 1) || 0,
        r = this._container.scrollLeft,
        f = this._container.scrollWidth - this._container.clientWidth,
        _ = i(r / f, 0, 1) || 0;
      this._handler &&
        typeof this._handler == "function" &&
        requestAnimationFrame(() =>
          this._handler({ percentageY: n, percentageX: _ })
        );
    }
  }
  class d extends c {
    constructor(e, t) {
      super(),
        (this._element = e),
        (this._options = t),
        (this._lastPercentageY = null),
        (this._lastPercentageX = null),
        this._options.addWrapper && this._addWrapper(),
        (this._options.container === document.documentElement
          ? window
          : this._options.container
        ).addEventListener("scroll", this._onScroll.bind(this)),
        requestAnimationFrame(() => this._onScroll());
    }
    _addWrapper() {
      (this._wrapper = document.createElement("div")),
        this._options.wrapperClass &&
          this._wrapper.classList.add(this._options.wrapperClass),
        this._element.parentNode.insertBefore(this._wrapper, this._element),
        this._wrapper.appendChild(this._element);
    }
    get _containerClientHeight() {
      return this._options.container === window
        ? window.innerHeight
        : this._options.container.clientHeight;
    }
    get _containerClientWidth() {
      return this._options.container === window
        ? window.innerWidth
        : this._options.container.clientWidth;
    }
    get _elRectRelativeToContainer() {
      const t = (
        this._options.addWrapper ? this._wrapper : this._element
      ).getBoundingClientRect();
      if (this._options.container === document.documentElement) return t;
      const n = this._options.container.getBoundingClientRect();
      return {
        width: t.width,
        height: t.width,
        left: t.left - n.left,
        top: t.top - n.top,
        right: t.right - n.right,
        bottom: t.bottom - n.bottom,
      };
    }
    getOffsetValue(e) {
      const t = `offset${e}`;
      return typeof this._options[t] == "function"
        ? this._options[t]()
        : this._options[t];
    }
    get _offsetBottom() {
      return this.getOffsetValue("Bottom");
    }
    get _offsetTop() {
      return this.getOffsetValue("Top");
    }
    get _offsetLeft() {
      return this.getOffsetValue("Left");
    }
    get _offsetRight() {
      return this.getOffsetValue("Right");
    }
    _calculatePercentageY() {
      const e = this._elRectRelativeToContainer,
        t = this._containerClientHeight - this._offsetBottom,
        n = this._offsetTop,
        r = t - n;
      return i((t - e.top) / r, 0, 1);
    }
    _calculatePercentageX() {
      const e = this._elRectRelativeToContainer,
        t = this._containerClientWidth - this._offsetRight,
        n = this._offsetLeft,
        r = t - n;
      return i((t - e.left) / r, 0, 1);
    }
    _onScroll() {
      const e = this._calculatePercentageY(),
        t = this._calculatePercentageX();
      this._handler &&
        typeof this._handler == "function" &&
        (this._lastPercentageY !== e || this._lastPercentageX !== t) &&
        requestAnimationFrame(() =>
          this._handler({ percentageY: e, percentageX: t })
        ),
        (this._lastPercentageY = e),
        (this._lastPercentageX = t);
    }
  }
  (o.ScrollObserver = c),
    (o.valueAtPercentage = l),
    Object.defineProperty(o, Symbol.toStringTag, { value: "Module" });
});

const { ScrollObserver, valueAtPercentage } = aat;

const cardsContainer = document.querySelector(".cards");
const cards = document.querySelectorAll(".card");
cardsContainer.style.setProperty("--cards-count", cards.length);
cardsContainer.style.setProperty("--card-height", `${cards[0].clientHeight}px`);
Array.from(cards).forEach((card, index) => {
  const offsetTop = 20 + index * 12;
  card.style.paddingTop = `${offsetTop}px`;
  if (index === cards.length - 1) {
    return;
  }
  const toScale = 1 - (cards.length - 1 - index) * 0.05;
  const nextCard = cards[index + 1];
  const cardInner = card.querySelector(".card__inner");
  ScrollObserver.Element(nextCard, {
    offsetTop,
    offsetBottom: window.innerHeight - card.clientHeight,
  }).onScroll(({ percentageY }) => {
    cardInner.style.scale = valueAtPercentage({
        from: 1,
        to: toScale,
        percentage: percentageY,
      });
    cardInner.style.filter = `blur(${valueAtPercentage({
        from: 0,
        to: 3,
        percentage: percentageY,
      })}px)`;
    console.log(valueAtPercentage({
      from: 1,
      to: 0,
      percentage: percentageY,
    }));
  });
});
