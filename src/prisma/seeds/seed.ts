import { PrismaClient } from "@prisma/client";
import { seedCourses } from "./courses.seed";
import { seedUsers } from "./users.seed";


const prisma = new PrismaClient();

async function main() {
    await seedUsers(prisma);
    await seedCourses(prisma);
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    }).finally(async () => {
        await prisma.$disconnect();
    })