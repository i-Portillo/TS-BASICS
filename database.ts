interface Database<T, K> {
  get(id: K): T;
  set(id: K, value: T): void
}

interface Persistable {
  saveToString(): string;
  restoreFromString(storedState: string): void;
}

type DBKeyType = string | number | symbol

class InMemoryDatabase<T, K extends DBKeyType> implements Database<T, K> {
  protected db: Record<K, T> = {} as Record<K, T>;
  get(id: K): T {
    return this.db[id];
  }
  set(id: K, value: T): void {
    this.db[id] = value;
  }
}

class PresistentMemoryDB<T, K extends DBKeyType> extends InMemoryDatabase<T, K> implements Persistable {
  saveToString(): string {
    return JSON.stringify(this.db);
  }
  restoreFromString(storedState: string): void {
    this.db = JSON.parse(storedState);
  }
}

const myDB = new PresistentMemoryDB<number, string>();
myDB.set("5", 2);
// myDB.db["foo"] = "baz";
console.log(myDB.get("foo"));