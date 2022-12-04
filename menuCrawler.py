import requests
from bs4 import BeautifulSoup
from datetime import datetime

now = datetime.now()
today = datetime.today().weekday()

# UTC 기준 
# if now.hour + 9 >= 24:
#     today += 1

today_menu = open('./todaymenu.txt', 'w', encoding="UTF-8")

weekly_menu = open('./weeklyMenu.txt', 'w', encoding="UTF-8")

webPage = requests.get("https://sobi.jbnu.ac.kr/menu/week_menu.php")
webPage.encoding = 'UTF-8'
soup = BeautifulSoup(webPage.content, "html.parser")
target = soup.find('table', { 'class' : 'tblType03'})

tbody = target.find("tbody")
rows = tbody.find_all("tr")[0]
columns = rows.find_all("td")



menu_list = []
weekly_menu_text = ""
for i in range(5):
    count = 0
    temp = columns[i].find_all("li")
    save_text = ""
    first = True
    for j in temp:
        text = j.text
        count += 1
        
        if len(text) != 0:
            #print(text)
            if len(temp) == count:
                save_text += text
            else:
                save_text += text + " "
            # if first:
            #     # save_text = text
            #     first = False
            # else :
            #     if len(temp) == count:
            #         save_text += text
            #     else:
            #         save_text += text + ", " 
    print(save_text)
    weekly_menu_text += save_text + "\n"
    menu_list.append(save_text)
#today = 4
weekly_menu.write(weekly_menu_text)
if today >= 5:
    #print("오늘은 운영하지 않습니다.")
    today_menu.write("오늘은 운영하지 않습니다.")
else:
    #print("\"" + menu_list[today] + "\"")
    today_menu.write("\"" + menu_list[today] + "\"")
today_menu.close
weekly_menu.close

