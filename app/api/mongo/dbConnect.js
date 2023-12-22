// Import Prisma Client
import { PrismaClient } from '@prisma/client';

// Create an instance of Prisma Client
const prisma = new PrismaClient();

const connect = async () => {
  try {
    // Connect to the database
    await prisma.$connect();
    console.log('Connected to MongoDB Atlas');
  } catch (error) {
    console.error('Failed to connect to MongoDB Atlas:', error);
  }
};

export default connect;
