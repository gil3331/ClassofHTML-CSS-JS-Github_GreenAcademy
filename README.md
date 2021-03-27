# 그린컴퓨터아카데미 웹개발(HTML,CSS,Java Script,GitHub)
#### 수업일자 : 3/20 ~ 5/2(매주토요일,마지막주는 일요일 포함)

## GitHub 기초 개념

> GitHub 용어

- stage : commit할 대상을 선택
- commit : 수정한 내용을 저장함
- push : Git server에 commit된 내용을 업로드함
- pull : Git server에서 다운로드
- branch : (협업시 사용) 마스터 브렌치를 최대한 침범하지 않기 위한 분할 개념의 저장방식, 각각의 개발자가 독립적으로 개발하기 위한 분할 방식
- merge : 그런 분할된 브렌치를 합치는 과정
- pull request : 각 브렌치들이 master에게 자신의 작업이 완료되었음을 표시하여, merge하기 위한 요청

> 참고사이트URL

웹 표준학습 사이트 : [W3Schools](https://www.w3schools.com/)<br/>
무료 온라인 개발 사이트 : [Codeten](https://codepen.io/knyttneve/pen/abBraRB)  
마크다운 사용법 사이트 : [안내문서](https://gist.github.com/ihoneymon/652be052a0727ad59601)<br/>
생활코딩 사이트 : [생활코딩](https://opentutorials.org/course/1)
<!--개행은 <br/>이나 가장 마지막 라인에 스페이스바로 공백을 2번 주면 가능함-->

## WEB/IT 기초 개념
> 클라이언트-서버 모델
<!--아래는 github에 저장된 이미지파일을 직접 업로드를 한 뒤, 해당 파일을 링크로 끌어온 방식-->
<img src="https://github.com/gil3331/ClassofHTML-CSS-JS-Github_GreenAcademy/blob/main/ServerClientSystem.png" width="648" /><br/>
클라이언트-서버 모델에서 클라이언트는 사용자가 사용하는 디바이스를 의미하고, 서버는 클라이언트가 접속해서 데이터나 파일을 요청했을 때 응답하는 시스템
  
클라이언트와 서버는 네트워크를 통해서 연결됨
<!--아래는 아예 직접 외부사이트의 원본 이미지파일 url을 가져와서 링크로 가져온 방식-->
<img src="https://s3-ap-northeast-2.amazonaws.com/opentutorials-user-file/course/2614/4971.png"  />
클라이언트와 서버 모델은 실제 연결은 아니지만 개념적으로 클라이언트 입장에서 1:1로 연결되었다고 생각할 수 있음<br/>
클라이언트 서버 모델에서 이루어지는 동작은 클라이언트의 요청(request)과 서버의 응답(response)의 형태로 이루어져 있음

클라이언트는 클라이언트 디바이스에서 실행되는 웹브라우져이고, 서버는 서버 디바이스에서 실행되는 서버 소프트웨어가 실제로 사용되는 것을 의미함


## HTML

> HTML Introduction Url : (https://www.w3schools.com/html/html_intro.asp)<br/>
> HTML Attributes Url : (https://www.w3schools.com/html/html_attributes.asp)<br/>
> HTML Elements Url : (https://www.w3schools.com/html/html_elements.asp)<br/>


HTML 속성(Attributes)
1) HTML Element에 추가 정보를 제공
2) name = "value" 형태로 사용

> [HTML Headings](https://www.w3schools.com/html/html_headings.asp)<br/>

제목 태그(Tag)
Heading -> hn : h1~h6

HTML 단락(Paragraphs)
> [HTML Paragraphs](https://www.w3schools.com/html/html_paragraphs.asp)<br/>

단락 태그
Paragraph -> p

수평선
Horizontal Rules -> hr <!--hr태그는 Empty tag(빈 태그) 이다.-->


> [HTML Links](https://www.w3schools.com/html/html_links.asp)

하이퍼링크
Anchor -> a
href : 링크로 연결된 목적지 주소
 1) 외부링크
  - 링크 주소 입력 시 http(https) 키워드를 반드시 사용
 2) 북마크(내부링크)
  - 목적지에 id attribute를 사용해서 이름을 정해줌
  - href attribute에 #를 사용해서 목적지 이름을 넣어줌 <!--ex : <a href = "#id">-->

> [HTML Table](https://www.w3schools.com/html/html_tables.asp)
테이블
- [Table Generator](https://www.tablesgenerator.com)<!--테이블 작성 시 편리한 툴인 웹앱 사이트 -->

[HTML Lists](https://www.w3schools.com/html/html_lists.asp)

1) 순서없는 목록(ul)<!--unordered Lists-->
2) 순서있는 목록(ol)<!--ordered Lists-->
3) 설명 목록 <!--타이틀과 설명이 한쌍으로 묶이는 목록-->

<!--ul, ol 목록에서 중첩(nested) 형태로 사용할 때 포함관계를 주의하자 ex : 1. 1.1 2.와 같은 케이스에서
1의 li태그 안에 ol태그 li태그의 1.1내용이 포함됨-->


--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


## HTML작성 유의점
- 태그 작성시 소문자가 원칙으로 한다
- HTML의 속성(attribute) / CSS의 속성(property)라고 함.
- HTML의 작성에 있어서 HTML 속성은 항상 시작태그에 지정됨.
- <!--<a>-->는 하이퍼링크를 정의함. href 속성은 해당 페이지의 URL를 링크로 지정함.
- <a href = "https://www.naver.com" target = "_blank">네이버</a>
<!--네이버나 구글 같은 거대 회사의 사이트의 경우 회사 방침에 따라 이너 프래임 상에 링크로 홈페이지 화면을 요청하는 경우 화면요청을 거절하는 경우가 있음
그렇기 때문에 위와 같이 a태그에서 target으로 새창으로 불러와서 구현을 하게 되면 정상적으로 불러올수 있음을 알수 있다.-->















