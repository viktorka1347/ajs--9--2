export default class ArrayBufferConverter {
    load(buffer) {
      this.buffer = buffer;
    }
  
    toString() {
      const buffer = new Uint16Array(this.buffer);
      return [...buffer].map((item) => String.fromCharCode(item)).join('');
    }
  }