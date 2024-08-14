import { faker } from '@faker-js/faker';
import { PrismaClient } from "@prisma/client";

export async function seedCourses(prisma: PrismaClient) {
    for (let i = 0; i < 5; i++) {
        await prisma.course.create({
            data: {
                name: faker.lorem.words(10),
                description: faker.lorem.words(20),
                CourseModule: {
                    createMany: {
                        data: [
                            {
                                name: faker.lorem.words(10),
                                content: faker.lorem.words(1000),
                            },
                            {
                                name: faker.lorem.words(10),
                                content: faker.lorem.words(1000),
                            },
                            {
                                name: faker.lorem.words(10),
                                content: faker.lorem.words(1000),
                            }
                        ]
                    }
                }
            }
        })
    }
}