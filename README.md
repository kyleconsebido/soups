# SOUPS

SOUPS is a simple blog website developed as a hobby project and a learning experience for Next.js 14

## How to run
1. Clone the repository
    ```bash
    git clone https://github.com/kyleconsebido/soups.git
    ```
2. Install dependencies
   ```bash
   npm install
   ```
3. Setup environment variables
   ```bash
   cp .env.local.example .env.local
   ```
4. Start a locally hosted libSQL server or use local SQLite database files &#40;more info on the [Turso documentation](https://docs.turso.tech/reference/local-development)&#41;, then update the `DATABASE_URL` env variable.
5. Migrate database
   ```bash
   npm run migrate
   ```
6. Run the development server
   ```
   npm run dev
   ```
