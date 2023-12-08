# Prisma Database Initialization and Configuration

## 1. Initialize the Database

```bash
npx prisma init

✔ Your Prisma schema was created at prisma/schema.prisma
You can now open it in your favorite editor.

warn You already have a .gitignore file. Don't forget to add `.env` in it to not commit any private information.

Next steps:

1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read [Getting Started](https://pris.ly/d/getting-started)
2. Set the provider of the datasource block in schema.prisma to match your database: postgresql, mysql, sqlite, sqlserver, mongodb, or cockroachdb.
3. Run `prisma db pull` to turn your database schema into a Prisma schema.
4. Run `prisma generate` to generate the Prisma Client. You can then start querying your database.

More information in our documentation:
[Getting Started](https://pris.ly/d/getting-started)

## 2. Push the Database Schema to the Remote Database

```bash
npx prisma db push
Environment variables loaded from .env
Prisma schema loaded from prisma/schema.prisma
Datasource "db": MongoDB database "airbnb-nextjs" at "cluster0.pgdcm.mongodb.net"
Applying the following changes:

[+] Collection `User`
[+] Collection `Account`
[+] Collection `Listing`
[+] Collection `Reservation`
[+] Unique index `User_email_key` on ({"email":1})
[+] Unique index `Account_provider_providerAccountId_key` on ({"provider":1,"providerAccountId":1})


🚀  Your database indexes are now in sync with your Prisma schema. Done in 12.59s

Running generate... (Use --skip-generate to skip the generators)

✔ Generated Prisma Client (v5.7.0) to ./node_modules/@prisma/client in 192ms
