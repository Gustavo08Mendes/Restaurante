<template>
    <div
      class="resizable-div"
      :style="{ width: divWidth + 'px', height: divHeight + 'px' }"
      @mousedown="startDrag"
    >
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ipsa, neque fugiat ratione dolore dolorum beatae culpa</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ipsa, neque fugiat ratione dolore dolorum beatae culpa</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ipsa, neque fugiat ratione dolore dolorum beatae culpa</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ipsa, neque fugiat ratione dolore dolorum beatae culpa</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ipsa, neque fugiat ratione dolore dolorum beatae culpa</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ResizableDiv',
    data() {
      return {
        isDragging: false,
        startX: 0,
        startY: 0,
        divWidth: 200,
        divHeight: 200,
      };
    },
    methods: {
      startDrag(event) {
        this.isDragging = true;
        this.startX = event.clientX;
        this.startY = event.clientY;
  
        document.addEventListener('mousemove', this.dragMove);
        document.addEventListener('mouseup', this.dragEnd);
      },
      dragMove(event) {
        if (this.isDragging) {
          const newWidth = this.divWidth + (event.clientX - this.startX);
          const newHeight = this.divHeight + (event.clientY - this.startY);
  
          this.divWidth = Math.max(50, newWidth); // Limitar a largura mínima
          this.divHeight = Math.max(50, newHeight); // Limitar a altura mínima
  
          this.startX = event.clientX;
          this.startY = event.clientY;
        }
      },
      dragEnd() {
        this.isDragging = false;
  
        document.removeEventListener('mousemove', this.dragMove);
        document.removeEventListener('mouseup', this.dragEnd);
      },
    },
  };
  </script>
  
  <style scoped>
  .resizable-div {
    background-color: lightblue;
    position: absolute;
    overflow: hidden;
    resize: both; /* Adiciona a borda de redimensionamento nativa do navegador */
    user-select: none; /* Evita seleção de texto durante o redimensionamento */
    cursor: grab;
  }
  
  .resizable-div:active {
    cursor: grabbing;
  }
  </style>
  