// 프로젝트 데이터입니다. 이미지는 public/images 폴더에 있습니다.
// 화면을 추가하려면 features 안의 screens 배열에 항목을 하나 더 넣으면 됩니다.

const khedu = (file) => `/images/khedu/${file}`
const khworks = (file) => `/images/khworks/${file}`

export const projects = [
  {
    id: 'khedu',
    label: 'Final Project',
    name: 'KHEDU',
    subtitle: '학원 통합 관리 시스템',
    period: '2026.08.20 – 2026.09.21',
    team: '5명',
    cover: khedu('dash-admin-1.webp'),
    summary:
      '원장·데스크·강사가 쓰는 학원 관리 시스템에 학생·학부모 기능을 더해, 강의·출결·과제·시험 정보를 역할별로 제공하는 서비스입니다.',
    myRole: 'ERD 설계(팀과 함께 논의), 시험·과제, 학원·강사정보, 대시보드',
    stack: [
      'Java 21', 'Spring Boot 3.5', 'Spring Security', 'MyBatis', 'Oracle',
      'React', 'Vite', 'Jotai', 'Axios', 'React-Bootstrap', 'FullCalendar', 'Kakao Maps SDK',
      'AWS EC2', 'Jenkins', 'Tomcat',
    ],
    // 역할은 문자열 배열 또는 { group, items, muted } 묶음 배열로 쓸 수 있습니다.
    roles: [
      {
        group: '직접 설계 · 개발',
        items: [
          '시험(출제·응시·채점·결과·분석)',
          '과제(등록·제출·피드백·현황 조회)',
          '학원·강사정보 관리, Kakao Map 연동',
          '역할별 대시보드',
        ],
      },
      {
        group: '공통 기반 설계',
        items: ['ERD 설계 담당 (팀과 함께 논의)', '전체 화면 디자인 (UI 구성)'],
      },
      {
        group: '기존 데이터 활용 · 연동',
        items: ['강의 시간표 — 팀이 만든 일정 데이터를 FullCalendar로 시각화'],
      },
      {
        group: '팀 공동 · 다른 팀원 담당',
        muted: true,
        items: [
          '요구사항 분석과 기능 범위 결정',
          '수납·상담·출결 등 다른 팀원 담당 기능',
          '배포 환경 구성 (AWS EC2 · Jenkins)',
          '통합 테스트와 최종 발표',
        ],
      },
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/wjdduddnd0108-ops' }],
    // 개요 다음에 보여주는 기획 과정
    planning: {
      section: '기획',
      title: '학원 데이터에서 학부모에게 필요한 정보를 찾다',
      steps: [
        { label: '기존 기획', body: '원장·데스크·강사가 사용하는 내부 관리 시스템' },
        {
          label: '나의 제안',
          body: '출결·과제·시험 정보는 학부모에게도 유용한 데이터라고 보고, 학생·학부모 기능을 제안',
        },
        { label: '구현 결과', body: '학생은 자신의 과제·시험을, 학부모는 자녀의 학습 현황을 직접 확인' },
      ],
      excluded: {
        title: '제안했지만 제외한 기능',
        items: '지역별 학원 검색 · 정보 확인 · 문의',
        body: '내부 학원 관리 시스템이라는 목적과 개발 기간을 고려해 팀원의 의견을 받아들여 제외하고, 핵심 기능에 집중했습니다.',
      },
    },
    // 기획·역할 다음, ERD 앞에 보여주는 시험 기능 흐름 (image가 없는 단계는 진한 카드로 표시)
    examFlow: {
      title: '시험 시스템 흐름',
      steps: [
        {
          actor: '강사',
          title: '시험 출제',
          image: khedu('exam-create-1.webp'),
          items: ['시험·제한시간 설정', '객관식 문제·선택지·정답 등록'],
        },
        {
          actor: '학생',
          title: '시험 응시',
          image: khedu('exam-solve-1.webp'),
          items: ['서버 시간 기준 타이머', '답안 저장', '연결이 끊겨도 이어서 응시'],
        },
        {
          actor: '서버·DB',
          title: '검증·채점',
          items: ['종료시간·학생별 제한시간 검증', '객관식 자동 채점', '마감 지난 미제출 응시 자동 제출 (스케줄러)'],
        },
        {
          actor: '강사·학생·학부모',
          title: '결과 조회',
          image: khedu('exam-stats-1.webp'),
          items: ['평균·최고·최저와 문항별 정답률', '학생·학부모 결과 조회'],
        },
      ],
      coreLabel: '직접 구현한 핵심 로직',
      core: ['제한시간 검증', '답안 저장', '자동 채점', '미제출 자동 제출', '문항별 정답률 분석', '학부모 결과 조회'],
    },
    erd: {
      image: khedu('erd.webp'),
      caption: '팀과 함께 논의하며 ERD 설계를 담당했습니다.',
      points: [
        {
          title: '강사 ↔ 과목 다대다 분리',
          body: '강사 테이블에 과목을 함께 저장해 과목명이 반복되던 구조를, 과목은 ACADEMY_SUBJECT로 분리하고 강사와 과목은 매핑 테이블로 연결했습니다.',
          tag: 'TUTOR_SUBJECT · 복합 PK · 식별관계',
        },
        {
          title: '계정 · 직원 · 강사 정보 분리',
          body: '공통 계정, 직원 정보, 강사 전용 프로필을 나눠 중복과 불필요한 NULL을 줄였습니다.',
          tag: 'ACCOUNT → EMPLOYEE → TUTOR',
        },
        {
          title: '학생 – 보호자 N:M 연결',
          body: '보호자를 별도 테이블로 두고 연결 테이블로 학생과 이어, 형제자매·여러 보호자를 처리했습니다.',
          tag: '연결 테이블 · 복합 PK · 식별관계',
        },
      ],
    },
    troubleshooting: [
      {
        title: 'PC 시간을 바꾸면 흔들리던 응시 타이머',
        problem:
          '학생 컴퓨터의 시간을 변경하면 화면의 응시 타이머가 늘어나거나 줄어드는 문제가 있었습니다. 강사가 예외 상황을 묻는 질문을 듣고 PC 시간 변경의 영향을 의심해, 직접 시간을 바꿔 테스트하며 확인했습니다.',
        cause:
          '남은 시간을 학생 PC 시계 기준으로 계산하고 있었기 때문입니다. 제출 시 서버 검증은 있었지만, 화면 타이머는 학생 PC 환경에 따라 달라졌습니다.',
        solution:
          '서버 시간을 기준으로 남은 시간을 표시하도록 변경했습니다. 시험 종료시간과 응시 가능 여부는 백엔드에서 검증합니다.',
        result:
          'PC 시간을 바꿔도 타이머가 흔들리지 않습니다. 기능이 정상 동작하는 것과 예외 상황에서도 안전한 것은 다르다는 점을 배웠습니다.',
      },
      {
        title: '학생이 돌아오지 않으면 끝나지 않던 시험',
        problem:
          "인터넷이 끊겨도 제한시간 안에 다시 들어와 이어 볼 수 있도록 '이어서 응시하기' 기능을 만들었는데, 학생이 나간 뒤 돌아오지 않으면 시험이 끝난 후에도 '응시중'으로 남아 버튼이 계속 표시됐습니다.",
        cause:
          '제출 처리가 학생이 제출 버튼을 눌러 요청을 보낼 때만 이루어지는 구조였습니다. 학생이 돌아오지 않으면 서버에 제출 요청 자체가 오지 않아 상태가 바뀌지 않았습니다.',
        solution:
          "스케줄러를 도입해 주기적으로 '응시중' 상태이면서 마감 시각이 지난 응시 기록을 찾아 자동으로 제출 처리하도록 구현했습니다.",
        result:
          '학생이 돌아오지 않아도 시험이 정상 제출되어 끝난 시험에 버튼이 남지 않습니다. 중요한 상태 변경은 사용자 행동에만 맡기지 않고 서버에서도 처리돼야 한다는 점을 배웠습니다.',
      },
    ],
    features: [
      {
        group: '학원 · 강사정보 관리',
        screens: [
          {
            title: '학원 소개 메인 화면',
            images: [khedu('intro-1.webp'), khedu('intro-2.webp'), khedu('intro-3.webp')],
            body: '학원명, 소개 문구, 운영 과목, 연혁을 한 페이지에서 확인할 수 있도록 구성했습니다. 관리자가 등록한 정보를 API로 조회해 출력하며, 비회원도 로그인 없이 볼 수 있는 공개 페이지로 구현했습니다.',
          },
          {
            title: '학원 위치 및 Kakao Map 연동',
            images: [khedu('map-1.webp')],
            body: '등록된 주소를 좌표로 변환해 지도에 마커를 표시하고, 학원명과 주소를 보여주는 오버레이, 큰 지도 보기, 길찾기 기능을 함께 제공했습니다.',
          },
          {
            title: '강사진 목록 및 상세정보',
            images: [khedu('tutors-1.webp'), khedu('tutors-2.webp')],
            body: '강사 정보를 카드 형태로 제공하고 한줄소개, 상세소개, 담당 과목을 확인할 수 있도록 구현했습니다. 직원정보와 강사 프로필을 분리해 필요한 데이터만 조합해 제공합니다.',
          },
          {
            title: '학원정보 등록 · 수정',
            images: [khedu('academy-admin-1.webp'), khedu('academy-admin-2.webp')],
            body: '학원명, 연락처, 주소와 연혁, 운영 과목, 소개 이미지를 하나의 관리 화면에서 등록·수정할 수 있도록 구현했습니다.',
          },
          {
            title: '강사정보 등록 · 과목 관리',
            images: [khedu('tutor-new-1.webp'), khedu('tutor-edit-1.webp')],
            body: '기존 직원정보를 기반으로 강사 프로필을 만들고 담당 과목을 선택해 등록합니다. 강사와 과목의 다대다 관계를 매핑 테이블로 관리해 담당 과목 변경에도 유연하게 대응합니다.',
          },
        ],
      },
      {
        group: '과제 관리',
        screens: [
          {
            title: '강사 과제 등록',
            images: [khedu('hw-create-1.webp')],
            body: '담당 강의를 선택해 과제 제목, 내용, 마감일, 첨부파일을 설정합니다. 등록된 과제는 해당 강의 수강생에게 제공됩니다.',
          },
          {
            title: '학생 과제 제출',
            images: [khedu('hw-submit-1.webp')],
            body: '제출 내용과 첨부파일을 등록하고 마감 전까지 수정할 수 있습니다. 마감 여부는 화면뿐 아니라 백엔드에서도 확인해 제출 가능 여부를 제어했습니다.',
          },
          {
            title: '제출 현황 및 피드백',
            images: [khedu('hw-feedback-1.webp'), khedu('hw-feedback-2.webp')],
            body: '과제별로 수강생의 제출 여부를 한 번에 확인하고, 제출물에 코멘트로 피드백을 남깁니다. 학생과 학부모가 결과를 확인할 수 있도록 연결했습니다.',
          },
        ],
      },
      {
        group: '시험 관리',
        screens: [
          {
            title: '시험 등록 및 문제 구성',
            images: [khedu('exam-create-1.webp')],
            body: '시험 시작·종료시간과 제한시간을 설정하고, 문제별 객관식 선택지와 정답을 별도로 관리해 수정과 채점에 활용합니다.',
          },
          {
            title: '시험 안내 및 응시 시작',
            images: [khedu('exam-intro-1.webp')],
            body: '응시 기간, 제한시간, 문항 수, 총점을 확인한 뒤 시험을 시작합니다. 시작 시 학생별 응시정보를 생성하고 그 시점부터 제한시간을 적용합니다.',
          },
          {
            title: '시험 문제 풀이',
            images: [khedu('exam-solve-1.webp')],
            body: '문항별 답안을 저장하고 답안지에서 원하는 문제로 이동할 수 있습니다. 남은 시간은 시험 종료시간과 응시 시작시간을 기준으로 계산하고, 백엔드에서도 응시 가능 시간을 검증합니다. 인터넷이 끊겨도 제한시간 안에 다시 들어와 이어서 응시할 수 있습니다.',
          },
          {
            title: '응시 현황 및 시험 분석',
            images: [khedu('exam-stats-1.webp')],
            body: '응시 인원과 평균·최고·최저 점수, 문항별 정답률 그래프를 제공합니다. 정답률 30% 미만 문항은 강조해 정답 설정 오류를 확인할 수 있게 했습니다.',
          },
          {
            title: '시험 제출 및 결과 확인',
            images: [khedu('exam-result-1.webp')],
            body: '최종 제출하면 저장된 답안과 정답을 기준으로 결과를 확인합니다. 학부모도 자녀의 응시 여부와 결과를 조회할 수 있습니다.',
          },
        ],
      },
      {
        group: '대시보드 · 시간표',
        screens: [
          {
            title: '원장 / 데스크 대시보드',
            images: [khedu('dash-admin-1.webp')],
            body: '강의, 과제, 시험, 상담 등 학원 운영 현황을 한 화면에 요약해, 오늘 처리할 정보를 빠르게 확인할 수 있도록 구성했습니다.',
          },
          {
            title: '강사 대시보드',
            images: [khedu('dash-tutor-1.webp')],
            body: '로그인한 강사의 담당 강의, 과제, 시험, 당일 수업 정보만 조회해 보여줍니다.',
          },
          {
            title: '학생 · 학부모 대시보드',
            images: [khedu('dash-student-1.webp')],
            body: '학생은 오늘의 수업, 미제출 과제, 응시 가능 시험을 확인하고, 학부모는 연동된 자녀의 학습 정보를 확인합니다.',
          },
          {
            title: '강의실별 주간 시간표',
            images: [khedu('timetable-1.webp')],
            body: '팀에서 구현한 강의 일정 데이터를 FullCalendar로 시각화해, 강의실을 선택하면 주간 수업 일정을 시간대별로 확인할 수 있도록 했습니다.',
          },
        ],
      },
    ],
    // 회고는 문자열 하나 또는 { items, note } 형태로 쓸 수 있습니다.
    retrospective: {
      items: [
        {
          title: '좋은 기획에는 우선순위가 필요하다',
          body: '사용자에게 필요한 기능을 제안하는 것뿐 아니라, 프로젝트 목적과 개발 일정에 맞춰 구현 범위를 결정하는 과정이 중요하다는 점을 배웠습니다.',
        },
        {
          title: '기능 완성과 검증은 별개의 과정이다',
          body: '시험 응시 타이머와 상태 변경 오류를 수정하면서, 정상 동작뿐 아니라 예외 상황까지 검증해야 한다는 점을 경험했습니다.',
        },
        {
          title: '협업은 의견을 조율하는 과정이다',
          body: '초기 기획에서 팀원과 의견이 달랐지만, 구현 가능성과 일정을 함께 고려해 기능 범위를 조정했습니다.',
        },
      ],
      note: '개발 후반 테스트 시간을 충분히 확보하지 못해 발표 중 오류가 있었고, 이후 검증 시간도 일정에 포함해야 한다는 기준을 세웠습니다.',
    },
  },
  {
    id: 'khworks',
    label: 'Semi Project',
    name: 'KH웍스',
    subtitle: '사내 그룹웨어',
    period: '2026.05.26 – 2026.06.23',
    team: '5명',
    cover: khworks('calendar-1.webp'),
    summary:
      '사내 일정·결재·쪽지 등 흩어진 업무를 하나의 시스템에서 처리할 수 있도록 그룹웨어를 구축했습니다. 상용 그룹웨어의 기능과 구조를 분석해 회사·부서·개인 단위 일정 관리, 결재 알림, 쪽지, 관리자 기능을 구현했습니다.',
    myRole: 'ERD 설계, 일정·쪽지·결재 목록·관리자 기능 개발',
    stack: ['Spring Boot 3', 'JSP', 'JDBC', 'Java', 'Oracle', 'JavaScript', 'FullCalendar', 'STS4', 'GitHub'],
    roles: [
      'ERD 설계',
      '공통 작업: AOP, 회원 DB 설계, 회원 CRUD, 공통 CSS',
      '일정 · 쪽지 · 결재 목록 · 관리자 화면 구현',
      '담당 기능의 서버 로직 및 DB 처리 구현',
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/wjdduddnd0108-ops' }],
    // 개요 다음에 보여주는 데이터 연동 흐름 (KHEDU의 planning과 같은 형식)
    planning: {
      section: '일정 데이터 연동',
      steps: [
        { label: '기존 데이터', body: 'DB에서 조회한 일정 데이터는 FullCalendar에 바로 넘길 수 없는 형식' },
        { label: '데이터 변환', body: 'FullCalendar의 JSON 이벤트 형식(제목·시작일·종료일 등)으로 변환해 전달' },
        { label: '캘린더 적용', body: '회사·부서·개인 일정을 구분해 표시하고 클릭·드래그로 등록' },
      ],
    },
    troubleshooting: [],
    features: [
      {
        group: '회원',
        screens: [
          {
            title: '아이디 찾기',
            images: [khworks('find-id-1.webp')],
            body: '이름과 이메일 입력 후 이메일 인증을 완료하면 일치하는 계정의 아이디를 보여줍니다. 인증 미완료나 정보 불일치 시에는 다음 단계로 넘어가지 않도록 처리했습니다.',
          },
          {
            title: '비밀번호 찾기',
            images: [khworks('find-pw-1.webp')],
            body: '이메일 인증을 거친 뒤 임시 비밀번호를 생성해 계정 비밀번호를 변경하고, 해당 임시 비밀번호를 안내하도록 처리했습니다.',
          },
        ],
      },
      {
        group: '일정',
        screens: [
          {
            title: '홈 화면 일정 캘린더',
            images: [khworks('calendar-1.webp'), khworks('calendar-2.webp'), khworks('calendar-3.webp'), khworks('calendar-4.webp')],
            body: 'FullCalendar로 회사·부서·개인 일정을 구분해 조회합니다. 날짜 클릭·드래그로 일정을 등록하고, 본인이 작성한 일반 일정에만 수정·삭제 버튼을 제공했습니다. 모든 입력 창에 필수값 검증을 적용했습니다.',
          },
          {
            title: '일정 목록 페이지',
            images: [khworks('schedule-list-1.webp'), khworks('schedule-list-2.webp'), khworks('schedule-list-3.webp')],
            body: '기간, 작성자, 부서명, 일정명, 일정 타입으로 검색할 수 있는 목록 페이지를 별도로 구현했습니다.',
          },
        ],
      },
      {
        group: '결재 · 쪽지',
        screens: [
          {
            title: '홈 화면 결재 목록',
            images: [khworks('approval-1.webp'), khworks('approval-2.webp')],
            body: '권한에 따라 관리자에게는 결재 대기 목록을, 일반 사원에게는 본인이 작성한 결재 목록을 보여줍니다.',
          },
          {
            title: '쪽지 목록 및 알림',
            images: [khworks('memo-list-1.webp')],
            body: '받은 쪽지 개수를 헤더에 표시하고, 3초마다 새 쪽지 여부를 조회해 도착 시 알림을 띄웁니다. 보낸 사람·제목·분류 검색과 읽은 쪽지 일괄 삭제를 제공합니다.',
          },
          {
            title: '쪽지 상세 및 작성',
            images: [khworks('memo-detail-1.webp'), khworks('memo-detail-2.webp')],
            body: '답변 버튼으로 바로 회신하고, 결재 알림 쪽지에는 결재 상세로 이동하는 버튼을 제공합니다. 관리자는 전 직원 공지 쪽지를 보낼 수 있습니다.',
          },
        ],
      },
      {
        group: '관리자',
        screens: [
          {
            title: '헤더 · 직책 종류 관리',
            images: [khworks('admin-types-1.webp')],
            body: '일정 헤더 종류와 직책 종류를 조회·추가·삭제할 수 있도록 구현했습니다.',
          },
          {
            title: '접속 로그',
            images: [khworks('access-log-1.webp')],
            body: '접속자가 어떤 IP로 어떤 페이지에 접근했는지 확인할 수 있도록 페이지 접근 로그 목록을 구현했습니다.',
          },
        ],
      },
    ],
    retrospective:
      '처음으로 기획부터 구현까지 팀 개발 전 과정에 참여했습니다. 아쉬웠던 점은 모바일 환경을 고려하지 못한 것과 팀원 간 코드 작성 방식이 통일되지 않은 것이었습니다. 이를 계기로 React의 컴포넌트 기반 구조와 반응형 디자인을 학습했고, 파이널 프로젝트에서는 프론트엔드와 백엔드를 분리해 화면 구성과 코드 스타일의 일관성을 보완했습니다.',
  },
]
