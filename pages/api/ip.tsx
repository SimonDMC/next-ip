import { ImageResponse } from "@vercel/og";
import type { NextRequest } from "next/server";

export const config = {
    runtime: "edge",
};

const font = fetch(new URL("/public/gg-sans.ttf", import.meta.url)).then(
    (res) => res.arrayBuffer()
);

// get the ip address of the request
export default async function handler(req: NextRequest) {
    const fontData = await font;
    console.log(req.ip);

    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 16,
                    background: "transparent",
                    color: "white",
                    fontFamily: '"gg sans", Arial, Helvetica, sans-serif',
                    display: "flex",
                }}
            >
                <span
                    style={{
                        transform: "translateY(-5px)",
                    }}
                >
                    {req.ip ??
                        `${Math.floor(Math.random() * 255)}.${Math.floor(
                            Math.random() * 255
                        )}.${Math.floor(Math.random() * 255)}.${Math.floor(
                            Math.random() * 255
                        )}`}
                </span>
            </div>
        ),
        {
            width: 160,
            height: 20,
            fonts: [
                {
                    name: "gg sans",
                    data: fontData,
                    style: "normal",
                },
            ],
            headers: {
                // disable caching
                "Cache-Control":
                    "no-store max-age=0 s-maxage=0 must-revalidate",
            },
        }
    );
}
