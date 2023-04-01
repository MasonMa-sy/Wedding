from flask import Flask, render_template, request

app = Flask(__name__)


@app.route('/main.html')
def main():
    page = render_template('page1.html')
    return render_template('main.html', wrapper=page)


@app.route('/change_page', methods=['POST', 'GET'])
def change_page():
    page = request.json['page']
    return render_template(f'page{page}.html')



@app.route('/2')
def main2():
    return render_template('test.html')


if __name__ == '__main__':
    # app.config.update(
    #     SESSION_COOKIE_SECURE=True,
    #     SESSION_COOKIE_HTTPONLY=False,
    #     SESSION_COOKIE_SAMESITE='None',
    # )
    app.run(host='0.0.0.0')