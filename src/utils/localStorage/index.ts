export class LocalStorage {
  static set<T>(key: string, value: T): void {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      throw new Error('Ошибка при установке в LocalStorage');
    }
  }

  static get<T>(key: string): T {
    try {
      const value = window.localStorage.getItem(key);

      return value ? JSON.parse(value) : null;
    } catch {
      throw new Error('Ошибка при чтении из LocalStorage');
    }
  }
}
