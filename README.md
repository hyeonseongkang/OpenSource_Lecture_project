[![CI](https://github.com/hyeonseongkang/OpenSource_Lecture_project/actions/workflows/feature_test.yml/badge.svg)](https://github.com/hyeonseongkang/OpenSource_Lecture_project/actions/workflows/feature_test.yml)

# Jhat Bot

## 프로젝트 소개

> ### 전북대 학생들을 위한 <b>Chat Bot</b>

## 기능 소개

|                                                                  인사하기                                                                  |                                                   오늘 진수당 중식 메뉴 안내 및 평가(1)                                                    |                                                   오늘 진수당 중식 메뉴 안내 및 평가(2)                                                    |
| :----------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/68272971/202896729-bfc6ca65-d9f4-4f7d-94fe-7419bba13d7d.png" height=400px width=400px> | <img src="https://user-images.githubusercontent.com/68272971/202897119-0786e822-ce0b-4cb5-9f16-08161550e2ca.png" height=400px width=400px> | <img src="https://user-images.githubusercontent.com/68272971/202896801-7f858fce-9066-45c4-8f73-1a55eed8240c.png" height=400px width=400px> |
|                                           ✅ 사용자가 "Hi" 를 입력하면 Jhat Bot이 인사를 해줘요                                            |                               ✅ 사용자가 "오늘 밥 뭐야" 를 입력하면 Jhat Bot이 진수당 중식 메뉴를 알려줘요                                |                                               ✅ 오늘이 토, 일요일인 경우는 예외처리 됩니다                                                |
|                                                              학과 사무실 안내                                                              |
| <img src="https://user-images.githubusercontent.com/68272971/202897465-0a0db921-9906-4972-a033-299557d0bb9f.png" height=400px width=400px> |
|                                 ✅ 사용자가 학과 이름을 입력하면 Jhat Bot이 학과 사무실 위치를 안내해줘요                                  |

## Demo Video

### [Jhat Bot 시연영상 🎞](https://youtu.be/0gSpb_W9Nyk)

## 설치 안내 (Installation Process)

```bash
$ git clone git주소
$ sudo apt-get install nodejs npm
$ sudo npm install @slack/rtm-api dotenv
$ sudo npm install -g eslint eslint-config-airbnb-base eslint-plugin-import
$ eslint --init
$ npx husky-init && npm install
$ sudo npm install mocha-g
```

## ISSUE 작성법

![Note-6](https://user-images.githubusercontent.com/68272971/202899110-dd1c4d08-3f9c-4bf3-8e39-faa5a4749fe8.jpg)

> 1. 제목 (commit message 규칙 적용)
> 2. 해결할 issue (가급적 image 사용)
> 3. assigness
> 4. labels

## PULL REQUEST 작성법

![Note-5](https://user-images.githubusercontent.com/68272971/202899106-fdf07b16-1154-43a6-a8f3-94913732e618.jpg)

> 1. 제목 (commit message 규칙 적용)
> 2. 결과 (가급적 image 사용)
> 3. reviewers
> 4. assigness
> 5. labels

## COMMIT MESSAGE

> 1. 규칙
>    > 1. 제목과 본문을 한 줄 띄어 구분
>    > 2. 제목은 50자 이내
>    > 3. 제목은 명령문
> 2. 구조
>    > type: subject
>    >
>    > body
> 3. type
>    > feat: 새로운 기능 추가, 기존의 기능을 요구 사항에 맞추어 수정
>    >
>    > test: 테스트 코드 추가/수정

## 팀 정보 (Team Information)

|                                                                 💻 강현성                                                                  |                                                                 💻 김남혁                                                                  |
| :----------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------: | --- |
| <img src="https://user-images.githubusercontent.com/68272971/180025878-7d63ad80-e823-4163-bbfd-4037e416fc35.JPG" height=400px width=300px> | <img src="https://user-images.githubusercontent.com/68272971/202898820-22254f1e-682a-4a9f-b671-44ff30176af4.png" height=400px width=300px> |     |
|                                                              gt9697@naver.com                                                              |                                                           science4588@gmail.com                                                            |

## 저작권 및 사용권 정보

- [MIT]
