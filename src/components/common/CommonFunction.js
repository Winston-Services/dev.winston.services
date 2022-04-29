let timeout;
export function debounce(callback, delay) {
  clearTimeout(timeout);
  timeout = setTimeout(callback, delay);
}
