const REQUIRED_KEYS = ["posts", "comments", "reactions"];

export function initLocalStorage() {
  REQUIRED_KEYS.forEach((key) => {
    const existing = localStorage.getItem(key);

    if (!existing) {
      localStorage.setItem(key, JSON.stringify([]));
    }
  });
}
