import  Prisma  from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(req : any){
    console.log('sadwasdwa')
    try {

        console.log('here')
        const {title} = await req.json()
        console.log(title)
        const createTodo = await Prisma.post.create({
            data : {
                title
            }
        })

        return NextResponse.json({message : 'created'})
    } catch (error) {
        return NextResponse.json({message : 'error'})
    }
}