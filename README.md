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
```
