import { TextEncoder, TextDecoder } from "util";

Object.defineProperty(globalThis, "TextEncoder", {
  value: TextEncoder,
  configurable: true,
});

Object.defineProperty(globalThis, "TextDecoder", {
  value: TextDecoder,
  configurable: true,
});
