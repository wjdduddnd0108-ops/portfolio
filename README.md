# 정영웅 포트폴리오

React + Vite로 만든 개인 포트폴리오 사이트입니다.

## 담은 프로젝트

| 프로젝트 | 내용 | 주요 기술 |
|---|---|---|
| **KHEDU** (파이널) | 학원 통합 관리 시스템 — 시험·과제·대시보드, ERD 설계 | Spring Boot, MyBatis, React, Oracle |
| **KH웍스** (세미) | 사내 그룹웨어 — 일정·쪽지·결재 목록·관리자 기능 | Spring Boot, JSP, JDBC, Oracle |
| **오운로그** (사이드) | 운동 기록 iOS·Android 앱 — App Store 출시, AI 주도 개발 | Swift, Kotlin, Firebase, Claude Code |

## 실행하기

Node.js(20 이상)가 설치되어 있어야 합니다.

```bash
npm install     # 처음 한 번만
npm run dev     # http://localhost:5173 에서 확인
```

## 내용 수정하기

화면 코드는 건드리지 않고, 아래 두 파일만 고치면 됩니다.

| 파일 | 내용 |
|---|---|
| `src/data/profile.js` | 이름, 한 줄 소개, 핵심 역량, 기술 스택, 자격증, 교육, 연락처 |
| `src/data/projects.js` | 프로젝트 개요, ERD 설명, 트러블슈팅, 화면별 설명, 회고 |

이미지는 `public/images/khedu`(파이널), `public/images/khworks`(세미), `public/images/ounlog`(사이드)에 있습니다.
새 이미지를 넣으면 `projects.js`의 `images` 배열에 파일 이름을 추가하세요.

## 폴더 구조

```
src/
├─ data/          # 사이트에 표시되는 모든 글 (여기만 수정)
├─ components/    # 화면 조각
│  ├─ Header, Hero, Strengths, Skills, Credentials, Contact
│  ├─ Projects.jsx       # 프로젝트 카드 목록
│  ├─ ProjectModal.jsx   # 카드를 눌렀을 때 열리는 상세 화면
│  └─ Lightbox.jsx       # 이미지 크게 보기
├─ App.jsx        # 섹션 배치, 모달·라이트박스 열림 상태 관리
└─ styles.css     # 전체 스타일 (맨 위 :root 에서 색상 변경)
```

## Vercel 배포

1. GitHub에 새 저장소(예: `portfolio`)를 만들고 이 폴더를 올립니다.
   ```bash
   git init
   git add .
   git commit -m "포트폴리오 첫 배포"
   git branch -M main
   git remote add origin https://github.com/wjdduddnd0108-ops/portfolio.git
   git push -u origin main
   ```
2. [vercel.com](https://vercel.com)에 GitHub 계정으로 로그인합니다.
3. **Add New → Project**에서 `portfolio` 저장소를 **Import**합니다.
4. Framework가 **Vite**로 자동 인식되면 설정을 바꾸지 말고 **Deploy**를 누릅니다.
5. 1분 정도 뒤 `portfolio-xxxx.vercel.app` 주소가 생깁니다.

이후에는 코드를 수정하고 `git push`만 하면 자동으로 다시 배포됩니다.
