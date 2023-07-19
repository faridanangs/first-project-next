import connect from '@/utils/db'
import { NextResponse } from 'next/server'
import Post from '@/models/Post';

export const GET = async (request) => {
  try {
    await connect();

    const posts = await Post.find()
    return new NextResponse(posts, {status:200})
}catch (err){
      return new NextResponse("DataBase Error ", {status:500})

  }

}
