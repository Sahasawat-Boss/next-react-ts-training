// GET /api/user – list all users

// POST /api/user with JSON { "name": "Charlie", "email": "charlie@example.com" }

// PUT /api/user?id=2 with JSON { "name": "Bobby" }

// DELETE /api/user?id=1

import { NextRequest, NextResponse } from 'next/server';

// Dummy in-memory data (replace with DB logic later)
let users = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' },
];

// GET - List all users
export async function GET() {
    return NextResponse.json({ users });
}

// POST - Create new user
export async function POST(request: NextRequest) {
    const body = await request.json();
    const { name, email } = body;

    if (!name || !email) {
        return NextResponse.json(
            { error: 'Name and email are required' },
            { status: 400 }
        );
    }

    const newUser = {
        id: users.length + 1,
        name,
        email,
    };

    users.push(newUser);

    return NextResponse.json({ message: 'User created', user: newUser }, { status: 201 });
}

// PUT - Update user info (pass user ID in query string ?id=1)
export async function PUT(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const id = parseInt(searchParams.get('id') || '', 10);

    if (!id) {
        return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
    }

    const body = await request.json();
    const userIndex = users.findIndex((u) => u.id === id);

    if (userIndex === -1) {
        return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    users[userIndex] = {
        ...users[userIndex],
        ...body,
    };

    return NextResponse.json({ message: 'User updated', user: users[userIndex] });
}

// DELETE - Delete user (pass user ID in query string ?id=1)
export async function DELETE(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const id = parseInt(searchParams.get('id') || '', 10);

    if (!id) {
        return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
    }

    const userIndex = users.findIndex((u) => u.id === id);
    if (userIndex === -1) {
        return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const deletedUser = users.splice(userIndex, 1);

    return NextResponse.json({ message: 'User deleted', user: deletedUser[0] });
}
