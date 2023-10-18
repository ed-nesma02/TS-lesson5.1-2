interface User {
  id: number;
  firstname: string;
  surname: string;
  age: number;
}

export enum sortedList {
  increase = 'increase',
  decreasing = 'decreasing',
}

export abstract class Users<T extends User> {
  userList: T[] = [];

  add(user: T): void {
    this.userList.push(user);
  }

  remove(id: number): boolean {
    const user = this.get(id);
    if(user){
      const index = this.userList.indexOf(user);
      this.userList.splice(index, 1);
      return true;
    }
    return false;
  }

  get(id: number): T | null {
    return this.userList.find((user) => user.id === id) ?? null;
  }

  private increase(a: T, b: T): number{
    if (a.id > b.id) return 1;
    if (a.id == b.id) return 0;
    return -1;
  }

  private decreasing(a: T, b: T): number{
    if (a.id < b.id) return 1;
    if (a.id == b.id) return 0;
    return -1;
  }

  sorted(typeSort: sortedList): T[] {
    if(typeSort === 'increase'){
      return this.userList.sort(this.increase);
    }
    return this.userList.sort(this.decreasing);
  }
}
