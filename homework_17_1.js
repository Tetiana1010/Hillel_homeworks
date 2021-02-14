

let currentBlock = null;

blocks = []

const step = 50;

window.addEventListener('load', function(){

  class Box {
    constructor(options){ 
      this.$el = document.createElement("div"); // <body><div></div></body>
      this.$el.setAttribute("class", "box"); // <div class="box"></div>

      this.$el.style.top = Math.random() * window.innerHeight/2 + "px";
      this.$el.style.left = Math.random() * window.innerWidth/2 + "px";

      this.$el.style.width = options.size + 'px';
      this.$el.style.height = options.size + 'px';
      this.$el.style.background = options.color;
      this.$el.style.zIndex = 1;

      document.body.appendChild(this.$el).innerHTML; // <body><div class="box"></div></body>

      const self = this;
  
      this.$el.addEventListener('contextmenu', function (e) {
        e.preventDefault() 
        
        currentBlock = self
        showBlockMenu(e.pageX, e.pageY)
      });

      document.addEventListener('click', function () {
        currentBlock = null
        hideBlockMenu() 
      });
    }
  
    goLeft() {
      this.$el.style.left = parseInt(this.$el.style.left) - step + 'px';
    }

    goRight() {
      this.$el.style.left = parseInt(this.$el.style.left) + step + 'px';
    }

    goDown() {
      this.$el.style.top = parseInt(this.$el.style.top) + step + 'px';
    }

    jump() {
      this.$el.style.top = parseInt(this.$el.style.top) - step*2 + 'px';
      setTimeout( () => {
        this.$el.style.top = parseInt(this.$el.style.top) + step*2 + 'px';
      }, 500)
    }

    changeColor() {
      this.$el.style.background = `rgb(${
        Math.random() * 255
        },${
          Math.random() * 255
        },${
          Math.random() * 255
        }
      )`;
    }
  }

  const blockMenu = document.querySelector("#blockMenu"); 

  function showBlockMenu(x, y) { 
    blockMenu.style.display = 'block';
    blockMenu.style.left = x + 'px';
    blockMenu.style.top = y + 'px';
  }

  function hideBlockMenu() {
    blockMenu.style.display = 'none'; 
  }

  const jumpLi = blockMenu.querySelector("#jump")
  const moveLeftLi = blockMenu.querySelector("#moveLeft")
  const moveRightLi = blockMenu.querySelector("#moveRight")
  const moveDownLi = blockMenu.querySelector("#moveDown")
  const changeColorLi = blockMenu.querySelector("#changeColor")

  jumpLi.addEventListener("click", function () {currentBlock.jump()})
  moveLeftLi.addEventListener("click", function () {currentBlock.goLeft()})
  moveRightLi.addEventListener("click", function () {currentBlock.goRight()})
  moveDownLi.addEventListener("click", function () {currentBlock.goDown()})
  changeColorLi.addEventListener("click", function () {currentBlock.changeColor()})

  const docMenu = document.querySelector("#docMenu");

  function showDocMenu(x, y) {
    if (currentBlock) return
    docMenu.style.display = 'block';
    docMenu.style.left = x + 'px';
    docMenu.style.top = y + 'px';
  }

  function hideDocMenu() {
    docMenu.style.display = 'none';
  }

  document.addEventListener("contextmenu", (e) => {
    e.preventDefault()
    showDocMenu(e.pageX, e.pageY)
  })

  document.addEventListener("click", () => {
    hideDocMenu()
  })

  const addLi = document.querySelector("#addCharacter")
  const removeLi = document.querySelector("#removeCharacter")

  addLi.addEventListener("click",  () => {
    blocks.push(new Box({
      size: 100, 
      color: 'red',
    }));
  });
  
  removeLi.addEventListener("click", ()  => {
    const lastBlock = blocks.pop();
    lastBlock.$el.remove();
  });

});


