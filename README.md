# git으로 협업하기

$ git push origin +master

### Git 브랜치

- **모든 버전관리 시스템은 브랜치를 지원**한다. 개발 하다보면 코드를 여러개로 복사해야 하는 일이 생기는데, 브랜치를 이용하면 코드를 복사하고 나서 원래 코드와는 상관없이 독립적으로 개발 할 수 있다.
- Git의 브랜치는 커밋 사이를 이동할 수 있는 포인터 같은 것이다. 기본적으로 Git은 main 브랜치를 만든다. 처음 커밋하면 main 브랜치가 생성된 커밋을 가리킨다. 이후 커밋을 만들면 main 브랜치는 자동으로 가장 마지막 커밋을 가리킨다.
- Git은 브랜치를 만들어 작업하고, 나중에 Merge하는 방법을 권장한다.

- main 브랜치는 최초 생성되는 기본 브랜치 이름
- 2020년 10월 전에는 Github 기본 브랜치 이름이 master → main으로 변경됐다.
    
    ![화면 캡처 2023-03-30 164038.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a6569910-800a-4ac5-9ccd-b6ba565a51c9/%ED%99%94%EB%A9%B4_%EC%BA%A1%EC%B2%98_2023-03-30_164038.png)
    
    - 저장소를 생성했을 때 안내 메세지를 확인 해보면 git branch -M main ⇒ main으로 브랜치 생성하라는 명령어

### 새 브랜치 생성하는 방법

1. **Github에서 생성**
    
    ![화면 캡처 2023-03-30 165459.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/757d9629-f40e-4925-a535-2f282481ed84/%ED%99%94%EB%A9%B4_%EC%BA%A1%EC%B2%98_2023-03-30_165459.png)
    
    ![화면 캡처 2023-03-30 165719.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6aff2dcf-731a-441a-a04b-e7a49714f706/%ED%99%94%EB%A9%B4_%EC%BA%A1%EC%B2%98_2023-03-30_165719.png)
    
    main 부분 클릭 → View all branches → New branch
    
    ![화면 캡처 2023-03-30 165920.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e5469aaf-0e6a-45da-a500-8e38098e96f1/%ED%99%94%EB%A9%B4_%EC%BA%A1%EC%B2%98_2023-03-30_165920.png)
    
    ![화면 캡처 2023-03-30 170208.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/df993aab-f0ae-44f3-a233-ab51e650bbf2/%ED%99%94%EB%A9%B4_%EC%BA%A1%EC%B2%98_2023-03-30_170208.png)
    
    💥 브랜치명을 팀원 각자 이름으로 하거나, 중복되지 않게 규칙 정해서 생성하기!
    
    💥팀원마다 각자 브랜치를 만들어서 개발하고 main branch에 merge하는 방식으로 작업! 
    

1. **로컬 작업 환경에서 생성**
    
    ![화면 캡처 2023-03-30 171204.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3c93a577-2d57-4ecf-baa5-711b05ef2842/%ED%99%94%EB%A9%B4_%EC%BA%A1%EC%B2%98_2023-03-30_171204.png)
    
    git branch 명령어로 testing 브랜치 생성
    
    ![화면 캡처 2023-03-30 172304.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/277f3736-abb9-46cf-978e-8a1d46bf9328/%ED%99%94%EB%A9%B4_%EC%BA%A1%EC%B2%98_2023-03-30_172304.png)
    
    git checkout 명령어로 다른 브랜치로 이동
    
    → git checkout testing (브랜치명)
    

- git clone으로 원격 저장소에 있는 소스코드를 다운 받는다
1. 공동 작업자 메뉴에 팀원 등록
    
    Settings → Collaborators → Add 
    

![스크린샷 2023-03-30 12.40.47.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/dcc37c9f-f589-4331-b7b3-0136ee58376d/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-03-30_12.40.47.png)

![스크린샷 2023-03-30 12.42.40.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9970c9c5-8336-4f9a-89b8-de71cb7bd585/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-03-30_12.42.40.png)

- 팀원 github 아이디를 등록 해줘야 git push가 가능하다.

push할 때 문제점!

- 다른 사람이 원격 저장소에 먼저 push 했을 경우 push 못할 수도 있다. 원격저장소에 변동사항이 생겼을 경우 그 상태에서 또 git push를 할 수 없다. (원격 저장소랑 로컬 저장소에 다른 내용이 있을 경우) ⇒ 해결 방법! **git pull**

- git pull : 원격 저장소에 있는 내용을 로컬 저장소에 합쳐달라는 명령어
- git pull (원격저장소주소 브랜치명) → ( ) 생략 가능!
- 원격 저장소 최신 변경 내용이 로컬 저장소에 반영된다.
