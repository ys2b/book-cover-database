// pages/api/upload.js
import { NextResponse } from 'next/server';

export const config = {
    api: {
        bodyParser: false,
    },
};

export default async function handler(req, res) {
  // Notion APIへのアップロード処理を実装する
  // ...

    return NextResponse.json({ message: 'Uploaded successfully' });
}