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
