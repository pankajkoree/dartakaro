import User from "@/models/userModel";
import { NextResponse } from "next/server";
import { connectToTheDatabase } from "@/database/databaseConfiguration";

connectToTheDatabase();

export const GET = async () => {
  try {
    const users = await User.find();

    return NextResponse.json({
      status: 200,
      success: true,
      users,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
