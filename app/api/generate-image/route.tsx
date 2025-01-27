import { NextRequest, NextResponse } from "next/server";
import Replicate from "replicate";
import { writeFile } from "node:fs/promises";

export async function POST(req:NextRequest)
{

const replicate = new Replicate();

const input = {
    prompt: "a majestic snow-capped mountain peak bathed in a warm glow of the setting sun",
    aspect_ratio: "3:2"
};

const output:any = await replicate.run("black-forest-labs/flux-1.1-pro-ultra", { input });


await writeFile("output.jpg", output);
//=> output.jpg written to disk
    return NextResponse.json({"imageUrl":output[0]})
}