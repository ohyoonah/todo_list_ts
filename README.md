## 📝 Todo List

데이터의 삽입, 삭제, 수정, 저장이 가능한 일정 관리 애플리케이션 입니다.

🔗 [블로그 기술 정리](https://ohyoonah.github.io/project/2022-09-18-todolist/)

🔗 [배포 사이트](https://ohyoonah.github.io/todo_list/)

<br>

![시연](public/test.gif)

<br>

## 📅 개발 기간

**2022.08 - 2022.09**

<br>

## 📂 디렉토리 구조

```
├─ src
│  ├─ App.tsx
│  ├─ components
│  │  ├─ TodoEdit.tsx
│  │  ├─ TodoHead.tsx
│  │  ├─ TodoInsert.tsx
│  │  ├─ TodoItem.tsx
│  │  ├─ TodoList.tsx
│  │  └─ TodoTemplate.tsx
│  ├─ index.tsx
│  ├─ store
│  │  ├─ modules
│  │  │  └─ todoSlice.tsx
│  │  └─ store.tsx
│  └─ styles
│     ├─ colorPalette.ts
│     ├─ GlobalStyle.ts
│     ├─ todoEditStyle.ts
│     ├─ todoHeadStyle.ts
│     ├─ todoInsertStyle.ts
│     ├─ todoListStyle.ts
│     └─ todoTemplateStyle.ts
```

<br>

## ⚙ 실행 방법

```
npm install --global yarn
yarn
yarn start
```

<br>

## 🛠 기술 스택

React, styled-components

<br>

## 💡 컴포넌트 구조

- **`App.js`**: `GlobalStyle`과 `TodoTemplate` 컴포넌트를 보여줌
- **`TodoTemplate.js`**: 각 컴포넌트드를 묶어주는 메인 컴포넌트 상태와 함수를 작성해서 각 컴포넌트에 props로 전달하고, localStorage를 이용해 로컬에 데이터를 저장해 줌
- **`TodoHead.js`**: 오늘의 날짜와 체크(완료)되지 않은 항목의 개수를 보여줌
- **`TodoInsert.js`**: 버튼을 누르면 입력창이 보이게 구현
- **`TodoList.js`**: map 함수로 `TodoItem` 컴포넌트를 반복해서 보여줌
- **`TodoItem.js`**: 입력한 항목과 체크(완료) 버튼, 수정 버튼, 삭제 버튼, 중요 표시 버튼을 보여줌
- **`TodoEdit.js`**: 모달창이 띄워지고 각 항목의 id 값을 받아와서 데이터를 수정할 수 있음
- **`GlobalStyle.js`**: 사용할 색들을 정리해 둠
