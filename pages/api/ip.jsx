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
                    fontSize: 128,
                    background: "transparent",
                    color: "white",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "center",
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
            height: 600,
        }
    );
}
