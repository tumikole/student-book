CREATE TABLE student (
        id BIGSERIAL PRIMARY KEY,
        last_name VARCHAR(255) NOT NULL,
        first_name VARCHAR(255) NOT NULL,
        id_number NUMERIC(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL
    );

CREATE TABLE
    admin (
        id BIGSERIAL PRIMARY KEY,
        last_name VARCHAR(255) NOT NULL,
        first_name VARCHAR(255) NOT NULL,
        id_number NUMERIC(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL
    );

CREATE TABLE
    books (
        id BIGSERIAL PRIMARY KEY NOT NULL,
        book_name VARCHAR(255) NOT NULL,
        book_author VARCHAR(255),
        book_description VARCHAR(255)
    );

CREATE TABLE
    books_look_up (
        id BIGSERIAL PRIMARY KEY,
        student_id BIGINT REFERENCES student (id) NOT NULL,
        books_id BIGINT REFERENCES books (id) NOT NULL
    );

INSERT INTO
    books (book_name, book_author, book_description)
VALUES (
        'In Search of Lost Time',
        'Marcel Proust',
        'Swanns Way, the first part of A la recherche de temps perdu, Marcel Prousts seven-part cycle, was published in 1913. In it, Proust introduces the themes that run through the entire work.'
    );

INSERT INTO
    books (book_name, book_author, book_description)
VALUES (
        'Ulysses',
        'James Joyce',
        'Ulysses chronicles the passage of Leopold Bloom through Dublin during an ordinary day, June 16, 1904.'
    );

INSERT INTO
    books (book_name, book_author, book_description)
VALUES (
        'Don Quixote',
        'Miguel de Cervantes',
        'Alonso Quixano, a retired country gentleman in his fifties, lives in an unnamed section of La Mancha with his niece and a housekeeper.'
    );

INSERT INTO
    books (book_name)
VALUES ('Physical Sciences');

INSERT INTO
    books (book_name, book_author, book_description)
VALUES (
        'One Hundred Years of Solitude',
        'Gabriel Garcia Marquez',
        'One of the 20th centurys enduring works, One Hundred Years of Solitude is a widely beloved and acclaimed novel known throughout the world, and the ultimate achievement in a Nobel Prize–winning car'
    );

INSERT INTO
    books (book_name)
VALUES ('Religion Studies');

INSERT INTO
    books (book_name, book_author, book_description)
VALUES (
        'The Great Gatsby',
        'F. Scott Fitzgerald',
        'The novel chronicles an era that Fitzgerald himself dubbed the "Jazz Age". Following the shock and chaos of World War I, American society enjoyed unprecedented levels of prosperity during the "roar...'
    );

INSERT INTO
    books (book_name)
VALUES ('Life Orientation');

INSERT INTO
    books (book_name, book_author, book_description)
VALUES (
        'Moby Dick',
        'Herman Melville',
        'First published in 1851, Melvilles masterpiece is, in Elizabeth Hardwicks words,the greatest novel in American literature.'
    );

INSERT INTO
    books (book_name, book_author, book_description)
VALUES (
        'War and Peace ',
        'Leo Tolstoy',
        'Epic in scale, War and Peace delineates in graphic detail events leading up to Napoleons invasion of Russia, and the impact of the Napoleonic era on Tsarist society, as seen through the eyes of fi...'
    );

INSERT INTO
    books (book_name, book_author, book_description)
VALUES (
        'Hamlet',
        'William Shakespeare',
        'The Tragedy of Hamlet, Prince of Denmark, or more simply Hamlet, is a tragedy by William Shakespeare, believed to have been written between 1599 and 1601. The play, set in Denmark, recounts how Pri...'
    );

INSERT INTO
    books (book_name)
VALUES ('Mathematics');

INSERT INTO
    books (book_name, book_author, book_description)
VALUES (
        'The Odyssey',
        'Homer',
        'The Odyssey is one of two major ancient Greek epic poems attributed to Homer. It is, in part, a sequel to the Iliad, the other work traditionally ascribed to Homer. The poem is fundamental to the m...'
    );

INSERT INTO
    books (book_name, book_author, book_description)
VALUES (
        'Madame Bovary',
        'Gustave Flaubert',
        'For daring to peer into the heart of an adulteress and enumerate its contents with profound dispassion, the author of Madame Bovary was tried for "offenses against morality and religion." What shoc...'
    );

INSERT INTO
    books (book_name, book_author, book_description)
VALUES (
        'The Divine Comedy',
        'Dante Alighieri',
        'Belonging in the immortal company of the great works of literature, Dante Alighieris poetic masterpiece, The Divine Comedy, is a moving human drama, an unforgettable visionary journey through the ...'
    );

INSERT INTO
    books (book_name, book_author, book_description)
VALUES (
        'Lolita ',
        'Vladimir Nabokov',
        'The book is internationally famous for its innovative style and infamous for its controversial subject: the protagonist and unreliable narrator, middle aged Humbert Humbert, becomes obsessed and se...'
    );

INSERT INTO
    books (book_name, book_author, book_description)
VALUES (
        'The Brothers Karamazov',
        'Fyodor Dostoyevsky',
        'Dostoevskys last and greatest novel, The Karamazov Brothers, is both a brilliantly told crime story and a passionate philosophical debate. The dissolute landowner Fyodor Pavlovich Karamazov is mur...'
    );

INSERT INTO
    books (book_name)
VALUES ('Physical Sciences');

INSERT INTO
    books (book_name, book_author, book_description)
VALUES (
        'Crime and Punishment',
        'Fyodor Dostoyevsky',
        'It is a murder story, told from a murder;s point of view, that implicates even the most innocent reader in its enormities. It is a cat-and-mouse game between a tormented young killer and a cheerful...'
    );

INSERT INTO
    books (book_name)
VALUES ('Life Orientation');

INSERT INTO
    books (book_name, book_author, book_description)
VALUES (
        'Wuthering Heights',
        'Emily Brontë',
        'The narrative is non-linear, involving several flashbacks, and two primary narrators: Mr. Lockwood and Ellen "Nelly" Dean. The novel opens in 1801, with Mr. Lockwood arriving at Thrushcross Grange,...'
    );

INSERT INTO
    books (book_name, book_author, book_description)
VALUES (
        'The Catcher in the Rye',
        'J. D. Salinger',
        'The Catcher in the Rye is a 1945 novel by J. D. Salinger. Originally published for adults, the novel has become a common part of high school and college curricula throughout the English-speaking wo...'
    );

INSERT INTO
    books (book_name)
VALUES ('Religion Studies');

INSERT INTO
    books (book_name, book_author, book_description)
VALUES (
        'Pride and Prejudice',
        'Jane Austen',
        'The book is narrated in free indirect speech following the main character Elizabeth Bennet as she deals with matters of upbringing, marriage, moral rightness and education in her aristocratic socie...'
    );

INSERT INTO
    books (book_name)
VALUES ('Mathematical Literacy');

INSERT INTO
    books (book_name)
VALUES ('Mathematics');

INSERT INTO
    books (book_name, book_author, book_description)
VALUES (
        'The Adventures of Huckleberry Finn',
        'Mark Twain',
        'Revered by all of the towns children and dreaded by all of its mothers, Huckleberry Finn is indisputably the most appealing child-hero in American literature. Unlike the tall-tale, idyllic worl...'
    );

INSERT INTO
    books (book_name)
VALUES ('Mathematics');

INSERT INTO
    books (book_name)
VALUES ('Mathematical Literacy');


/*/////////////Inner join example////////////*/


SELECT * FROM books
INNER JOIN student ON books.id=student.book_id;

 SELECT * FROM student
INNER JOIN books ON student.books_id=books.id  WHERE id=1;
