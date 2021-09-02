class CanvasUtil {

  /**
   * Rotate the canvas around its own center in degrees.
   */
  public static rotateContext(canvas: HTMLCanvasElement, rotation: number) {
    // getContext always returns the same context instance
    const context = canvas.getContext('2d');
    if (context === null) {
      return;
    }
    context.translate(canvas.width / 2, canvas.height / 2);
    context.rotate(rotation * Math.PI / 180);
    context.translate(canvas.width / -2, canvas.height / -2);
  }

}

export default CanvasUtil;
