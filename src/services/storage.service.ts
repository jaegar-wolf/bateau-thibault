import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private storage: Storage | null = null;
  private items = [];

  constructor(private ionStorage: Storage) {
    this.init();
  }

  async init() {
    const storage = await this.ionStorage.create();
    this.storage = storage;
  }

  public set(key: string, value: any) {
    this.storage?.set(key, value);
  }

  public get(key: string) {
    return this.storage?.get(key);
  }

  public async getAll() {
    let keys: string[];
    const items = [];

    await this.storage.keys().then(res => {
      keys = res;
    });

    for (const key of keys) {
      const item = await this.get(key).then(res => res);
      items.push(item);

    }

    return items;
  }

  public del(key: string) {
    this.storage.remove(key);
  }
}
