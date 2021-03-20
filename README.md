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
마크다운 사용법 사이트 : [안내문서](https://gist.github.com/ihoneymon/652be052a0727ad59601)
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
