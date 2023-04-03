from flask import Flask, render_template, request

app = Flask(__name__)


@app.route('/main.html')
def main():
    page = render_template('page1.html')
    return render_template('main.html', wrapper=page)


@app.route('/change_page', methods=['POST', 'GET'])
def change_page():
    out = """<div data-v-7be53ed1="" class="page-inactive page-special-fadeout-down-leave" style="animation-duration: 1300ms;"><div data-v-7be53ed1="" class="content" style="animation-duration: 1300ms;">{content}</div></div>"""
    in1 = """<div data-v-7be53ed1="" class="page-active page-special-fadeout-down-enter" style="animation-duration: 1300ms;"><div data-v-7be53ed1="" class="content" style="animation-duration: 1300ms;">{content}</div></div>"""
    hide = """<div data-v-7be53ed1="" class="page-inactive hidden"><div data-v-7be53ed1="" class="content">{content}</div></div>"""
    page = request.json['page']
    dir_b = request.json['dir']
    res = ""
    # 向下划
    if dir_b:
        page_out = page - 1
        page_in = page
        page_hide = page + 1
    else:
        page_out = page + 1
        page_in = page
        page_hide = page - 1
    if 0 < page_out <= 9:
        res += out.format(content=render_template(f'page{page_out}.html'))
    res += in1.format(content=render_template(f'page{page_in}.html'))
    if 0 < page_hide <= 9:
        res += hide.format(content=render_template(f'page{page_hide}.html'))
    return res



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