import { Readable, Writable, Transform } from "node:stream";

class MultiplyByTenStream extends Writable {
  _write(chunk, encoding, callback) {
    console.log(Number(chunk.toString()) * 10);
    callback();
  }
}

new OneToHundredStreams()
  .pipe(new InverseNumberStream())
  .pipe(new MultiplyByTenStream());
