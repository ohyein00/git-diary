# git-diary

# 나만의 깃헙이슈 다이어리 만들기

## 페이히어 프론트엔드 과제전형

### 프로젝트 설정 및 실행 방법

1. main brunch 레포지토리를 clone 해주세요.
2. `cd front` `npm install` `npm start` 명령어를 실행합니다.
3. github token 인증 문제로 github api요청이 `401` 이 뜬다면 임시로 `src/service/client.ts` 파일에서 `Authorization: `token ${token}`` 해당 부분을 후 확인 부탁드립니다.

### 과제 요구사항
전체 요구사항 중 페이지네이션은 미구현되었습니다.

- [X] 검색창에 Repository명을 입력해서 Repository를 검색할 수 있다.
- [X] 검색된 Public Repository를 등록할 수 있다.
- [X] 등록 개수는 최대 4개로 제한하며, 최대 개수 초과 등록 시 이를 사용자에게 알려준다.
- [X] 웹은 LocalStorage, 앱은 Async Storage 등 로컬 저장소를 활용한다. (웹 혹은 앱 선택)
- [X] 등록된 Repository를 삭제할 수 있다.
- [X] 등록된 각각의 Public Repository의 issue를 한 페이지에서 모아서 볼 수 있다.
- [X] 각 issue 마다 제목, Repository 명은 필수로 표현되어야 한다. 그 이외의 데이터 중 필요하다고 생각되는 부분은 추가한다.
- [X] 해당 issue를 클릭하면 Github의 상세 페이지로 이동할 수 있다.
- [ ] 페이지네이션을 통해서 계속해서 issue를 모아서 볼 수 있다.

