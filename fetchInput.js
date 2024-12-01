

import fetch from 'node-fetch';
import fs from 'fs/promises'; // Use promises version of fs

import dotenv from 'dotenv';
dotenv.config();
const day = process.argv[2];
const sessionCookie = process.env.SESSION_COOKIE;

const fetchInput = async () => {
    const response = await fetch(`https://adventofcode.com/2024/day/${day}/input`, {
        headers: { Cookie: `session=${sessionCookie}` },
    });

    if (!response.ok) {
        console.error('Failed to fetch input:', response.statusText);
        return;
    }

    const data = await response.text();
    await fs.writeFile(`./input/day${day}.txt`, data.trim());
    console.log(`Input for day ${day} saved.`);
};

fetchInput().catch((err) => console.error(err));

