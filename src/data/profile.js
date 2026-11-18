// 포트폴리오에 표시되는 기본 정보입니다.
// 내용을 바꾸고 싶으면 이 파일의 문구만 수정하면 됩니다.

export const profile = {
  name: '정영웅',
  nameEn: 'Jeong Youngwoong',
  role: '풀스택 개발자',
  // 한 줄 소개 (예시 문구 — 자유롭게 바꿔 쓰세요)
  headline: '사용자의 필요를 고민하고,\n설계부터 구현까지 연결하는 개발자',
  intro:
    '기능을 만들기 전에 누가, 어떤 목적으로 쓰는지 먼저 고민합니다. 국비 과정의 두 팀 프로젝트에서 기능 제안부터 ERD 설계, Spring Boot 서버와 React 화면 구현까지 참여했습니다.',
  email: 'wjdduddnd0108@naver.com',
  github: 'https://github.com/wjdduddnd0108-ops',
}

// 핵심 역량 3가지 — 각 항목은 프로젝트 근거와 함께 씁니다.
export const strengths = [
  {
    title: '사용자 관점의 기능 기획',
    body: '관리자 중심의 학원 관리 시스템에서 학생·학부모의 정보 활용 필요성을 발견하고, 과제·시험·출결 기능을 제안했습니다.',
    evidence: 'KHEDU · 기획',
  },
  {
    title: '화면부터 서버까지 연결하는 구현',
    body: '강사의 시험 출제부터 학생의 응시·채점·결과 확인까지, React와 Spring Boot로 하나의 기능 흐름을 구현했습니다.',
    evidence: 'KHEDU · 시험 시스템',
  },
  {
    title: '의견을 제시하고 조율하는 협업',
    body: '새로운 기능을 적극적으로 제안하면서도 팀의 의견을 수용해, 프로젝트 목표와 일정에 맞게 구현 범위를 조정했습니다.',
    evidence: 'KHEDU · 기능 범위 조율',
  },
]

// extra: true 인 그룹은 프로젝트 이후 따로 학습한 기술로, 칩을 점선으로 구분해 표시합니다.
export const skills = [
  {
    group: 'Back-end',
    items: ['Java 21', 'Spring Boot 3.5', 'Spring Security', 'MyBatis', 'JDBC', 'REST API'],
  },
  {
    group: 'Front-end',
    items: ['JavaScript', 'React 19', 'Vite', 'Jotai', 'Axios', 'React-Bootstrap', 'JSP', 'HTML5 / CSS3', 'jQuery / Ajax'],
  },
  { group: 'Database', items: ['Oracle 11g XE', 'ERD 설계 · 정규화', 'SQL'] },
  {
    group: 'Infra · Tools',
    items: ['AWS EC2', 'Ubuntu Linux', 'Jenkins', 'Tomcat', 'Git / GitHub', 'STS4', 'VS Code', 'DBeaver'],
  },
  { group: 'Library · API', items: ['FullCalendar', 'Kakao Maps SDK'] },
  { group: '추가 학습', note: '프로젝트 이후 별도로 학습', extra: true, items: ['Spring Data JPA'] },
]

export const certificates = [
  { date: '2026.06', name: 'ADsP (데이터분석 준전문가)', issuer: '한국데이터산업진흥원' },
  { date: '2025.03', name: '정보처리기사', issuer: '한국산업인력공단' },
  { date: '2023.10', name: 'SQLD (SQL 개발자)', issuer: '한국데이터산업진흥원' },
]

export const education = [
  {
    period: '2026.02 – 2026.10',
    name: 'KH정보교육원',
    detail: 'AWS 클라우드 기반 DevOps 개발자 양성과정 수료',
  },
  {
    period: '2019.03 – 2026.03',
    name: '남서울대학교',
    detail: '공간정보공학과 졸업',
  },
]

// 성장 섹션 — 두 프로젝트의 개발 구조 비교
export const growth = {
  title: '서로 다른 개발 구조를 경험하며 서비스 전체 흐름을 이해하다',
  columns: ['비교 항목', 'KH웍스 (세미)', 'KHEDU (파이널)'],
  rows: [
    ['화면 구성', 'JSP 기반 서버 렌더링', 'React 컴포넌트 기반'],
    ['데이터 접근', 'JDBC', 'MyBatis'],
    ['화면 · 서버 연결', '서버 렌더링과 일부 비동기 통신', 'REST API 중심'],
    ['UI 구성', '공통 CSS 활용', 'React-Bootstrap 활용'],
    ['배운 점', '직접적인 데이터 처리 흐름 이해', '역할 분리와 데이터 전달 구조 경험'],
  ],
  summary:
    'KH웍스에서는 SQL 실행부터 화면에 데이터를 표시하는 과정까지 직접 다루며 웹 서비스의 기본 구조를 익혔고, KHEDU에서는 REST API로 프론트엔드와 백엔드를 분리해 개발하며 데이터 구조와 API 응답 형식을 함께 고려하는 경험을 쌓았습니다.',
}
