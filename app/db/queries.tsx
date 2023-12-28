'use server';

import { youtube } from '@googleapis/youtube';
import { sql } from '@vercel/postgres';
import {
  unstable_cache as cache,
  unstable_noStore as noStore,
} from 'next/cache';

let yt = youtube({
  version: 'v3',
  auth: process.env.YOUTUBE_API_KEY,
});

export async function getBlogViews() {
  if (!process.env.POSTGRES_URL) {
    return [];
  }

  noStore();
  let data = await sql`
    SELECT count
    FROM views
  `;

  return data.rows.reduce((acc, curr) => acc + Number(curr.count), 0);
}

export async function getViewsCount() {
  if (!process.env.POSTGRES_URL) {
    return [];
  }

  noStore();
  let data = await sql`
    SELECT slug, count
    FROM views
  `;

  return data.rows as { slug: string; count: number }[];
}

export const getPrimeYouTubeSubs = cache(
  async () => {
    let response = await yt.channels.list({
      id: ['UC8ENHE5xdFSwx71u3fDH5Xw'],
      part: ['statistics'],
    });

    let channel = response.data.items![0];
    return Number(channel?.statistics?.subscriberCount).toLocaleString();
  },
  ['primeagen-youtube-subs'],
  {
    revalidate: 3600,
  }
);

export const getTjYouTubeSubs = cache(
  async () => {
    let response = await yt.channels.list({
      id: ['UCd3dNckv1Za2coSaHGHl5aA'],
      part: ['statistics'],
    });

    let channel = response.data.items![0];
    return Number(channel?.statistics?.subscriberCount).toLocaleString();
  },
  ['teej-dv-youtube-subs'],
  {
    revalidate: 3600,
  }
);

export async function getGuestbookEntries() {
  if (!process.env.POSTGRES_URL) {
    return [];
  }

  noStore();
  let entries = await sql`
    SELECT id, body, created_by, updated_at
    FROM guestbook
    ORDER BY created_at DESC
    LIMIT 100
  `;
  return entries.rows;
}
