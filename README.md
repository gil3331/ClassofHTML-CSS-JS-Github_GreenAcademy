# 그린컴퓨터아카데미 웹개발(HTML,CSS,Java Script,GitHub)
#### 수업일자 : 3/20 ~ 5/2(매주토요일,마지막주는 일요일 포함)

##### 수업정리(선생님 내용)
> [github_저장소](https://github.com/ministori-yonsei/green_weekend_03)<br/>
> [codepen_저장소](https://codepen.io/your-work/)

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
무료 온라인 개발 사이트 : [Codepen](https://codepen.io/knyttneve/pen/abBraRB)  
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

HTML 웹 문서에서 표시할 수 있는 콘텐츠 종류
1) 텍스트
2) 이미지(사진,로고,그림의 형태 등등)
3) 멀티미디어 콘텐츠(비디오,오디오)


### 텍스트 콘텐츠 요소(Elements)

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
1) table : table 요소를 사용하여 테이블을 정의
2) tr : tr 요소를 사용하여 테이블 행을 정의
3) td : td 요소를 사용하여 테이블 데이터를 정의
4) th : th 요소를 사용하여 테이블 표 제목을 정의

[HTML Lists](https://www.w3schools.com/html/html_lists.asp)

1) 순서없는 목록(ul)<!--unordered Lists-->
2) 순서있는 목록(ol)<!--ordered Lists-->
3) 설명 목록 <!--타이틀과 설명이 한쌍으로 묶이는 목록-->

<!--ul, ol 목록에서 중첩(nested) 형태로 사용할 때 포함관계를 주의하자 ex : 1. 1.1 2.와 같은 케이스에서
1의 li태그 안에 ol태그 li태그의 1.1내용이 포함됨-->


### 이미지 콘텐츠 요소
[HTML Images](https://www.w3schools.com/html/html_images.asp)

1) src attributes : 가져올 이미지 파일 위치 정보
2) alt(alternative) attribute: 대체 텍스트

### 멀티미디어 콘텐츠 요소
[HTML Video](https://www.w3schools.com/html/html5_video.asp)
[HTML Youtube](https://www.w3schools.com/html/html_youtube.asp)

attribute의 형태
1) name = "value"
2) name만 사용

video 태그의 attribute
1) controls : video 파일을 가져올시 컨트롤 박스를 구현해줌
2) autoplay : video 파일을 가져올 때 해당 video파일을 자동재생시킴(현재 크롬에서 데이터 사용량의 문제로 제한시킴)
3) muted : video 파일 재생 시 음소거 시킴(크롬에서 막혀서 사용하지 못하는 자동재생을 실행시킬 수 있음)
4) loop : video 파일을 반복재생 시킴

youtube의 매개변수
1) controls => youtube_url/VIDEO_ID?controls=1
2) autoplay => youtube_url/VIDEO_ID?autoplay=1
3) mute => youtube_url/VIDEO_ID?mute=1
4) loop => youtube_url/VIDEO_ID?loop=1&playlist=VIDEO_ID

여러 매개변수 동시 사용
youtube_url/VIDEO_ID?controls=1&autoplay=1&mute=1&loop=1 (&=ampersand)


### HTML5 Content Model
: Sectioning Contents(구획을 나눠주는 태그)<br/>
  => Semantic Element
> [HTML Semantic Elements](https://www.w3schools.com/html/html5_semantic_elements.asp)

1) 특정 의미를 부여해준 Container 요소
2) 레이아웃 구성할 때 각각의 영역을 구분하기 위해서 사용


### 화면구성도를 위한 온라인 포토샵 웹앱
> [Photopea.com](https://www.photopea.com/)<br/>
> [Free template site](https://freebiesbug.com/psd-freebies/piroll-design-template-agencypersonal-portfolio/)

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


## HTML작성 유의점
- 태그 작성시 소문자가 원칙으로 한다
- HTML의 속성(attribute) / CSS의 속성(property)라고 함.
- HTML의 작성에 있어서 HTML 속성은 항상 시작태그에 지정됨.
- ```<a>```는 하이퍼링크를 정의함. href 속성은 해당 페이지의 URL를 링크로 지정함.
- ```<a href = "https://www.naver.com" target = "_blank">네이버</a>```
<!--네이버나 구글 같은 거대 회사의 사이트의 경우 회사 방침에 따라 이너 프래임 상에 링크로 홈페이지 화면을 요청하는 경우 화면요청을 거절하는 경우가 있음
그렇기 때문에 위와 같이 a태그에서 target으로 새창으로 불러와서 구현을 하게 되면 정상적으로 불러올수 있음을 알수 있다.-->
- 비단 HTML 뿐만 아니라 모든 개발 언어에서 들여쓰기(tab키)는 매우 중요함. 왜냐하면 상용화단계에 들어간 개발 된 코드들은 거의 몇천줄에서 몇만줄까지도 존재하기 때문에 가독성을 위해서 매우 중요한 부분이고, 가독성이 좋을 수록 해당 어플리케이션의 유지보수 효율 또한 올라간다.
- 사이트를 구성함에 있어서 콘텐츠의 의미에 따라 중요도를 지정하고, 그 중요도에 걸맞는 태그를 걸어주는게 매우 중요함.
- HTML 태그를 사용함에 있어서 혹 태그의 호환성에 대해 확인하고 싶다면, <a href = "https://caniuse.com/" target = "_blank">caniuse</a>에서 확인하도록 하자(하위호환성을 위해선 기준을 인터넷 익스플로러 11을 기준으로 삼으면 좋다.)
- HTML5/5.1, CSS3, ES2015이후 버전들의 기술은 항상 지원여부 체크가 필요함
- 브라우저 지원 여부
  - 상위 호환성 : 새 버전 브라우저의 지원 여부
  - 하위 호환성 : 구 버전 브라우저의 지원 여부
- 일반적으로 브라우저 지원은 하위 호환성 체크가 중요함
 
[HTML Block and Inline Elements](https://www.w3schools.com/html/html_blocks.asp)

- Non-semantic element(그룹핑 요소-semantic 요소로 구분이 불가능한 컨텐츠를 그룹핑 할 때 사용되는 태그들)
  - div(division) : 자체 개행(Block type)
  - span : 개행 없음(Inline type)
 
### Block/Inline Element

- block : 새 줄(개행)에서 표시
- inline : 할 줄에 나란히 표시
- 포함관계
  - block : block, inline, contents(text) 모두 포함 가능
  - inline : inline, contents(text)만 포함 가능
  - 예외 : inline 요소인 a 태그는 모두 포함 가능


### 폼 요소

- 사용자 입력을 받을 수 있는 폼 요소
> [HTML Form Elements](https://www.w3schools.com/html/html_form_elements.asp)
 
> 텍스트 입력을 받을 수 있는 폼 요소
```
<input type="text"/> : 한 줄 입력
<textarea></textarea> : 여러 줄 입력
<input type="password"/> : 한 줄 입력, 입력 내용이 기호로 표시됨
```
> 파일 업로드 폼 요소
```
<input type="file"/>
```
> 선택 폼 요소
```
<input type="radio"/>
<input type="checkbox"/>
<select>
  <option></option> : 목록 항목(n개)
</select>
```
> 실행하는 폼 요소
```
<input type="button"/>
<input type="reset"/>
<input type="submit"/>
<button type="button"></button>
<button type="reset"></button>
<button type="submit"></button>
```

### HTML Element의 이름 붙이기
> id와 class를 사용
```
id 사용법(HTML)
ex) <p id="paragraph1">단락</p>

class 사용법(HTML)
ex) <p class="paragraph2"></p>
```
> id와 class의 차이점
- id는 하나의 HTML 파일(문서)에서 중복 사용될 수 없음(backend에서 주로 씀)
- class는 하나의 HTML 파일(문서)에서 중복 사용할 수 있음(CSS styling, Java Script 기능을 동시 적용할 수 있음-frontend에서 주로 씀)

> 표기법(여러 단어가 사용될 경우 단어를 구분)
- gnb-list-list : kebab case
- gnb_list_item : snake case
- gnbListItem : camel case
- GnbListItem : pascal case

- 파일, 폴더 이름 작성시 : snake case
- id, class 작성시 : kebab case
- javaScript 변수, 함수 작성시 : camel case

### 박스 가로배치
> float
 
- left, right 속성 값으로 가로 배치
- 부모요소를 기준으로 왼쪽 배치, 오른쪽 배치가 됨.
- right값을 사용하게 되면, 배치만 오른쪽으로 붙는게 아니라, 박스순서도 반대로 배치가 됨.
- 부모요소와 자식요소가 있다고 전제했을 때, 해당 요소가 높이와 넓이가 정해져 있지 않다면, 높이는 자식요소에 기반하게 되고, 넓이는 부모요소에 기반하게 됨.

### 반응형 웹(Responsive Web)
> OSMU(One Source Multi Use) - One Source => HTML
> 적응형 웹(Adaptive Web) - OSMU가 적용되지 않음

