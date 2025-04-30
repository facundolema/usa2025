import { error, type RequestHandler } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';

export const GET: RequestHandler = ({ params }) => {
    const { proposal, stop } = params;
    const directoryPath = path.join(process.cwd(), `static/Selected/${proposal}/${stop}`);
    try {
        const files = fs.readdirSync(directoryPath);
        if (!files) {
            throw error(404, 'Directory not found');
        } else if (!files.length) {
            throw error(404, 'No files found');
        }
        return new Response(JSON.stringify(files), {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (err) {
        throw error(500, `Unable to scan directory: ${proposal}/${stop}`);
    }
};