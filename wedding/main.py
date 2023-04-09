from flask import Flask, render_template, request
from mysql_dao import mysql_connector

app = Flask(__name__)
all_page = 10

page_parents = {10: '10'}
page_parents2 = {10: '10_2'}
page_friend = {10: '10_3'}


@app.route('/parents.html')
def parents():
    page = render_template('page1.html')
    return render_template('main.html', wrapper=page,
                           audio_bgm="https://qnvideo.hunliji.com/FhW-7EfajiwFmZjgo_I28V-44xsd")


@app.route('/parents2.html')
def parents2():
    page = render_template('page1.html')
    return render_template('main.html', wrapper=page,
                           audio_bgm="https://qnvideo.hunliji.com/FhW-7EfajiwFmZjgo_I28V-44xsd")

@app.route('/friend.html')
def friend():
    page = render_template('page1.html')
    return render_template('main.html', wrapper=page,
                           audio_bgm="https://qnvideo.hunliji.com/o_1dl714rg59qugmcqri18ijpgm9.mp3")


@app.route('/change_page', methods=['POST', 'GET'])
def change_page():
    out = """<div data-v-7be53ed1="" class="page-inactive hidden page-special-fadeout-down-leave" style="animation-duration: 1300ms;"><div data-v-7be53ed1="" class="content" style="animation-duration: 1300ms;">{content}</div></div>"""
    in1 = """<div data-v-7be53ed1="" class="page-active page-special-fadeout-down-enter" style="animation-duration: 1300ms;"><div data-v-7be53ed1="" class="content" style="animation-duration: 1300ms;">{content}</div></div>"""
    hide = """<div data-v-7be53ed1="" class="page-inactive hidden"><div data-v-7be53ed1="" class="content">{content}</div></div>"""
    page = request.json['page']
    dir_b = request.json['dir']
    page_dict = globals()['page_'+request.json['url_path'].replace('.html', '').replace('/', '')]
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
    def get_page(x):
        return x if x < 10 else page_dict[x]
    if 0 < page_out <= all_page:
        res += out.format(content=render_template(f'page{get_page(page_out)}.html'))
    res += in1.format(content=render_template(f'page{get_page(page_in)}.html'))
    if 0 < page_hide <= all_page:
        res += hide.format(content=render_template(f'page{get_page(page_hide)}.html'))
    return res


@app.route('/2')
def main2():
    return render_template('test.html')


@app.route('/feedback', methods=['POST', 'GET'])
def feedback():
    name = request.json['name']
    ip = request.remote_addr
    # print(request.headers)
    member = request.json['member']
    way = request.json['way']
    if name == "" or member == "" or way == "":
        return "信息不全"
    message = mysql_connector.update_friend((name, ip, member, way))
    return str(message)


if __name__ == '__main__':
    # app.config.update(
    #     SESSION_COOKIE_SECURE=True,
    #     SESSION_COOKIE_HTTPONLY=False,
    #     SESSION_COOKIE_SAMESITE='None',
    # )
    app.run(host='0.0.0.0')
