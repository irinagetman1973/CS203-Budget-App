import sqlite3

from flask import Flask, render_template, request, url_for

app = Flask(__name__)


@app.route('/')
def home():
    return render_template('home.html')

@app.route('/enternew')
def new_user():
    return render_template('users.html')

@app.route('/addrec', methods=['GET', 'POST'])
def addrec():
    if request.method == 'POST':
        try:
            FirstName = request.form['FirstName']
            LastName = request.form['LastName']
            Email = request.form['E-mail']
            Username = request.form['Username']
            Password = request.form['Password']

            if not FirstName or LastName or Email:
                with sqlite3.connect("users.db") as con:
                    cur = con.cursor();
                    cur.execute("INSERT INTO users(FirstName, LastName, E-mail, Username, Password) values(?,?,?,?)",(FirstName,LastName,Email,Username,Password))
                    con.commit()
                    msg="Record added to db"
                    print(msg)
            else:
                msg ="Error: Insert all fields"
        except:
            con.rollback()
            msg = "error in reading data"
        finally:
            return render_template("results.html", msg=msg)
            con.close()

@app.route('/list')
def list():
    con = sqlite3.connect("users.db")
    con.row_factory = sqlite3.Row
    cur = con.cursor()
    cur.execute("SELECT * FROM users")
    row = cur.fetchall()
    return render_template("list.html", rows=row)


if __name__=='__main__':
    app.run(debug=True)

