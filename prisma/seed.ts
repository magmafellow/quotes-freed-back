import 'dotenv/config';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../src/generated/prisma/client.js';
import * as bcrypt from 'bcrypt';

const connectionString = `${process.env.DATABASE_URL}`;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

// Russian users data
const russianUsers = [
  {
    email: 'ivan.petrov@mail.ru',
    username: 'ivan_petrov',
    password: 'Password123!',
    firstName: 'Иван',
    lastName: 'Петров',
  },
  {
    email: 'elena.smirnova@yandex.ru',
    username: 'elena_smirnova',
    password: 'Password123!',
    firstName: 'Елена',
    lastName: 'Смирнова',
  },
  {
    email: 'dmitry.kozlov@mail.ru',
    username: 'dmitry_kozlov',
    password: 'Password123!',
    firstName: 'Дмитрий',
    lastName: 'Козлов',
  },
  {
    email: 'anna.volkova@yandex.ru',
    username: 'anna_volkova',
    password: 'Password123!',
    firstName: 'Анна',
    lastName: 'Волкова',
  },
  {
    email: 'alexey.sokolov@gmail.com',
    username: 'alexey_sokolov',
    password: 'Password123!',
    firstName: 'Алексей',
    lastName: 'Соколов',
  },
  {
    email: 'maria.lebedeva@mail.ru',
    username: 'maria_lebedeva',
    password: 'Password123!',
    firstName: 'Мария',
    lastName: 'Лебедева',
  },
  {
    email: 'sergey.novikov@yandex.ru',
    username: 'sergey_novikov',
    password: 'Password123!',
    firstName: 'Сергей',
    lastName: 'Новиков',
  },
  {
    email: 'olga.morozova@mail.ru',
    username: 'olga_morozova',
    password: 'Password123!',
    firstName: 'Ольга',
    lastName: 'Морозова',
  },
];

// Worldwide authors data
const worldwideAuthors = [
  // Russian authors
  {
    id: 1,
    firstName: 'Федор',
    lastName: 'Достоевский',
    dateBorn: new Date('1821-11-11'),
  },
  {
    id: 2,
    firstName: 'Лев',
    lastName: 'Толстой',
    dateBorn: new Date('1828-09-09'),
  },
  {
    id: 3,
    firstName: 'Антон',
    lastName: 'Чехов',
    dateBorn: new Date('1860-01-29'),
  },
  {
    id: 4,
    firstName: 'Александр',
    lastName: 'Пушкин',
    dateBorn: new Date('1799-06-06'),
  },
  {
    id: 5,
    firstName: 'Иван',
    lastName: 'Тургенев',
    dateBorn: new Date('1818-11-09'),
  },
  // American authors
  {
    id: 6,
    firstName: 'Ernest',
    lastName: 'Hemingway',
    dateBorn: new Date('1899-07-21'),
  },
  {
    id: 7,
    firstName: 'Mark',
    lastName: 'Twain',
    dateBorn: new Date('1835-11-30'),
  },
  {
    id: 8,
    firstName: 'Edgar Allan',
    lastName: 'Poe',
    dateBorn: new Date('1809-01-19'),
  },
  {
    id: 9,
    firstName: 'Harper',
    lastName: 'Lee',
    dateBorn: new Date('1926-04-28'),
  },
  {
    id: 10,
    firstName: 'J.D.',
    lastName: 'Salinger',
    dateBorn: new Date('1919-01-01'),
  },
  // British authors
  {
    id: 11,
    firstName: 'William',
    lastName: 'Shakespeare',
    dateBorn: new Date('1564-04-23'),
  },
  {
    id: 12,
    firstName: 'Jane',
    lastName: 'Austen',
    dateBorn: new Date('1775-12-16'),
  },
  {
    id: 13,
    firstName: 'Charles',
    lastName: 'Dickens',
    dateBorn: new Date('1812-02-07'),
  },
  {
    id: 14,
    firstName: 'George',
    lastName: 'Orwell',
    dateBorn: new Date('1903-06-25'),
  },
  {
    id: 15,
    firstName: 'J.R.R.',
    lastName: 'Tolkien',
    dateBorn: new Date('1892-01-03'),
  },
  // French authors
  {
    id: 16,
    firstName: 'Victor',
    lastName: 'Hugo',
    dateBorn: new Date('1802-02-26'),
  },
  {
    id: 17,
    firstName: 'Albert',
    lastName: 'Camus',
    dateBorn: new Date('1913-11-07'),
  },
  {
    id: 18,
    firstName: 'Marcel',
    lastName: 'Proust',
    dateBorn: new Date('1871-07-10'),
  },
  // German authors
  {
    id: 19,
    firstName: 'Johann Wolfgang',
    lastName: 'von Goethe',
    dateBorn: new Date('1749-08-28'),
  },
  {
    id: 20,
    firstName: 'Franz',
    lastName: 'Kafka',
    dateBorn: new Date('1883-07-03'),
  },
  // Other European
  {
    id: 21,
    firstName: 'Miguel',
    lastName: 'de Cervantes',
    dateBorn: new Date('1547-09-29'),
  },
  {
    id: 22,
    firstName: 'Dante',
    lastName: 'Alighieri',
    dateBorn: new Date('1265-05-01'),
  },
  // Asian authors
  {
    id: 23,
    firstName: 'Haruki',
    lastName: 'Murakami',
    dateBorn: new Date('1949-01-12'),
  },
  {
    id: 24,
    firstName: 'Leo',
    lastName: 'Tolstoy',
    dateBorn: new Date('1828-09-09'),
  },
];

// Quotes data
const quotesData = [
  // Russian literature quotes (with authors)
  {
    content: 'Красота спасет мир',
    authorId: 1,
    dateCreatedOrigin: new Date('1868-01-01'),
  },
  {
    content:
      'Все счастливые семьи похожи друг на друга, каждая несчастливая семья несчастлива по-своему',
    authorId: 2,
    dateCreatedOrigin: new Date('1875-01-01'),
  },
  {
    content: 'Человек - это то, во что он верит',
    authorId: 3,
    dateCreatedOrigin: new Date('1900-01-01'),
  },
  {
    content: 'Я помню чудное мгновенье: Передо мной явилась ты',
    authorId: 4,
    dateCreatedOrigin: new Date('1825-01-01'),
  },
  {
    content: 'Великие дела делаются великими людьми',
    authorId: 5,
    dateCreatedOrigin: new Date('1860-01-01'),
  },

  // American literature quotes
  {
    content:
      'The world breaks everyone and afterward many are strong at the broken places',
    authorId: 6,
    dateCreatedOrigin: new Date('1929-01-01'),
  },
  {
    content: 'The secret of getting ahead is getting started',
    authorId: 7,
    dateCreatedOrigin: new Date('1876-01-01'),
  },
  {
    content: 'All that we see or seem is but a dream within a dream',
    authorId: 8,
    dateCreatedOrigin: new Date('1849-01-01'),
  },
  {
    content:
      'You never really understand a person until you consider things from his point of view',
    authorId: 9,
    dateCreatedOrigin: new Date('1960-01-01'),
  },
  {
    content:
      "Don't ever tell anybody anything. If you do, you start missing everybody",
    authorId: 10,
    dateCreatedOrigin: new Date('1951-01-01'),
  },

  // British literature quotes
  {
    content: 'To be, or not to be: that is the question',
    authorId: 11,
    dateCreatedOrigin: new Date('1600-01-01'),
  },
  {
    content:
      'It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife',
    authorId: 12,
    dateCreatedOrigin: new Date('1813-01-01'),
  },
  {
    content: 'It was the best of times, it was the worst of times',
    authorId: 13,
    dateCreatedOrigin: new Date('1859-01-01'),
  },
  {
    content:
      'All animals are equal, but some animals are more equal than others',
    authorId: 14,
    dateCreatedOrigin: new Date('1945-01-01'),
  },
  {
    content: 'Not all those who wander are lost',
    authorId: 15,
    dateCreatedOrigin: new Date('1954-01-01'),
  },

  // French literature quotes
  {
    content: 'Even the darkest night will end and the sun will rise',
    authorId: 16,
    dateCreatedOrigin: new Date('1862-01-01'),
  },
  {
    content:
      'In the midst of winter, I found there was, within me, an invincible summer',
    authorId: 17,
    dateCreatedOrigin: new Date('1954-01-01'),
  },
  {
    content:
      'The real voyage of discovery consists not in seeking new landscapes, but in having new eyes',
    authorId: 18,
    dateCreatedOrigin: new Date('1923-01-01'),
  },

  // German literature quotes
  {
    content:
      'Knowing is not enough; we must apply. Willing is not enough; we must do',
    authorId: 19,
    dateCreatedOrigin: new Date('1819-01-01'),
  },
  {
    content: 'A book must be the axe for the frozen sea within us',
    authorId: 20,
    dateCreatedOrigin: new Date('1924-01-01'),
  },

  // Other quotes
  {
    content:
      'The truth may be stretched thin, but it never breaks, and it always surfaces above lies',
    authorId: 21,
    dateCreatedOrigin: new Date('1605-01-01'),
  },
  {
    content:
      'The darkest places in hell are reserved for those who maintain their neutrality in times of moral crisis',
    authorId: 22,
    dateCreatedOrigin: new Date('1300-01-01'),
  },
  {
    content: 'Pain is inevitable. Suffering is optional',
    authorId: 23,
    dateCreatedOrigin: new Date('2002-01-01'),
  },
];

// User quotes (quotes created by users themselves, without existing author)
const userQuotes = [
  {
    content: 'Жизнь прекрасна, когда ты её создаешь сам',
    dateCreatedOrigin: new Date('2024-01-15'),
  },
  {
    content: 'Успех приходит к тем, кто не боится ошибаться',
    dateCreatedOrigin: new Date('2024-02-20'),
  },
  {
    content: 'Счастье - это путь, а не пункт назначения',
    dateCreatedOrigin: new Date('2024-03-10'),
  },
  {
    content: 'Будь изменением, которое хочешь видеть в мире',
    dateCreatedOrigin: new Date('2024-01-05'),
  },
  {
    content: 'Мечты становятся реальностью, когда мы действуем',
    dateCreatedOrigin: new Date('2024-02-28'),
  },
];

async function main() {
  console.log('Start seeding...');

  // Hash passwords for users
  const saltRounds = 10;
  const usersWithHashedPasswords = await Promise.all(
    russianUsers.map(async (user) => ({
      ...user,
      password: await bcrypt.hash(user.password, saltRounds),
    })),
  );

  // Create users
  const createdUsers = [];
  for (const user of usersWithHashedPasswords) {
    const createdUser = await prisma.user.create({
      data: user,
    });
    createdUsers.push(createdUser);
    console.log(`Created user: ${user.username}`);
  }

  // Create authors
  for (const author of worldwideAuthors) {
    await prisma.author.create({
      data: author,
    });
    console.log(`Created author: ${author.firstName} ${author.lastName}`);
  }

  // Create quotes from authors
  const createdQuotes = [];
  for (const quote of quotesData) {
    const createdQuote = await prisma.quote.create({
      data: quote,
    });
    createdQuotes.push(createdQuote);
    console.log(`Created quote: ${quote.content.substring(0, 50)}...`);
  }

  // Create quotes from users
  for (let i = 0; i < userQuotes.length; i++) {
    const user = createdUsers[i % createdUsers.length];
    const quote = await prisma.quote.create({
      data: {
        content: userQuotes[i].content,
        dateCreatedOrigin: userQuotes[i].dateCreatedOrigin,
        userId: user.id,
      },
    });
    createdQuotes.push(quote);
    console.log(
      `Created user quote by ${user.username}: ${quote.content.substring(0, 50)}...`,
    );
  }

  // Create likes for quotes
  const likesData = [];

  // Each user likes random quotes
  for (const user of createdUsers) {
    // Get random number of quotes to like (3-8)
    const numberOfLikes = Math.floor(Math.random() * 6) + 3;
    const shuffledQuotes = [...createdQuotes].sort(() => 0.5 - Math.random());
    const quotesToLike = shuffledQuotes.slice(0, numberOfLikes);

    for (const quote of quotesToLike) {
      likesData.push({
        userId: user.id,
        quoteId: quote.id,
      });
    }
  }

  // Remove duplicates (same user liking same quote multiple times)
  const uniqueLikes = Array.from(
    new Map(
      likesData.map((like) => [`${like.userId}-${like.quoteId}`, like]),
    ).values(),
  );

  // Create likes
  for (const like of uniqueLikes) {
    await prisma.likes_UsersQuotes.create({
      data: like,
    });
  }

  console.log(`Created ${uniqueLikes.length} unique likes`);

  // Summary
  console.log('\n=== Seeding Summary ===');
  console.log(`Users created: ${createdUsers.length}`);
  console.log(`Authors created: ${worldwideAuthors.length}`);
  console.log(`Quotes created: ${createdQuotes.length}`);
  console.log(`Likes created: ${uniqueLikes.length}`);
  console.log('\nSeeding finished successfully!');
}

main()
  .catch((e) => {
    console.error('Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
