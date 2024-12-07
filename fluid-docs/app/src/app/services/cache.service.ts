import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CacheService {
  _cacheVersion = 1;
  _cacheId = 'fluid-cache';
  _cacheName;

  constructor() {
    this._cacheName = `${this._cacheId} (v-${this._cacheVersion})`;
  }

  async has() {
    return await caches.has(this._cacheName);
  }

  async getData(url: string, refreshCache: () => void) {
    const cachedData = await this.getCachedData(this._cacheName, url);

    // Retrieved cached data
    if (cachedData) {
      return cachedData;
    } else {
      refreshCache();
    }
  }

  async setData(url: string) {
    // Delete cache
    await this.deleteOldCaches(this._cacheName);

    // Fetching fresh data
    const cacheStorage = await caches.open(this._cacheName);
    await cacheStorage?.add(url);
    return await this.getCachedData(this._cacheName, url);
  }

  // Get data from the cache.
  async getCachedData(cacheName, url) {
    const cacheStorage = await caches.open(cacheName);
    const cachedResponse = await cacheStorage.match(url);

    if (!cachedResponse || !cachedResponse.ok) {
      return false;
    }

    try {
      console.log(cachedResponse);
      return await cachedResponse.json();
    } catch (e) {
      console.log('Cache Error', e);
      return false;
    }
  }

  // Delete any old caches to respect user's disk space.
  async deleteOldCaches(currentCache) {
    const keys = await caches.keys();

    for (const key of keys) {
      const isOurCache = key.startsWith(this._cacheName);
      if (currentCache === key || !isOurCache) {
        continue;
      }
      caches.delete(key);
    }
  }
}
