// Global Variables
// let colorsArr = [];
// UI Class
class UI {
  static pageControl() {
    let page1 = document.getElementById("page-1");
    let page2 = document.getElementById("page-2");
    let page3 = document.getElementById("page-3");
    let page4 = document.getElementById("page-4");
    // let page5 = document.getElementById("page-5");
    let page6 = document.getElementById("page-6");
    // let page7 = document.getElementById("page-7");
    let btn = document.getElementById("refresh-colors");
    let delbtn = document.getElementById("delete-colors");
    let sidebar = document.getElementById("sidebar-links");
    let copyinput = document.getElementById("hex-copy-input");
    sidebar.addEventListener("click", (e) => {
      if (e.target.classList.contains("page-1")) {
        page1.classList.add("page-up");
        page2.classList.remove("page-up");
        page3.classList.remove("page-up");
        page4.classList.remove("page-up");
        // page5.classList.remove("page-up");
        page6.classList.remove("page-up");
        // page7.classList.remove("page-up");
        btn.classList.remove("div-hide");
        delbtn.classList.add("div-hide");
        copyinput.classList.remove("div-hide");
      } else if (e.target.classList.contains("page-2")) {
        page1.classList.remove("page-up");
        page2.classList.add("page-up");
        page3.classList.remove("page-up");
        page4.classList.remove("page-up");
        // page5.classList.remove("page-up");
        page6.classList.remove("page-up");
        // page7.classList.remove("page-up");
        btn.classList.add("div-hide");
        delbtn.classList.add("div-hide");
        copyinput.classList.add("div-hide");
      } else if (e.target.classList.contains("page-3")) {
        page1.classList.remove("page-up");
        page2.classList.remove("page-up");
        page3.classList.add("page-up");
        page4.classList.remove("page-up");
        // page5.classList.remove("page-up");
        page6.classList.remove("page-up");
        // page7.classList.remove("page-up");
        btn.classList.add("div-hide");
        delbtn.classList.add("div-hide");
        copyinput.classList.add("div-hide");
      } else if (e.target.classList.contains("page-4")) {
        page1.classList.remove("page-up");
        page2.classList.remove("page-up");
        page3.classList.remove("page-up");
        page4.classList.add("page-up");
        // page5.classList.remove("page-up");
        page6.classList.remove("page-up");
        // page7.classList.remove("page-up");
        btn.classList.add("div-hide");
        delbtn.classList.add("div-hide");
        copyinput.classList.add("div-hide");
      } else if (e.target.classList.contains("page-5")) {
        page1.classList.remove("page-up");
        page2.classList.remove("page-up");
        page3.classList.remove("page-up");
        page4.classList.remove("page-up");
        // page5.classList.add("page-up");
        page6.classList.remove("page-up");
        // page7.classList.remove("page-up");
        btn.classList.add("div-hide");
        delbtn.classList.add("div-hide");
        copyinput.classList.add("div-hide");
      } else if (e.target.classList.contains("page-6")) {
        page1.classList.remove("page-up");
        page2.classList.remove("page-up");
        page3.classList.remove("page-up");
        page4.classList.remove("page-up");
        // page5.classList.remove("page-up");
        page6.classList.add("page-up");
        // page7.classList.remove("page-up");
        btn.classList.add("div-hide");
        delbtn.classList.remove("div-hide");
        copyinput.classList.remove("div-hide");
      } else if (e.target.classList.contains("page-7")) {
        page1.classList.remove("page-up");
        page2.classList.remove("page-up");
        page3.classList.remove("page-up");
        page4.classList.remove("page-up");
        // page5.classList.remove("page-up");
        page6.classList.remove("page-up");
        // page7.classList.add("page-up");
        btn.classList.add("div-hide");
        delbtn.classList.add("div-hide");
        copyinput.classList.remove("div-hide");
      }
    });
  }
  static addCards() {
    for (let i = 0; i < 15; i++) {
      UI.appendCard("page-1", "new");
    }
  }

  static sideBarHandler() {
    let burgerButton = document.getElementById("burger");
    burgerButton.addEventListener("click", () => {
      let sidebar = document.getElementById("mobile-sidebar");
      sidebar.classList.toggle("sidebar-hide");
    });
  }
  static appendCard(pageNo, value, rr, gg, bb) {
    let page = document.getElementById(pageNo);
    page.appendChild(Card.cardGenerator(value, rr, gg, bb));
  }
  static refreshColors(value, rr, gg, bb) {
    let page = document.getElementById("page-1");
    page.innerHTML = "";
    for (let i = 0; i < 15; i++) {
      UI.appendCard("page-1", value, rr, gg, bb);
    }
  }

  static CardListener() {
    let page = document.getElementById("page-1");
    let page2 = document.getElementById("page-6");

    let rr, gg, bb;
    page.addEventListener("click", (e) => {
      if (e.target.classList.contains("switchable")) {
        rr = e.target.getAttribute(`data-r`);
        gg = e.target.getAttribute(`data-g`);
        bb = e.target.getAttribute(`data-b`);
        UI.refreshColors("similar", rr, gg, bb);
      }
      if (e.target.classList.contains("heart")) {
        e.target.style.color = "red";
        rr = e.target.parentElement.parentElement.getAttribute(`data-r`);
        gg = e.target.parentElement.parentElement.getAttribute(`data-g`);
        bb = e.target.parentElement.parentElement.getAttribute(`data-b`);
        SavedColors.addToStorage(rr, gg, bb);
        let page = document.getElementById("page-6");
        page.innerHTML = "";
        SavedColors.showSavedColors();
      }
      if (e.target.classList.contains("download")) {
        rr = e.target.parentElement.parentElement.getAttribute(`data-r`);
        gg = e.target.parentElement.parentElement.getAttribute(`data-g`);
        bb = e.target.parentElement.parentElement.getAttribute(`data-b`);
        let hex = Algo.RGBToHex(parseInt(rr), parseInt(gg), parseInt(bb));
        let input = document.getElementById("hex-copy-input");
        input.value = hex;
        input.select();
        document.execCommand("copy");
      }
    });
    page2.addEventListener("click", (e) => {
      if (e.target.classList.contains("download")) {
        rr = e.target.parentElement.parentElement.getAttribute(`data-r`);
        gg = e.target.parentElement.parentElement.getAttribute(`data-g`);
        bb = e.target.parentElement.parentElement.getAttribute(`data-b`);
        let hex = Algo.RGBToHex(parseInt(rr), parseInt(gg), parseInt(bb));
        let input = document.getElementById("hex-copy-input");
        input.value = hex;
        input.select();
        document.execCommand("copy");
      }
    });
  }
}
class Card {
  static cardGenerator(value, rr, gg, bb) {
    let colorArr = [];
    let card = document.createElement("div");
    card.classList.add("card-outer");
    card.classList.add("switchable");
    card.innerHTML = `<div class="card-inner">
    <i class="fas fa-heart heart" id="heart"></i>
    <i class="fas fa-download download" id = "download-icon"></i>
    </div>`;
    if (value == "new") {
      colorArr = ColorGenerator.randomColor();
    } else if (value == "similar") {
      colorArr = ColorGenerator.similarColor(rr, gg, bb);
    } else if (value == "saved") {
      colorArr = [parseInt(rr), parseInt(gg), parseInt(bb)];
    }
    let r = colorArr[0];
    let g = colorArr[1];
    let b = colorArr[2];
    console.log(colorArr);
    card.style.backgroundColor = Algo.RGBToHex(r, g, b);
    card.dataset.r = r;
    card.dataset.g = g;
    card.dataset.b = b;
    return card;
  }

  static heart() {}
}
class ColorGenerator {
  static randomColor() {
    let r = Math.floor(Math.random() * 255 + 1);
    let g = Math.floor(Math.random() * 255 + 1);
    let b = Math.floor(Math.random() * 255 + 1);
    return [r, g, b];
  }
  static copybtn() {}

  static similarColor(r, g, b) {
    if (Algo.addOrSub() % 2 == 0) {
      r = parseInt(r) + parseInt(Math.floor(Math.random() * 30 + 10));
    } else {
      parseInt(r) - parseInt(Math.floor(Math.random() * 30 + 10));
    }
    if (Algo.addOrSub() % 2 == 0) {
      g = parseInt(g) + parseInt(Math.floor(Math.random() * 30 + 10));
    } else {
      g = parseInt(g) - parseInt(Math.floor(Math.random() * 30 + 10));
    }
    if (Algo.addOrSub() % 2 == 0) {
      b = parseInt(b) + parseInt(Math.floor(Math.random() * 30 + 10));
    } else {
      b = parseInt(b) - parseInt(Math.floor(Math.random() * 30 + 10));
    }
    if (r > 255) {
      r = 255;
    }
    if (r < 0) {
      r = 0;
    }
    if (g > 255) {
      g = 255;
    }
    if (g < 0) {
      g = 0;
    }
    if (b > 255) {
      b = 255;
    }
    if (b < 0) {
      b = 0;
    }
    return [parseInt(r), parseInt(g), parseInt(b)];
  }
}
class Algo {
  static RGBToHex(r, g, b) {
    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);

    if (r.length == 1) r = "0" + r;
    if (g.length == 1) g = "0" + g;
    if (b.length == 1) b = "0" + b;

    return "#" + r + g + b;
  }

  static addOrSub() {
    return Math.floor(Math.random() * 10 + 1);
  }
}
class SavedColors {
  static getColors() {
    let colors;
    if (localStorage.getItem("colors") === null) {
      colors = [];
    } else {
      colors = JSON.parse(localStorage.getItem("colors"));
    }
    return colors;
  }

  static addToStorage(rr, gg, bb) {
    let colors = SavedColors.getColors();
    colors.push([rr, gg, bb]);
    localStorage.setItem("colors", JSON.stringify(colors));
  }

  static showSavedColors() {
    let colors = SavedColors.getColors();
    colors.forEach((element) => {
      let rr = element[0];
      let gg = element[1];
      let bb = element[2];
      let page = document.getElementById("page-6");
      let card = Card.cardGenerator("saved", rr, gg, bb);
      page.appendChild(card);
    });
  }
  static deleteColors() {
    localStorage.removeItem("colors");
    let page = document.getElementById("page-6");
    page.innerHTML = "";
  }
}
class Hex {
  static getColor() {
    let input = document.getElementById("input-hex");
    let div = document.getElementById("color-div");
    let hex = input.value;
    console.log(hex);
    div.style.backgroundColor = `#${hex}`;
  }
}
class RGB {
  static getColor() {
    let inputr = document.getElementById("input-r").value;
    let inputg = document.getElementById("input-g").value;
    let inputb = document.getElementById("input-b").value;
    let div = document.getElementById("color-div-rgb");
    div.style.backgroundColor = `rgb(${inputr},${inputg},${inputb})`;
  }
}
// EVENTS

// Handles Mobile sidebar

UI.sideBarHandler();

// Handles page Z-index

UI.pageControl();

// Adds Cards to page 1

UI.addCards();

//Refresh Color Button event listener

document
  .getElementById("refresh-colors")
  .addEventListener("click", UI.refreshColors.bind(this, "new"));

// Similar Color Event Listener
UI.CardListener();
// Saved Colors
SavedColors.showSavedColors();

// "Delete" Event Listener
document
  .getElementById("delete-colors")
  .addEventListener("click", SavedColors.deleteColors);
// Get color by hex
document.getElementById("convert-btn").addEventListener("click", Hex.getColor);
// Get color by RGB
document
  .getElementById("convert-btn-rgb")
  .addEventListener("click", RGB.getColor);
// Picker Javascript

const pickr = Pickr.create({
  el: ".color-picker",
  theme: "classic", // or 'monolith', or 'nano'

  swatches: [
    "rgba(244, 67, 54, 1)",
    "rgba(233, 30, 99, 0.95)",
    "rgba(156, 39, 176, 0.9)",
    "rgba(103, 58, 183, 0.85)",
    "rgba(63, 81, 181, 0.8)",
    "rgba(33, 150, 243, 0.75)",
    "rgba(3, 169, 244, 0.7)",
    "rgba(0, 188, 212, 0.7)",
    "rgba(0, 150, 136, 0.75)",
    "rgba(76, 175, 80, 0.8)",
    "rgba(139, 195, 74, 0.85)",
    "rgba(205, 220, 57, 0.9)",
    "rgba(255, 235, 59, 0.95)",
    "rgba(255, 193, 7, 1)",
  ],

  components: {
    // Main components
    preview: true,
    opacity: true,
    hue: true,

    // Input / output Options
    interaction: {
      hex: true,
      rgba: true,
      hsla: true,
      hsva: true,
      cmyk: true,
      input: true,
      clear: true,
      save: false,
    },
  },
});

pickr.on("change", (color) => {
  let div = document.getElementById("div-pickr");
  console.log(color.toHEXA());
  let colorarray = color.toHEXA();
  let r = colorarray[0];
  let g = colorarray[1];
  let b = colorarray[2];
  div.style.backgroundColor = `#${r}${g}${b}`;
});
