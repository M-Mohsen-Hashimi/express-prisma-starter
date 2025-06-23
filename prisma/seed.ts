import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  await prisma.user.createMany({
    data: [
      { name: "Alice", email: "alice@example.com", age: 23, isMarried: false, nationality: 'Afghan' },
      { name: "Mohammad", email: "mohammad@example.com", age: 28, isMarried: true, nationality: 'Afghan' },
      { name: "Fatima", email: "fatima@example.com", age: 22, isMarried: false, nationality: 'Afghan' },
      { name: "John", email: "john@example.com", age: 31, isMarried: true, nationality: 'American' },
      { name: "Sara", email: "sara@example.com", age: 27, isMarried: false, nationality: 'Canadian' },
      { name: "Yusuf", email: "yusuf@example.com", age: 35, isMarried: true, nationality: 'Afghan' },
      { name: "Layla", email: "layla@example.com", age: 24, isMarried: false, nationality: 'Afghan' },
      { name: "David", email: "david@example.com", age: 40, isMarried: true, nationality: 'British' },
      { name: "Amina", email: "amina@example.com", age: 26, isMarried: false, nationality: 'Afghan' },
      { name: "Omid", email: "omid@example.com", age: 29, isMarried: false, nationality: 'Afghan' },
      { name: "Emily", email: "emily@example.com", age: 21, isMarried: false, nationality: 'Australian' },
      { name: "Zahra", email: "zahra@example.com", age: 30, isMarried: true, nationality: 'Afghan' },
      { name: "Ahmad", email: "ahmad@example.com", age: 34, isMarried: true, nationality: 'Afghan' },
      { name: "Sophie", email: "sophie@example.com", age: 25, isMarried: false, nationality: 'German' },
      { name: "Hassan", email: "hassan@example.com", age: 32, isMarried: true, nationality: 'Afghan' },
      { name: "Nadia", email: "nadia@example.com", age: 23, isMarried: false, nationality: 'Afghan' },
      { name: "Bilal", email: "bilal@example.com", age: 27, isMarried: false, nationality: 'Pakistani' },
      { name: "Farzana", email: "farzana@example.com", age: 28, isMarried: true, nationality: 'Afghan' },
      { name: "Karim", email: "karim@example.com", age: 36, isMarried: true, nationality: 'Afghan' },
      { name: "Aisha", email: "aisha@example.com", age: 22, isMarried: false, nationality: 'Afghan' }
    ]
  })
}

seed().then(() => prisma.$disconnect());

