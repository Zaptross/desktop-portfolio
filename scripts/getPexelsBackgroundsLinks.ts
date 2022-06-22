import { createClient, PhotosWithTotalResults } from 'pexels';
import { config } from 'dotenv';
import { writeFileSync } from 'fs';

config({ path: '.env.local' });

function getEnv(name: string) {
    return process.env[name] ?? '';
}

async function main() {
    const key = getEnv('PEXELS_API_KEY');
    if (!key) {
        console.error('PEXELS_API_KEY is not set');
        process.exit(1);
    }

    const client = createClient(key);

    const response = await client.photos.search({
        query: 'nature',
        orientation: 'landscape',
        sort: 'popular',
        page: 1,
        per_page: 80,
    });

    if ((response as PhotosWithTotalResults).photos?.length) {
        writeFileSync(
            './public/assets/pexels-backgrounds.json',
            JSON.stringify((response as PhotosWithTotalResults).photos)
        );
    }
}

void main();
