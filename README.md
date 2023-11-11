Commands to run the app

git clone https://github.com/divyjx/atm.git
cd atm

pip install pipenv
pipenv shell

pip install -r .\requirements.txt

cd .\backend\
python .\manage.py makemigrations
python .\manage.py migrate
python .\manage.py runserver