/* eslint-disable import/no-anonymous-default-export */
import { ImageResponse } from "@vercel/og";

export const config = {
    runtime: "edge",
};

export default function () {
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 150,
                    background: "transparent",
                    color: "white",
                    fontFamily: "Arial, Helvetica, sans-serif",
                }}
            >
                {`${Math.floor(Math.random() * 255)}.${Math.floor(
                    Math.random() * 255
                )}.${Math.floor(Math.random() * 255)}.${Math.floor(
                    Math.random() * 255
                )}`}
            </div>
        ),
        {
            width: 1200,
            height: 200,
            headers: {
                // disable caching
                "Cache-Control":
                    "no-store max-age=0 s-maxage=0 must-revalidate",
            },
        }
    );
}
