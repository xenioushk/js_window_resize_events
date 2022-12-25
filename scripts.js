class WindowResizer {
  // 1. Initialization
  constructor() {
    this.container = document.querySelector(".container")
    this.events()
  }

  // 2. Events.

  events() {
    window.addEventListener("resize", this.handleResizeScreen.bind(this))
  }

  // 3. Actions.

  handleResizeScreen() {
    var currentScreenSize = window.innerWidth
    this.container.removeAttribute("class")
    if (currentScreenSize >= 960) {
      // Large Size Screen
      console.log("Large screen")
      this.container.classList.add("container", "container--lg")
    } else if (window.innerWidth >= 768 && window.innerWidth <= 959) {
      // Tablet Horizontal Size Screen
      console.log("Tablet Horizontalscreen")
      this.container.classList.add("container", "container--md")
    } else if (window.innerWidth >= 576 && window.innerWidth <= 767) {
      // Tablet Size Screen
      console.log("Tablet  screen")
      this.container.classList.add("container", "container--sm")
    } else {
      // Small Size Screen
      console.log("Small screen")
      this.container.classList.add("container")
    }
  }
}

// create an instance of WindowResizer class.

new WindowResizer()
