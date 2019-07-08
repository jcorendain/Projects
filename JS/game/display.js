const Display = function(canvas) {
    this.buffer = document.createElement("canvas").getContext("2d"),
    this.context = canvas.getContext("2d");

    this.drawRectangle = function(x, y, width, height, color) {
        this.buffer.fillStyle = color;
        this.buffer.fillRect(Math.floor(x), Math.floor(y), width, height)

    };

    this.fill = function(color){

        this.buffer.fillStyle = color;
        this.buffer.fillRect(0, 0, this.buffer.canvas.width, this.buffer.canvas,height)



    }

}  