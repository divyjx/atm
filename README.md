# ATM App
A basic ATM CRUD app Build using django and react
## Commands to Run the App

```bash
# Clone the repository
git clone https://github.com/divyjx/atm.git

# Change to the project directory
cd atm

# Install pipenv and activate the virtual environment
pip install pipenv
pipenv shell

# Install project dependencies using requirements.txt
pip install -r ./requirements.txt

# Navigate to the backend directory
cd ./backend/

# Apply database migrations
python manage.py makemigrations
python manage.py migrate

# Run the development server
python manage.py runserver

# open the server url in browser
http://127.0.0.1:8000/
```

For viewing all data create djangosuperuser
```bash
python manage.py createsuperuser
# enter username and password

# go to admin route on server url 
http://127.0.0.1:8000/admin

# Note : users are present under the Vault section 
```
