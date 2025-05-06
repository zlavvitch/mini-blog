export function createLocalStorageAdapter<T>(key: string) {
  let listeners: (() => void)[] = [];

  const notify = () => {
    listeners.forEach((listener) => listener());
  };

  return {
    getAll(): T[] {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : [];
    },
    setAll(data: T[]) {
      localStorage.setItem(key, JSON.stringify(data));
      notify();
    },
    add(item: T) {
      const items = this.getAll();
      this.setAll([...items, item]);
    },
    remove(predicate: (item: T) => boolean) {
      const filtered = this.getAll().filter((item) => !predicate(item));
      this.setAll(filtered);
    },
    update(predicate: (item: T) => boolean, updater: (item: T) => T) {
      const updated = this.getAll().map((item) =>
        predicate(item) ? updater(item) : item
      );
      this.setAll(updated);
    },
    find(predicate: (item: T) => boolean): T | undefined {
      return this.getAll().find(predicate);
    },
    exists(predicate: (item: T) => boolean): boolean {
      return this.getAll().some(predicate);
    },
    subscribe(listener: () => void) {
      listeners.push(listener);
      return () => {
        listeners = listeners.filter((l) => l !== listener);
      };
    },
  };
}


// return {
//   getAll(): T[] {
//     const raw = localStorage.getItem(key);
//     return raw ? JSON.parse(raw) : [];
//   },

//   setAll(data: T[]) {
//     localStorage.setItem(key, JSON.stringify(data));
//   },

//   add(item: T) {
//     const current = this.getAll();
//     this.setAll([...current, item]);
//   },

//   update(predicate: (item: T) => boolean, updater: (item: T) => T) {
//     const updated = this.getAll().map((item) =>
//       predicate(item) ? updater(item) : item
//     );
//     this.setAll(updated);
//   },

//   remove(predicate: (item: T) => boolean) {
//     const filtered = this.getAll().filter((item) => !predicate(item));
//     this.setAll(filtered);
//   },

//   find(predicate: (item: T) => boolean): T | undefined {
//     return this.getAll().find(predicate);
//   },

//   exists(predicate: (item: T) => boolean): boolean {
//     return this.getAll().some(predicate);
//   },
// };