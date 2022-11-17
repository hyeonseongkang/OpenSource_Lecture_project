import requests
from bs4 import BeautifulSoup
from datetime import datetime

now = datetime.now()
today = datetime.today().weekday()

# UTC 기준 
# if now.hour + 9 >= 24:
#     today += 1

webPage = requests.get("https://sobi.jbnu.ac.kr/menu/week_menu.php")
webPage.encoding = 'UTF-8'
soup = BeautifulSoup(webPage.content, "html.parser")
target = soup.find('table', { 'class' : 'tblType03'})

tbody = target.find("tbody")
rows = tbody.find_all("tr")[0]
columns = rows.find_all("td")

menu_list = []
for i in range(5):
    temp = columns[i].find_all("li")
    save_text = ""
    first = True
    for j in temp:
        text = j.text
        if len(text) != 0:
            if first:
                save_text = text
                first = False
            else :
                save_text = save_text + ', ' + text
    menu_list.append(save_text)

if today >= 5:
    print("운영 X")
else:
    print(menu_list[today])

