# Eagle

Template app.

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#python-installation">Python Installation</a></li>
        <li><a href="#react-installation">React Installation</a></li>
        <li><a href="#note">Note</a></li>
      </ul>
    </li>
  </ol>
</details>

## Getting Started

### Installation

1. Clone the repo:
   ```sh
   git clone git@github.com:njs91/eagle.git
   ```

### Python Installation

1. Create Virtual Environment (in root):
   ```sh
   python3 -m venv venv
   ```
2. Activate Virtual Environment:
   ```sh
   source venv/bin/activate
   ```
3. Install Dependencies:
   ```sh
   pip install -r requirements.txt
   ```
4. Run Project:
   ```sh
   python3 manage.py runserver
   ```
5. Make Migrations - may need to run the following:
   ```sh
   ./manage.py makemigrations
   ```
   ```sh
   ./manage.py migrate
   ```

### React Installation

1. CD to frontend and install dependencies:
   ```sh
   npm install
   ```
2. Then run with:
   ```sh
   npm start
   ```

### Note

1. Added proxy to package.json so can fetch from /api/pages rather than http://127.0.0.1:8000/api/pages
   ```
   "proxy": "http://127.0.0.1:8000"
   ```
2. Need to run `npm run build` to generate production react files
3. TypeScript is implemented and requires .tsx extensions (rather than .js)
