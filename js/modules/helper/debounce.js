export default function debounce(callback, timer, ...args) {
  let timeout;

  function run() {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      callback(...args);
      timeout = undefined;
    }, timer);
  }

  return {
    run,
  };
}
